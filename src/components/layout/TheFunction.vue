<template>
    <div v-if="!changeUI" class="function">
        <div class="function__left">
            <div class="function__left__title">Tiềm năng của tôi</div>
            <div class="icon__menu--16">
                <div class="icon--downblack--small"></div>
            </div>
            <div class="function__left__text">Sửa</div>
            <div class="hover__refresh">
                <BaseTooltip class="show__tooltip" contentTooltip="Nạp dữ liệu"/>
                <div class="icon--refresh" @click="loadData"></div>
            </div>
        </div>
        <!-- End Function Left -->
        <div class="function__right" style="position:relative;">
            <div class="icon--search"></div>
            <BaseTextField class="base-text-field"
            backgroundColor="white"
            width="240px"
            hasIconSearch
            placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, ..."
            style="margin-right: 8px;">
            <BaseTooltip class="show__tooltip" contentTooltip="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"/>
            </BaseTextField>
            
                <div class="all">
                    <div class="icon--16">
                        <div class="icon--plus"></div>
                    </div>
                    <router-link to="/add">
                        <Button buttonText="Thêm" hasHoverAndActivePrimaryBlue hasIcon hasBorderRight/>
                    </router-link>
                  
                </div>
                <div class="all">
                    <div class="icon--16">
                        <div class="icon--down"></div>
                    </div>
                    <Button hasHoverAndActivePrimaryBlue hasBorderLeft/>
                </div>
            
            <div class="all right__threedot--32">
                <div class="icon--16">
                    <div class="icon--threedot"></div>
                </div>
            </div>
            <div class="all right__threedot--64">
                <div class="icon--16">
                    <div class="icon--threecol"></div>
                </div>
                <div class="icon--16">
                    <div class="icon--downblack--small downblack__position"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- np -->
    <div v-if="changeUI" class="function">
    <div class="function__left">
      <p  style="cursor: pointer;">Đã chọn <span class="count-selected">1</span></p>
      <div style="margin: 0 16px;cursor: pointer;"><p style="color: #2b4eee">Bỏ chọn</p></div>
        <div class="all">
            <div class="icon--16">
                <div class="icon--mountTag"></div>
            </div>
            <Button buttonText="Gắn thẻ" hasTertiary  backgroundColor="#ffffff" hasIcon hasBorderRight/>
        </div>
        <div class="all">
            <div class="icon--16">
                <div class="icon--downblack--small"></div>
            </div>
            <Button hasTertiary backgroundColor="#ffffff" hasBorderLeft style="margin-right:8px;"/>
        </div>

        <div class="all">
            <div class="icon--16">
                <div class="icon--updateInfo"></div>
            </div>
           <BaseButton hasIcon backgroundColor="#ffffff" hasTertiary buttonText="Cập nhật thông tin" style="margin-right:8px;"/>
        </div>

        <div class="all">
            <div class="icon--16">
                <div class="icon--convert"></div>
            </div>
            <BaseButton hasIcon backgroundColor="#ffffff" hasTertiary buttonText="Chuyển đổi" style="margin-right:8px;"/>
        </div>

        
      <div class="show-menu" @click="onClickShowMenu">
        <button class="button-more"></button>
        <div :hidden="!showMore" class="show-more__lists">
          <div class="show-more__item">
            <ButtonBasic
              content="Chọn lộ trình đi tuyến"
              iconLeft="ic-choose-to-routing"
            />
            <ButtonBasic content="Email Marketeting" iconLeft="ic-send-email" />
            <ButtonBasic content="Gửi SMS" iconLeft="icon-chat-gray" />
            <ButtonBasic content="Xuất khẩu" iconLeft="ic-export"  @click="exportExel"/>
            <ButtonBasic content="Chia sẻ" iconLeft="ic-share-right" />
            <ButtonBasic
              @click="showModal"
              content="Xóa"
              iconLeft="icon-delete-look-red"
            />
          </div>
          <div class="show-more__item"></div>
          <div class="show-more__item"></div>
        </div>
      </div>
    </div>
    <div class="function__right" style="position:relative;" >
        <div class="icon--search"></div>
            <BaseTextField class="base-text-field" 
            backgroundColor="white"
            width="240px"
            hasIconSearch
            placeholder="Tìm kiếm theo Địa chỉ, Tổ chức, ..."
                >
            <BaseTooltip class="show__tooltip" contentTooltip="Tìm kiếm theo Địa chỉ, Tổ chức, Email cá nhân, Họ và tên, ĐT di động, ĐT cơ quan, Email cơ quan, Mã số thuế"/>
            </BaseTextField>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import Button from '../../components/base/BaseButton.vue'
import BaseTextField from '../base/BaseTextField.vue'
import { mapState, mapMutations } from 'vuex'
import ButtonBasic from '../base/ButtonBasic.vue'
import BaseTooltip from '../base/BaseTooltip.vue'
import BaseButton from '../../components/base/BaseButton.vue'
// import BasePopup from '../base/BasePopup.vue'
export default {
    components: {
    Button,
    BaseTextField,
    BaseTooltip,
    ButtonBasic,
    BaseButton,
    // BasePopup
},
props: {
  },
  data() {
    let showMore = false
    return {
      showMore,
      ...mapState(['changeCheckBox', 'leadsIDNeedDelete', 'isShowModal']),
    }
  },
  
  computed: {
    /**
     * Nếu 1 trong các hàng dữ liệu được chọn thì phần chức năng sẽ thay đổi giao diện
     * Author: DTAN 08/08/22
     */
    changeUI() {
      return this.$store.state.moduleA.changeCheckBox
    },
  },
  methods: {
    ...mapMutations(['showModal', 'hiddenModal']),
    /**
     * Hiển thị thêm các chức năng tại button có kí hiệu 3 chấm
     * Author: DTAN 12/08/22
     */

    onClickShowMenu() {
      this.showMore = !this.showMore
    },

    /**
     * Hàm xuất file exel
     * Author: DTAN 18/08/2022
     */
    exportExel() {
      axios({
        url: "http://localhost:5214/api/Export",
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "DSKhachHangTiemNang.xlsx");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
    },








  },
}
</script>
<style>

@import url(../../css/layout/function.css);

.show-more__lists {
  padding: 8px 0;
  position: absolute;
  transform-origin: left top;
  max-width: 280px;
  overflow: auto;
  border-radius: 4px;
  outline: 0;
  max-height: calc(100vh - 48px);
  min-width: 79px !important;
  min-height: 48px !important;
  box-shadow: 0 2px 6px #00000052;
  background: #fff;
}
.count-selected {
  font-family: Bold;
  color: #1f2229;
}

.icon-refresh-wrap {
  padding: 8px;
  cursor: pointer;
  margin-left: 12px;
}
.icon-refresh-wrap:hover {
  border-radius: 50%;
  background-color: #c5c9d3;
  z-index: 20;
}
.arrow_drop_down_16 {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -48px -32px;
  cursor: pointer;
}
.icon-dropdown {
  text-transform: none !important;
  font-weight: 500 !important;
  /* border: 1px solid #d3d7de!important; */
  /* min-width: 64px; */
  /* height: 32px; */
  line-height: 20px !important;
  /* padding: 5px 8px; */
  /* border-radius: 4px; */
  -moz-background-clip: padding;
  /* -webkit-background-clip: padding-box; */
  /* background-clip: padding-box; */
  /* border: 1px solid #e2e4e9; */
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  /* box-sizing: border-box; */
  /* background-color: #fff; */
  color: #1f2229;
  /* font-size: 13px; */
  /* line-height: 13px; */
  /* font-family: Roboto,Arial,Helvetica,sans-serif; */
  /* font-weight: 400; */
  font-feature-settings: normal;
  font-variant: normal;
  /* cursor: pointer; */
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  /* transition: all .3s ease-in-out; */
  -moz-transition: all 0.3s ease-in-out;
  /* -webkit-transition: all .3s ease-in-out; */
  /* position: relative; */
  -ms-box-sizing: border;
  -o-box-sizing: border;
  box-sizing: border;
}

.icon-dropdown::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -128px -304px;
}
.switch-view-type {
  display: flex;
  text-transform: none !important;
  font-weight: 500 !important;
  border: 1px solid #d3d7de !important;
  height: 32px;
  width: 55px;
  line-height: 20px !important;
  padding: 7px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #e2e4e9;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  color: #1f2229;
  font-size: 13px;
  line-height: 13px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  position: relative;
}
.switch-view-type:hover {
  background-color: #f0f2f4;
}

.show-menu {
  margin-right: 8px;
  position: relative;
}
.button-more {
  width: 36px;
  text-transform: none !important;
  font-weight: 500 !important;
  border: 1px solid #d3d7de !important;
  min-width: 34px;
  height: 32px;
  border-radius: 4px;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #e2e4e9;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #fff;
  color: #1f2229;
  font-size: 13px;
  line-height: 13px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  position: relative;
  -ms-box-sizing: border;
  -o-box-sizing: border;
  box-sizing: border;
}

.button-more:hover {
  background-color: #f0f2f4;
}

.button-more::before {
  content: '';
  width: 16px;
  height: 16px;
  display: inline-block;
  background: transparent url('../../assets/img/icon_collection.svg')
    no-repeat -48px 0;
}
.hover__refresh{
    width:24px;
    height:24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
}
.hover__refresh:hover .show__tooltip{
    display: block;
    width: auto;
    position: absolute;
    top:56px;
    left: 180px;
}
.hover__refresh:hover{

    border-radius: 50%;
    background-color: #c5c9d3;

}
.base-text-field:hover .show__tooltip{
display: block;
position: absolute;
top:46px;
left:12px;
width:260px;
}
</style>