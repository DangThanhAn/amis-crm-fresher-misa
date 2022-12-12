<template>
  <TheFunction />
  <div class="content">
    <div
      id="showLeft"
      class="slideleft"
      @click="showContentLeft"
      style="display: none"
    >
      <div class="icon--slideright"></div>
    </div>
    <div class="content__left" id="contentLeft">
      <div class="content__left__title">
        <div class="icon--downblack--small icon__content--positon"></div>
        BỘ LỌC ĐÃ LƯU
      </div>
      <div class="content__left__title">
        <div
          class="icon--search"
          style="position: absolute; top: 10px; left: calc(259px - 36px)"
        ></div>
        LỌC TIỀM NĂNG THEO
      </div>
      <div class="checkbox__list" style="position: relative">
        <BaseCheckboxItem
          v-for="item in checkboxs"
          :key="item.id"
          :contentLabel="item.contentLabel"
          hasTooltip
          :contentTooltip="item.contentLabel"
        />
        <div class="see__more">
          <hr width="68" size="30" />
          <span seeMoreSpan>Xem thêm</span>
          <hr width="68" size="30" />
        </div>
        <!-- footer content left -->
        <!-- <div class="crm-footer">
          <BaseButton
            style="margin-right: 8px"
            buttonText="Bỏ lọc"
            hasTertiary
            backgroundColor="white"
          />
          <BaseButton buttonText="Áp dụng" hasHoverAndActivePrimaryBlue />
        </div> -->
      </div>

      <div class="slideleft" @click="hideContentLeft">
        <div class="icon--slideleft"></div>
      </div>
    </div>
    <!-- End content left  -->
    <div class="content__mid">
      <div class="table-all">
        <table class="table">
          <thead>
            <tr>
              <th
                style="
                  width: 36px;
                  border: none !important;
                  padding: 0 !important;
                "
              >
                <div class="icon--col1 parent__td--icon">
                  <div title="Tùy chỉnh cột" class="icon--tdtable"></div>
                </div>
              </th>
              <th
                style="
                  width: 28px !important;
                  border: none !important;
                  padding: 0 !important;
                "
                class="text-align-right"
              >
                <BaseCheckbox
                  checkboxAll
                  :checked="this.isCheckAll"
                  @checkAll="handleCheckAll"
                  id="iconCheckAll"
                  style="margin: 0 12px"
                />
              </th>
              <th style=" width: 165px; border-left: none !important; padding-left: 0px !important;" class="text-align-left">
                <span>Thẻ</span>
                <div class="search-grid-mat-menu icon-search-grid right-6"></div>
              </th>
              <th class="text-align-left" style="max-width: 105px">
                <span>Xưng hô</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 180px">
                Họ và tên
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="max-width: 120px">
                <span>Chức danh</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 150px">
                <span>ĐT di động</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 150px">
                <span>ĐT cơ quan</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 180px">
                <span>Email cơ quan</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 180px">
                <span>Email cá nhân</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 300px">
                <span>Tổ chức</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 200px">
                <span>Địa chỉ</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 120px">
                <span>Tỉnh/Thành phố</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 150px">
                <span>Quận/Huyện</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="width: 150px">
                <span>Phường/Xã</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="max-width: 200px">
                <span>Nguồn gốc</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="max-width: 180px">
                <span>Loại hình</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="max-width: 180px">
                <span>Lĩnh vực</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
              <th class="text-align-left" style="max-width: 200px">
                <span>Mô tả</span>
                <div
                  class="search-grid-mat-menu icon-search-grid right-6"
                ></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              ref="row"
              v-for="lead in this.leadData"
              :key="lead.LeadSourceID"
              :class="[{ 'row-checked tr.row-checked td:nth-child(2) td:first-child': lead.checked }]"
              @dblclick="dbClickOnTableRow(lead.LeadID)"
              @click="clickOnRow(lead.LeadID,lead)"
            >
              <td
                style="
                  width: 36px;
                  border: none !important;
                  padding: 0 !important;
                "
              >
                <div class="icon--col1" style="background-color: none">
                  <router-link to="" @click="clickOnPen(lead.LeadID)"
                    ><div class="icon--pen"></div
                  ></router-link>
                </div>
              </td>
              <td
                style="
                  width: 28px;
                  border: none !important;
                  padding: 0 !important;
                "
                class="text-align-right"
              >
                <BaseCheckbox
                  :checked="lead.checked"
                  :id="lead.LeadID"
                  @checkboxItem="handleCheckBoxItem"
                  style="margin: 0 12px"
                />
              </td>
              <td
                style="
                  width: 165px;
                  border-left: none !important;
                  padding-left: 0px !important;
                "
                class="text-align-left"
              ></td>
              <td class="text-align-left" style="width: 105px">
                {{ lead.SalutationName || "-" }}
              </td>
              <td class="text-align-left text--blue" style="width: 180px">
                <router-link to="" @click="dbClickOnTableRow(lead.LeadID)">{{
                  lead.LastName + " " + lead.FirstName
                }}</router-link>
              </td>
              <td class="text-align-left" style="max-width: 120px">
                {{ lead.TitleName || "-" }}
              </td>
              <td class="text-align-left text--blue" style="width: 150px">
                <div class="text--icon">
                  <div v-if="lead.Mobile" class="icon--tblcall"></div>
                  <div>{{ lead.Mobile || "-" }}</div>
                </div>
              </td>
              <td class="text-align-left text--blue" style="width: 150px">
                <div class="text--icon">
                  <div v-if="lead.OfficeMobile" class="icon--tblcall"></div>
                  <div>{{ lead.OfficeMobile || "-" }}</div>
                </div>
              </td>
              <td class="text-align-left text--blue" style="max-width: 180px">
                {{ lead.Email || "-" }}
              </td>
              <td class="text-align-left text--blue" style="max-width: 180px">
                {{ lead.OfficeEmail || "-" }}
              </td>
              <td class="text-align-left" style="width: 300px">
                {{ lead.CompanyName || "-" }}
              </td>
              <td class="text-align-left" style="width: 200px">
                {{ lead.Address || "-" }}
              </td>
              <td class="text-align-left" style="width: 120px">
                {{ lead.ProvinceName || "-" }}
              </td>
              <td class="text-align-left" style="width: 150px">
                {{ lead.DistrictName || "-" }}
              </td>
              <td class="text-align-left" style="width: 150px">
                {{ lead.WardName || "-" }}
              </td>
              <td class="text-align-left" style="max-width: 200px">
                {{ lead.LeadSourceName || "-" }}
                <!-- nguồn gốc -->
              </td>
              <td class="text-align-left" style="max-width: 180px">
                <!-- loại hình -->
                {{ lead.BusinessTypeName || "-" }}
              </td>
              <td class="text-align-left" style="max-width: 180px">
                <!-- lĩnh vực -->
                {{ lead.IndustryName || "-" }}
              </td>
              <td class="text-align-left" style="max-width: 200px">
                <!-- mô tả -->
                {{ lead.Description || "-" }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="navigate">
        <div class="navigate__left">
          <div class="icon--sort-setting"></div>
          <div class="navigate__sum">Tổng số: 103</div>
        </div>
        <div class="navigate__right">
          <div>
            <BaseDropdownMenu
              :arrays="CHANGE_PAGE_SIZE"
            />
          </div>
          <div class="icon--pre2"></div>
          <div class="icon--pre1"></div>

          <div class="navigate__text" style="font-weight: 500">1 đến 50</div>
          <div class="icon--next1"></div>
          <div class="icon--next2"></div>
        </div>
      </div>
    </div>
    <div
      id="showIconRight"
      @click="showContentRight"
      style="display: none"
      class="slideright"
    >
      <div class="icon--slideleft"></div>
    </div>
    <div id="contentRight" class="content__right">
      <div class="slideright" @click="hideContentRight">
        <div class="icon--slideright"></div>
      </div>
      <div class="content__right__row1">
        <div class="item__icon__row1">
          <div class="icon--call"></div>
          <BaseTooltip class="show__tooltip" contentTooltip="Thêm cuộc gọi" />
        </div>
        <div class="item__icon__row1">
          <div class="icon--complete"></div>
          <BaseTooltip style="position:absolute; top 10px; left:48px" class="show__tooltip" contentTooltip="Thêm nhiệm vụ" />
        </div>
        <div class="item__icon__row1">
          <div class="icon--calu"></div>
          <BaseTooltip style="position:absolute; top 10px; left:130px" class="show__tooltip" contentTooltip="Thêm lịch hẹn" />
        </div>
        <div class="item__icon__row1">
          <div class="icon--email"></div>
          <BaseTooltip style="position:absolute; top 10px; left:202px" class="show__tooltip" contentTooltip="Gửi Email" />
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
  <BaseTag style="display: none" contentText="Chị" width="50px" hasIconClose />
  <BasePopup
    :id="leadSelected"
    @updateData="loadData()"
    contentText="Bạn có chắc chắn muốn xóa Tiềm năng này không?"
  />
  <BaseLoadding
    :isShow="isShowLoading"
    @isShowLoading="functionIsShowLoading"
  />
</template>

<script>
import CHANGE_PAGE_SIZE from "@/constants/change-page-size";
import uuidv4 from "../../constants/checkbox-id";
import { ref } from "vue";
import BaseTag from "../base/BaseTag.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import TheFunction from "../layout/TheFunction.vue";
import LIST_CHECKBOX from "../../constants/listcheckbox";
import BaseCheckboxItem from "../base/BaseCheckboxItem.vue";
import BaseDropdownMenu from "../base/BaseDropdownMenu.vue";
import BasePopup from "../base/BasePopup.vue";
import BaseLoadding from "../base/BaseLoadding.vue";
import { mapState, mapMutations } from "vuex";
import BaseTooltip from "../base/BaseTooltip.vue";

export default {
  components: {
    BaseTag,
    BaseCheckbox,
    TheFunction,
    BaseCheckboxItem,
    BaseDropdownMenu,
    BasePopup,
    BaseLoadding,
    BaseTooltip
},
  props: ["isShow"],
  setup() {
    const checkboxs = ref(LIST_CHECKBOX);
    return {
      checkboxs,
      isCheckAll: false,
      uuidv4,
    };
  },
  created() {
    this.loadData();
  },
  data() {
    let leadData = [];
    return {
      leads: null,
      leadData,
      leadSelected: "",
      CHANGE_PAGE_SIZE,
      isShowLoading: false,
      rowOnClick:false,
      ...mapState(["changeCheckBox", "leadsIDNeedDelete"]),
    };
  },
  // ---https://cukcuk.manhnv.net/api/v1/Employees
  // ---http://localhost:5214/api/v1/Leads'
  methods: {
    /**
     * Author: DTAN (27/7/2022)
     * @param{} Ẩn content bên phải "-"
     */
    hideContentRight() {
      document.getElementById("contentRight").style.display = "none";
      let iconShow = document.getElementById("showIconRight");
      iconShow.style.display = "flex";
      iconShow.style.top = "57%";
      iconShow.style.right = "0";
    },

    /**
     * Author: DTAN (27/7/2022)
     * @param{} Hiện content bên trái "-"
     */
    showContentRight() {
      document.getElementById("contentRight").style.display = "block";
      document.getElementById("showIconRight").style.display = "none";
    },

    /**
     * Author: DTAN (27/7/2022)
     * @param{} Ẩn content bên trái "-"
     */

    hideContentLeft() {
      document.getElementById("contentLeft").style.display = "none";
      let iconShow = document.getElementById("showLeft");
      iconShow.style.left = "0";
      document.getElementById("showLeft").style.display = "flex";
    },
    /**
     * Author: DTAN (27/7/2022)
     * @param{} Hiện content bên trái "-"
     */

    showContentLeft() {
      document.getElementById("contentLeft").style.display = "block";
      document.getElementById("showLeft").style.display = "none";
    },

    /**
     * Hàm lấy dữ liệu tiềm năng từ api
     * @author: ANDT 12/08/2022
     */
    loadData() {
      this.functionIsShowLoading(true); // Hiển thị loadding
      let leadsData;
      const getLeadsData = async () => {
        try {
          leadsData = await (
            await fetch("http://localhost:5214/api/v1/Leads", { method: "GET" })
          ).json();
          return leadsData;
        } catch (error) {
          console.log(error);
        }
      };
      /**
       * Gọi hàm lấy dữ liệu và gán trường checked cho từng tiềm năng
       * @author: ANDT 10/08/2022
       */

      const asyncMounted = async () => {
        this.leadData = await getLeadsData();

        this.leadData = this.leadData?.map((lead) => {
          return {
            ...lead,
            checked: false,
          };
        });
        this.functionIsShowLoading(false);
      };
      asyncMounted();
    },
    /**
     * Sự kiện tích toàn bộ các hàng
     * @author: ANDT 12/08/2022
     */

    handleCheckAll() {
      this.isCheckAll = !this.isCheckAll;
      if (this.isCheckAll) {
        // Đánh dấu đã tích vào ít nhất một hàng tiềm năng
        this.selectedCheckBox();
        this.leadData = this.leadData.map((lead) => ({
          ...lead,
          checked: true,
        }));
      } else {
        // Đánh dấu là chưa tích vào hàng dữ liệu nào
        this.unSelectedCheckBox();
        this.leadData = this.leadData.map((lead) => ({
          ...lead,
          checked: false,
        }));
      }
    },
    /**
     * Sự kiện tích vào từng ô trên mỗi hàng
     * Author: DTAN 12/08/22
     * @param {*} idCheckBox
     */

    handleCheckBoxItem(idCheckBox) {
      // Chỉ số checkbox
      let index = -1;
      this.leadData = this.leadData.map((lead, i) => {
        if (lead.LeadID === idCheckBox) {
          index = i;
          return { ...lead, checked: !lead.checked };
        }
        return { ...lead };
      });
      if (this.leadData.every((lead) => lead.checked === false)) {
        // Đánh dấu là chưa tích vào hàng dữ liệu nào
        this.unSelectedCheckBox();
      }
      if (this.leadData[index].checked) {
        // Đánh dấu đã tích vào ít nhất một hàng tiềm năng
        this.selectedCheckBox();
        // Thêm tiềm id của tiềm năng cần xóa
        this.addItemLeadsID(idCheckBox);
      } else {
        // Xóa id tiềm năng khỏi danh sách cần xóa
        this.removeItemLeadsID(idCheckBox);
      }
    },
    /**
     *  Sự kiện double click vào các hàng dữ liệu thì chuyển qua
     *  chi tiết tiềm năng
     *  Author: DTAN 12/08/22
     */

    dbClickOnTableRow(leadID) {
      this.$router.push({ path: `/lead/view/${leadID}` });
      this.leadSelected = leadID;
    },
    /**
     *  Sự kiện click vào các hàng dữ liệu
     *  Author: DTAN 12/08/22
     */

    clickOnRow(leadID) {
      this.leadSelected = leadID;
      this.rowOnClick = !this.rowOnClick;
      // console.log(lead.FirstName);
      // console.log(this.leadSelected);
    },
    /**
     *  Sự kiện click vào nút sửa thì chuyển sang trang sửa
     *  Author: DTAN 12/08/22
     */

    clickOnPen(leadID) {
      this.$router.push({ path: `/lead/edit/${leadID}`});
      this.leadSelected = leadID;
    },
    /**
     * Đặng Thành An (16/8/2022)
     * Hiển thị loading
     */

    functionIsShowLoading(isShow) {
      this.isShowLoading = isShow;
    },
    /**
     * Lấy các phương thức global từ store
     * Author: DTAN 16/08/22
     */

    ...mapMutations([
      "selectedCheckBox",
      "unSelectedCheckBox",
      "addItemLeadsID",
      "removeItemLeadsID",
    ]),
  },
};
</script>

<style scoped>
@import url(../../css/layout/content.css);
a {
  text-decoration: none;
  text-align: center;
  color: #4262f0;
}
a:hover {
  text-decoration: underline;
}
.see__more {
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 8px;
}
.see__more span[seeMoreSpan] {
  margin: 0 10px;
  color: #4262f0;
  cursor: pointer;
}
hr {
  border-top: 1px solid #d3d7de !important;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 0;
  height: 0;
}
/* khi click vào chech box lis thì overflow-y auto, chữ thành ẩn bớt, và add thêm check list bên dưới */

/* Hover của content left */
.checkbox__list {
  overflow: hidden;
  height: calc(100% - 80px);
  position: relative;
}
.checkbox__list:hover {
  overflow-y: auto;
}
::-webkit-scrollbar {
  background-color: #f0f2f4;
}

/* Track */
::-webkit-scrollbar-track {
  margin-top: 40px;
}

/* table */ 
tr.row-checked {
  background-color: #fdefe7;
}

tr.row-checked td:nth-child(2),
tr.row-checked  td:first-child {
  background-color: #fdefe7 !important;
}

tr.row-checked:hover td:nth-child(2),
tr.row-checked:hover td:first-child{
  background-color: #fbded0 !important;
}

tr.row-checked:hover {
  background-color: #fbded0 !important;
}

/* footer content left */
.crm-footer {
  min-height: 56px !important;
  max-height: 56px !important;
  padding-right: 16px;
  text-align: right;
  background-color: #f0f2f4;
  border-top: 1px solid #d3d7de;
  border-bottom: 1px solid #d3d7de;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.item__icon__row1:hover .show__tooltip{
  display: block;
}
</style>