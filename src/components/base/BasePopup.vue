<template>
  <div class="dialog" :hidden="!this.$store.state.showModal.isShowModal">
    <div class="popup">
      <div class="popup__header">
        <div class="popup__title">{{ titleText }}</div>
        <div class="popup__close" @click="hiddenModal">
          <i style="font-size: 16px; opacity: 0.4" class="fas fa-times"></i>
        </div>
      </div>
      <div class="popup__subtitle">{{ contentText }}</div>
      <div class="popup__footer">
        <BaseButton
          @click="hiddenModal"
          style="margin: 0 8px"
          hasTertiary
          backgroundColor="#e2e4e9"
          buttonText="Hủy"
        ></BaseButton>
        <BaseButton
          hasPrimaryRed
          buttonText="Đồng ý"
          @click="onClickDelete"
        ></BaseButton>
      </div>
    </div>
  </div>
  <BaseToast id="isShowToast" type="success" content="Xóa thành công" />
</template>
<script>
import BaseButton from "./BaseButton.vue";
import { mapState, mapMutations } from "vuex";
import axios from "axios";
import BaseToast from "./BaseToast.vue";
export default {
  props: {
    id: String,
    contentText: {
      type: String,
      default: () => "nội dung thông báo",
    },
    titleText: {
      type: String,
      default: () => "Thông báo",
    },
  },
  emits: ["updateData"],
  components: { BaseButton, BaseToast },
  methods: {
    /**
     * Hàm rải các function từ store ra
     * Author: DTAN 09/08/2022
     */
    ...mapMutations(["showModal", "hiddenModal", "unSelectedCheckBox"]),

    /**
     * Hàm xử lí khi click vào nút đồng ý xóa
     * Author: DTAN 09/08/2022
     */
    onClickDelete() {
      document.getElementById("isShowToast").style.display = "none";
      try {
        axios
          .delete(`http://localhost:5214/api/v1/Leads/${this.id}`)
          .then(() => {
            // 1. Cập nhật lại data
            this.$emit("updateData");

            // 2. Hiển thị toast message
            document.getElementById("isShowToast").style.display = "block";

            // 3. Ẩn Popup đi
            this.hiddenModal();
            
            // 4. Xóa lựa chọn trên checkbox
            this.unSelectedCheckBox();
          })
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  data() {
    return {
        // rải data isShowModal (= false) ra
      ...mapState(["isShowModal"]),
    };
  },
};
</script>
<style>



</style>