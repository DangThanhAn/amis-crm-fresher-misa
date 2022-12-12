<template>
    <div class="leadDetail" >
        <div class="content__Left">
          <div class="nodata">
            <div class="icon-nodata-big"></div>
          <div class="text-nodata">Tính năng này đang phát triển</div>
          </div>
        </div>
       <div id="contentRight" class="content__right">
      <div class="slideright" @click="hideThis">
        <div class="icon--slideright"></div>
      </div>
      <div class="content__right__row1">
        <div class="item__icon__row1">
          <div class="icon--call"></div>
        </div>
        <div class="item__icon__row1">
          <div class="icon--complete"></div>
        </div>
        <div class="item__icon__row1">
          <div class="icon--calu"></div>
        </div>
        <div class="item__icon__row1">
          <div class="icon--email"></div>
        </div>
      </div>
      <div class="content__right__row2">
        <div class="content__row2__title">Lịch sử giao dịch</div>
        <div class="content__row2__item">
          <div class="item__logo">
            <div class="icon--ghichu"></div>
          </div>
          <div class="item__content">
            <div class="item__content__title">Ghi chú</div>
            <div class="item__content__text">
              Nguyễn Văn Hà (A006) - 12/08/2021
            </div>
          </div>
        </div>
      </div>
      <div class="toolbar__right">
        <div class="icon-filter"></div>
      </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.content__Left{
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-nodata{
  color:#586074;
  padding-top: 8px;
  font-style: italic;
  font-weight:500;
}
.icon-nodata-big::before{
  content: "";
  display: inline-block;
  width: 80px;
  height: 80px;
  background: transparent url(https://crmplatform.misacdn.net/appnew/assets/Images/icon/EmptyInbox.svg) no-repeat 0 -40px;
}
.leadDetail{
    display: flex;
}
.content__Left{
    width: calc(100% - 320px);
}
.content__right{
    height: 100vh;
}
</style>