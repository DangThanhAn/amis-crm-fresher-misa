<template>
  <div class="toast">
    <div class="toastmessage" :class="{
        'toastmessage--info': isInformation,
        'toastmessage--error': isError,
        'toastmessage--warning': isWarning,
        'toastmessage--success': isSuccess,
  }">
    <div class="toast__left">
      <div :class="{ 
        'icon--information': isInformation,
        'icon--error': isError,
        'icon--warning': isWarning,
        'icon--success': isSuccess,
        }"></div>
    </div>
    <div class="toast__mid">{{ content }}</div>
    <div class="toast__right">
        <div class="icon--close"></div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: "Status message",
    },
    width: {
      type: String,
      default: () => "200px",
    },
    // xác định kiểu toast (màu)
    type: {
      type: String,
      required: true,
      // chỉ được chuyền cac giá trị ['information','error','warning','success']
      validator(type) {
        return ["information", "error", "warning", "success"].includes(type);
      },
    },
  },
  computed: {
    /**
     * Kiểm tra trạng thái của toast message
     * AUTHOR: ANDT (19/07/2022)
     */
    isInformation() {
      return this.type === "information";
    },
    isWarning() {
      return this.type === "warning";
    },
    isError() {
      return this.type === "error";
    },
    isSuccess() {
      return this.type === "success";
    },
  },
};
</script>
<style>
@import url(../../css/base/toast.css);

.toast__mid{
    font-size: 13px;
}
.toast {
    display: none;
    position: fixed;
    left: 50%;
    z-index: 10;
}
</style>