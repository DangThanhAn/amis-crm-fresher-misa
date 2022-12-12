<template>
  <div class="baseButton" :class="{ disabled: isDisabled }">
    <button
      class="button"
      :class="[
        { button__icon: hasIconFunc },
        { 'btn--left': hasBorderRightFunc },
        { 'btn--right': hasBorderLeftFunc },
        { 'button__primary--blue': hasHoverAndActivePrimaryBlue },
        { 'button__secondary--outlineblue': hasSecondaryOutLineFunc },
        { button__tertiary: hasTertiaryFunc },
        { 'button__primary--red': hasPrimaryRedFunc },
        { 'button__bold': hasTextBoldFunc },
      ]"
    >
      <div class="buttonContent">{{ buttonText }}</div>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    //Nội dung của button
    buttonText: {
      type: String,
      default: "",
    },
    //Màu nền của nút
    backgroundColor: {
      type: String,
      default: "#4262F0",
    },
    // button có icon không?
    hasIcon: {
      type: Boolean,
      default: false,
    },
    // button có thuộc tính disabled không
    disabled: {
      type: Boolean,
      default: false,
    },
    // button có border right không?
    hasBorderRight: {
      type: Boolean,
      default: false,
    },
    // button có border left không?
    hasBorderLeft: {
      type: Boolean,
      default: false,
    },
    // button có outline không?
    hasSecondaryOutLine: {
      type: Boolean,
      default: false,
    },
    // button kiểu terirary?
    hasTertiary: {
      type: Boolean,
      default: false,
    },
    hasPrimaryRed: {
      type: Boolean,
      default: false,
    },

    // button có hover active
    hasHoverAndActivePrimaryBlue: {
      type: Boolean,
      default: false,
    },
    hasTextBold:{
      type: Boolean,
      default: false,
    }
  },

  computed: {
    // Button có icon không?
    hasIconFunc() {
      return this.hasIcon;
    },
    // Button là disable hay không?
    isDisabled() {
      return this.disabled;
    },
    // Button có borderleft không?
    hasBorderLeftFunc() {
      return this.hasBorderLeft;
    },
    // Button có border right không?
    hasBorderRightFunc() {
      return this.hasBorderRight;
    },
    // Button có outline không?
    hasSecondaryOutLineFunc() {
      return this.hasSecondaryOutLine;
    },
    // Button có phải tertirary không?
    hasTertiaryFunc() {
      return this.hasTertiary;
    },
    // Button có hover và active không?
    hasHoverAndActivePrimaryBlueFunc() {
      return this.hasHoverAndActivePrimaryBlue;
    },
    hasPrimaryRedFunc() {
      return this.hasPrimaryRed;
    },
    //Chữ button màu đậm?
    hasTextBoldFunc(){
      return this.hasTextBold;
    },
  },
};
</script>
<style>

</style>