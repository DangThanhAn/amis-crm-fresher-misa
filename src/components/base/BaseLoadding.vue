
<template>
    <!-- Loading -->
    <div class="loading" v-bind:class="{isShowLoading:isShow}">
        <div class="loading__content">
            <div class="loading__icon"></div>
            <div class="loading__text">Đang xử lý</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isShow']
}
</script>
<style scoped>
.loading {
    /* ẩn*/
    display: none;
    /* Không bị phụ thuộc bởi thành phần nào khác */
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(44, 43, 43, 0.511);
    z-index: 100;
}

.isShowLoading {
    display: block !important;
}

.loading__content {
    /* Theo vị trí cha */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


/* toạo icon loading xoay */

.loading__icon {
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #2ca01c;
    /* border-right: 8px solid #2ca01c; */
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
    /* background-image: url(../../Resource/loading.svg);
    width: 32px;
    height: 32px;
    margin: 0 auto; */
}


/* @-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
} */

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.loading__text {
    font-weight: bolder;
    color: #ffffff;
    margin-top: 4px;
    font-size: 16px;
}
</style>