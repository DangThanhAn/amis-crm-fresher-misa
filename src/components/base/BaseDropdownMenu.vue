<template>
  <div :id="id" class="dropdown">
    <button
      type="button"
      @click="dropDownOnClick"
      :class="{ isActive: isOpen }"
    >
       <div :id="idButton" class="dropdown-content" :v-model="text">{{ text}}</div>
      <div class="icon--downblack--small icon"></div>
    </button>
    <slot>
      
      <div class="dropdown-list" v-if="isOpen">
      <div class="item--search" v-if="hasInputSearchFunc">
          <div class="icon--search"></div>
          <input ref="inputRef" id="input__dropdown" class="input__dropdown" placeholder="Tìm kiếm" width="465px"/>
        </div>
        <div class="list__dropdown">
          <DropDownItem
          v-for="item in arrays"
          :key="item.id"
          :item="item"
          :closeDropdown="callToClose"
          @click="() => itemOnSelect(item)"
        >
          {{ item.text }}
        </DropDownItem>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import DropDownItem from "./BaseDropdownItem.vue";
import uuid from "../../constants/checkbox-id";
export default {
  components: {
    DropDownItem,
  },
  setup() {
    return {
      id: uuid(),
    };
  },
  data() {
    return {
      isOpen: false,
      data:[],
      text:"-Không chọn-",
      value: null
    };
  },
  props: {
    idButton: String,

    // url lấy từ api
    url:{
      type: String
    },

    // set màu 
    color: {
      type: String,
      default: "#454545",
    },
    width: {
      type: String,
      default: "182px",
    },

    // Truyền data cho các item drop down
    arrays: {
      type: Array,
      default: () => [],
    },

    // Có icon tìm khiếm không?
    hasInputSearch: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * Kiểm tra xem có icon search không?
     * AUTHOR: DTAN 12/08/2022
     */
    hasInputSearchFunc() {
      return this.hasInputSearch;
    },
  },

  methods: {
    /**
     * Hàm thực hiện việc đóng DropDown
     * AUTHOR: DTAN 12/08/2022
     */
    callToClose() {
      this.isOpen = false;
    },

    /**
     * Nếu click ra ngoài, drop down menu tắt
     * AUTHOR: DTAN 12/08/2022
     */
    onClick(event) {
      if (!document.getElementById(this.id).contains(event.target)) {
        this.isOpen = false;
      }
    },

    /**
     * Nếu click vào item thì gán lại giá trị cho text
     * AUTHOR: DTAN 12/08/2022
     */
    itemOnSelect(item) {
      this.text = item.text;
    },

    /**
     * Tự động focus vào ô input tìm kiếm khi dropdown mở ra
     * AUTHOR: DTAN 12/08/2022
     */
    dropDownOnClick(){
      this.isOpen = !this.isOpen;
      this.$nextTick(() => {
        this.focusInput()
      })
    },

    /**
     * Hàm Focus
     * AUTHOR: DTAN 12/08/2022
     */
    focusInput() {
      this.$refs.inputRef.focus()
    },
  },
  created() {
    window.addEventListener("click", this.onClick);
    //Thực hiện lấy dữ liệu từ API
    // fetch(this.url)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.data = res;
    //   })
  },
  beforeUnmount() {
    window.removeEventListener("click", this.onClick);
  },
};
</script>

<style scoped>
button {
  color: v-bind(color);
  position: relative;
  padding: 0 8px 0 16px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  transition: 0.3s;
  height: 32px;
  width: 100%;
  border: 1px solid #d3d7de;
  padding-left: 16px;
  padding-right: 8px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button:focus {
  outline: 0px;
}
.dropdown {
  position: relative;
  width: fit-content;
  cursor: pointer;
  background: #ffffff;
  min-width: v-bind(width);
  position: relative;
}
.dropdown-list {
  padding-bottom: 8px;
  -ms-box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.32);
  -o-box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.32);
  box-shadow: 0 -1px 8px #00000052;
  background: #ffffff;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  width: 100%;
  bottom: 32px;
  right: 0px;
  position: absolute;
 
}
.list__dropdown{
  padding-top: 8px;
 max-height: 200px;
  overflow:auto ;
  overflow-x: hidden;
}
.input__dropdown {
  box-sizing: border-box;
  width: 465px;
  height: 40px;
  padding: 4px 0px;
  outline: none;
  border: none;
  border-bottom: 1px solid #d3d7de;
  z-index: 10;
}
input[placeholder] {
  font-size: 13px;
  padding: 4px 4px 4px 16px;
}
.icon--search {
  top:12px; 
    left: calc(100% - 25px);
}
/* .item--search{
  position: sticky;
  top:0;
} */
</style>