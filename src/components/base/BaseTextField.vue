<template>
  <div :class="{ form__item: hasLabelFunc }">
    <label v-if="hasLabelFunc" :class="{ label: hasLabelFunc }" for="">
      <span
        >{{ contentLabel }}
        <span v-if="hasRequiedFunc" style="color: red"> *</span>
        <BaseTooltip
          class="show__tooltip"
          v-show="hasTooltipFunc"
          :contentTooltip="contentTooltip"
        />
      </span>
    </label>
    <div style="box-sizing: border-box">
      <input class="input"
        @input="$emit('changeValue', fieldName, $event.target.value)"
        @blur="$emit('blurMethod', fieldName, valueProp)"
        :value="valueProp"
        :id="idInput"
        :type="typeInput"
        :placeholder="placeholder"
        :readonly="readOnly"
        :class="[{ 'input__icon input__icon--search': hasIconSearchFunction }]"
      />
      <div :id="classMessError" v-if="classMessError">{{ contentError }}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import BaseTooltip from "./BaseTooltip.vue";
export default {
  props: {
    // Tên trường
    fieldName: String,

    // Giá trị của ô input
    valueProp: String,

    // Kiểu ô input
    typeInput: {
      type: String,
      default: "search",
    },

    // Custom style cho thông báo lỗi
    classMessError: String,

    // Nội dung thông báo lỗi là gì
    contentError: String,

    // binding ID cho ô input
    idInput: String,

    // set border:
    borderColor: {
      type: String,
      default: "#d3d7de",
    },

    // Nội dung tooltip
    contentTooltip: {
      type: String,
      default: "this is default of tooltip",
    },

    // Màu nền ô input
    backgroundColor: {
      type: String,
      default: "#fff",
    },

    // Thiết lập chiều ngang cho text field
    width: {
      type: String,
      default: "240px",
    },

    // Gợi ý cho text filed
    placeholder: {
      type: String,
      // required: true,
    },

    // Chỉ định attribute chỉ đọc cho thẻ input
    readOnly: {
      type: Boolean,
      default: false,
    },
    
    // Chỉ định nội dung thẻ label
    contentLabel: {
      type: String,
      default: "",
    },

    // Label nằm ngang hàng với thẻ input
    leftLabel: {
      type: Boolean,
    },

    // Label nằm bên trên thẻ input
    topLabel: {
      type: Boolean,
    },

    // thêm icon tìm kiếm vào thẻ input hay không?
    hasIconSearch: {
      type: Boolean,
    },

    // thêm icon tìm kiếm vào bên trái thẻ input hay không?
    hasIconSearchLeft: {
      type: Boolean,
    },

    // có label hay không?
    hasLabel: {
      type: Boolean,
      default: false,
    },

    // có tooltip hay không?
    hasTooltip: {
      type: Boolean,
      default: false,
    },

    // Có bắt buộc nhập hay không?
    hasRequied: {
      type: Boolean,
      default: false,
    },

    // có lỗi không?
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    /**
     * Kiểm tra props truyền vào có label không ?
     * Author: ANDT 20/07/2022
     */
    hasLabelFunc() {
      return this.hasLabel;
    },

    /**
     * Kiểm trả props truyền vào có icon search không ?
     * Author: ANDT 20/07/2022
     */
    hasIconSearchFunction() {
      return this.hasIconSearch ? true : false;
    },

    /**
     * Kiểm tra xem có tooltip không?
     */
    hasTooltipFunc() {
      return this.hasTooltip;
    },

    /**
     * Kiểm tra xem có tìm bắt buộc nhập không?
     */
    hasRequiedFunc() {
      return this.hasRequied;
    },

    /**
     * Author: ĐTAn 28/07/2022
     * Kiểm tra xem input nhập có lỗi không?
     */
    hasErrorFunc() {
      return this.hasError;
    },
  },
  components: { BaseTooltip },
};
</script>
<style>
span:hover .show__tooltip {
  display: block !important;
  z-index: 1 !important;
  cursor: pointer;
}
.input {
  box-sizing: border-box;
  min-width: v-bind(width);
  max-width: 400px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #d3d7de;
  border-color: v-bind(borderColor);
  padding: 8px 16px;
  outline: none;
  background-color: v-bind(backgroundColor);
}
/* 
.input:hover {
  border-color: #7c869c;
} */

.input:focus {
  border-color: #4262f0;
}

.input:focus-visible {
  border-color: #4262f0;
}

.input--error {
  border-color: #ec4141;
}
.input--error:focus {
  border-color: #ec4141;
}
.input--error:hover {
  border-color: #ec4141;
}
.input--success {
  border-color: #31b491;
}

.input__icon {
  padding-left: 32px;
}

.input::placeholder {
  font-size: 13px;
  color: #bbbbbb;
}

.input__icon--search {
  margin-top: 0px;
  margin-left: 36px;
}
.input[readonly] {
  background-color: #e2e4e9;
}
.input[readonly]::placeholder {
  color: #586074;
}
.input[readonly]:focus {
  border: 1px solid #d3d7de;
}
.input[readonly]:hover {
  border: 1px solid #d3d7de;
}

.input__icon--search:hover {
  border: 1px solid #d3d7de;
}

.input__icon--search:focus {
  box-sizing: border-box;
  border: 1px solid#4262F0;
}

.label {
  padding-top: 0px;
  min-width: 200px;
  max-width: 200px;
  max-height: 32px;
}
#message--error {
  box-sizing: border-box;
  color: red;
  height: 28px;
  padding-top: 8px;
  display: none;
}
#message--error--test {
  box-sizing: border-box;
  color: red;
  height: 28px;
  padding-top: 8px;
  display: none;
}

input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: inherit;
  height: 16px;
  width: 16px;
  border-radius: 50em;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -80px -16px;
  opacity: 0;
  right: 3px;
  position: absolute;
}
input[type="search"]:focus::-webkit-search-cancel-button {
  opacity: 1;
  pointer-events: all;
}

input[type="search"]::-webkit-search-cancel-button:hover {
  background-color: #d3d7de;
}
</style>

