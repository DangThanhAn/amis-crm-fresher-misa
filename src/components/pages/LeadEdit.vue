<template>
  <div class="function" style="height: 64px">
    <div class="function__left">
      <div class="function__left__title">Sửa Tiềm năng</div>
      <div class="function__left__text">Sửa bố cục</div>
    </div>
    <div class="function__right">
      <router-link to="/">
        <BaseButton backgroundColor="#ffffff" hasTertiary buttonText="Hủy bỏ" />
      </router-link>
      <BaseButton
        style="margin: 0 8px"
        hasSecondaryOutLine
        buttonText="Lưu và thêm"
        @click="clickSaveAndAdd"
      />
      <BaseButton
        hasHoverAndActivePrimaryBlue
        buttonText="Lưu"
        @click="clickSaveAndAdd"
      />
    </div>
  </div>
  <div class="add__content">
    <div class="title__image">Ảnh tiềm năng</div>
    <div class="avatar__image"><div class="icon__avatar"></div></div>
    <div class="add__form">
      <div class="title__image">Thông tin chung</div>
      <div class="form__row">
        <div class="form__col1">
          <div class="form__item">
            <label for="">Xưng hô</label>
            <BaseDropdownMenu
              ref="SalutationName"
              hasInputSearch
              :arrays="XUNG_HO"
              style="margin-left: 10px; position: relative"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            v-model="txtFirstName"
            idInput="txtFirstName"
            classMessError="message--error"
            contentError="Tên không được để trống"
            style="position: relative"
            contentLabel="Tên"
            hasRequied
            contentTooltip="Tên"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Phòng ban</label>
            <BaseDropdownMenu
            ref="DepartmentName"
              hasInputSearch
              :arrays="PHONG_BAN"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            idInput="txtMobile"
            contentLabel="ĐT di động"
            contentTooltip="ĐT di động"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Không gửi Email</label>
            <BaseCheckbox id="1" style="margin-left: 10px" />
          </div>
          <TextField
            idInput="txtOfficeEmail"
            style="position: relative"
            contentLabel="Email cơ quan"
            contentTooltip="Email cơ quan"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Mã số thuế"
            contentTooltip="Mã số thuế"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Nguồn gốc</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="NGUON_GOC"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            contentLabel="Zalo"
            contentTooltip="Zalo"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Phân loại khách hàng</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="PHAN_LOAI_KHACH_HANG"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            contentLabel="Loại học bổng"
            contentTooltip="Loại học bổng"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Điểm HSKK"
            contentTooltip="Điểm HSKK"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Điểm HSK"
            contentTooltip="Điểm HSK"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div isTextArea class="form__item">
            <label for="">Chia sẻ cá nhân</label>
            <BaseTextArea style="margin-left: 10px" width="465px" />
          </div>
        </div>
        <div class="form__col2">
          <TextField
          idInput="txtFullName"
            :valueProp="lead.LastName + ' ' + lead.FirstName"
            style="position: relative"
            contentLabel="Họ và tên"
            readOnly
            contentTooltip="Họ và tên"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            v-model="txtLastName"
            idInput="txtLastName"
            style="position: relative"
            contentLabel="Họ và đệm"
            contentTooltip="Họ và đệm"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Chức danh</label>
            <BaseDropdownMenu
              ref="TitleName"
              hasInputSearch
              :arrays="CHUC_DANH"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            idInput="txtOfficeTel"
            contentLabel="ĐT cơ quan"
            contentTooltip="ĐT cơ quan"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Không gọi điện</label>
            <BaseCheckbox id="2" style="margin-left: 10px" />
          </div>
          <TextField
            style="position: relative"
            idInput="txtEmail"
            contentLabel="Email cá nhân"
            contentTooltip="Email cá nhân"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            idInput="txtCompanyName"
            contentLabel="Tổ chức"
            contentTooltip="Tổ chức"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Mã ngân sách"
            contentTooltip="Mã ngân sách"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Quy mô"
            contentTooltip="Quy mô"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Học vấn hiện tại"
            contentTooltip="Học vấn hiện tại"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Trường học"
            contentTooltip="Trường học"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            style="position: relative"
            contentLabel="Hình thức học mong muốn"
            contentTooltip="Hình thức học mong muốn"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div isTextArea class="form__item">
            <label for="">Hồ sơ</label>
            <BaseTextArea style="margin-left: 10px" width="465px" />
          </div>
          <TextField
            style="position: relative"
            contentLabel="Thời gian dự định du học"
            contentTooltip="Thời gian dự định du học"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            idInput="txtTest"
            classMessError="message--error--test"
            contentError="Test chuyển đổi không được để trống"
            style="position: relative"
            contentLabel="Test chuyển đổi"
            hasRequied
            contentTooltip="Test chuyển đổi"
            hasTooltip
            hasLabel
            width="465px"
          />
        </div>
      </div>
      <div class="title__image" style="margin-top: 48px">Thông tin tổ chức</div>
      <div class="form__row">
        <div class="form__col1">
          <TextField
            style="position: relative"
            contentLabel="Tài khoản ngân hàng"
            contentTooltip="Tài khoản ngân hàng"
            hasTooltip
            hasLabel
            width="465px"
          />
          <BaseDateTimePicker
            color="#99a1b2"
            hasLabel
            contentLabel="Ngày thành lập"
          />
          <div class="form__item">
            <label for="">Lĩnh vực</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="LINH_VUC"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <div class="form__item">
            <label for="">Doanh thu/Ngân sách</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="DOANH_THU"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
        </div>
        <div class="form__col2">
          <TextField
            style="position: relative"
            contentLabel="Mở tại ngân hàng"
            contentTooltip="Mở tại ngân hàng"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Loại hình</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="LOAI_HINH"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <div class="form__item">
            <label for="">Ngành nghề</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="NGANH_NGHE"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
        </div>
      </div>
      <div class="title__image" style="margin-top: 48px">Thông tin địa chỉ</div>
      <div class="form__row">
        <div class="form__col1">
          <div class="form__item">
            <label for="">Quốc gia</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="QUOC_GIA"
              style="margin-left: 10px"
              dropdownContent="Việt Nam"
              width="465px"
            />
          </div>
          <div class="form__item">
            <label for="">Quận/Huyện</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="QUAN_HUYEN"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            contentLabel="Số nhà, Đường phố"
            contentTooltip="Số nhà, Đường phố"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div isTextArea class="form__item">
            <label for="">Địa chỉ</label>
            <BaseTextArea style="margin-left: 10px" width="465px" />
          </div>
        </div>
        <div class="form__col2">
          <div class="form__item">
            <label for="">Tỉnh/Thành phố</label>
            <BaseDropdownMenu
              hasInputSearch
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <div class="form__item">
            <label for="">Phường/Xã</label>
            <BaseDropdownMenu
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            contentLabel="Mã vùng"
            contentTooltip="Mã vùng"
            hasTooltip
            hasLabel
            width="465px"
          />
        </div>
      </div>
      <div class="title__image" style="margin-top: 48px">Thông tin mô tả</div>
      <div class="form__row">
        <div class="form__col1">
          <div isTextArea class="form__item">
            <label for="">Mô tả</label>
            <BaseTextArea style="margin-left: 10px" width="1210px" />
          </div>
        </div>
      </div>
      <div class="title__image" style="margin-top: 48px">
        Thông tin hệ thống
      </div>
      <div class="form__row">
        <div class="form__col1">
          <div class="form__item">
            <label for="">Dùng chung</label>
            <BaseCheckbox id="3" style="margin-left: 10px" />
          </div>
          <TextField
            idInput="txtLeadCode"
            style="position: relative"
            contentTooltip="Mã tiềm năng"
            hasTooltip
            hasLabel
            contentLabel="Mã tiềm năng"
            placeholder="Mã tự sinh"
            width="465px"
            ref="test"
          />
        </div>
        <div class="form__col2">
          <div class="form__item">
            <label for="">Ngừng theo dõi</label>
            <BaseCheckbox style="margin-left: 10px" />
          </div>
        </div>
      </div>
    </div>
    <BaseToast
      id="idToast"
      content="Lưu thành công"
      type="success"
      width="auto"
    />
  </div>
</template>
<script>
import LIST_TEXT_FIELD from "../../constants/text-field-form-add";
import XUNG_HO from "../../constants/item-dropdown-form-add/xungho";
import CHUC_DANH from "../../constants/item-dropdown-form-add/chuc-danh";
import DOANH_THU from "../../constants/item-dropdown-form-add/doanh-thu";
import LINH_VUC from "../../constants/item-dropdown-form-add/linh-vuc";
import LOAI_HINH from "../../constants/item-dropdown-form-add/loai-hinh";
import NGANH_NGHE from "../../constants/item-dropdown-form-add/nganh-nghe";
import NGUON_GOC from "../../constants/item-dropdown-form-add/nguon-goc";
import PHAN_LOAI_KHACH_HANG from "../../constants/item-dropdown-form-add/phan-loai-khach-hang";
import PHONG_BAN from "../../constants/item-dropdown-form-add/phong-ban";
import QUOC_GIA from "../../constants/item-dropdown-form-add/quoc-gia";
import QUAN_HUYEN from "../../constants/item-dropdown-form-add/quan-huyen";

import { ref } from "vue";
import axios from "axios";
import TextField from "../../components/base/BaseTextField";
import BaseButton from "../base/BaseButton.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import BaseTextArea from "../base/BaseTextArea.vue";
import BaseDropdownMenu from "../base/BaseDropdownMenu.vue";
import BaseDateTimePicker from "../base/BaseDateTimePicker.vue";
import BaseToast from "../base/BaseToast.vue";

// import BaseTooltip from '../base/BaseTooltip.vue'
export default {
  name: "LeadEdit",
  components: {
    BaseButton,
    TextField,
    BaseCheckbox,
    BaseTextArea,
    BaseDropdownMenu,
    BaseDateTimePicker,
    BaseToast,
  },

  created() {
    var me = this;
    this.idLeadEdit = this.$route.params.id;
    axios
      .get(`http://localhost:5214/api/v1/Leads/${this.idLeadEdit}`)
      .then((res) => {
        me.lead = res.data;
        document.getElementById("txtLeadCode").value = me.lead.LeadCode;
        document.getElementById("txtFirstName").value = me.lead.FirstName;
        document.getElementById("txtLastName").value = me.lead.LastName;
        document.getElementById("txtFullName").value = me.lead.LastName +' '+ me.lead.FirstName;
        document.getElementById("txtMobile").value = me.lead.Mobile;
        document.getElementById("txtOfficeTel").value = me.lead.OfficeMobile;
        document.getElementById("txtEmail").value = me.lead.Email;
        document.getElementById("txtOfficeEmail").value = me.lead.OfficeEmail;
        document.getElementById("txtCompanyName").value = me.lead.CompanyName;
        this.$refs.SalutationName.text = me.lead.SalutationName;
        this.$refs.TitleName.text = me.lead.TitleName;
        this.$refs.DepartmentName.text = me.lead.DepartmentName;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  setup() {
    const inputForms = ref(LIST_TEXT_FIELD);
    return {
      inputForms,
      XUNG_HO,
      CHUC_DANH,
      DOANH_THU,
      LINH_VUC,
      LOAI_HINH,
      NGANH_NGHE,
      NGUON_GOC,
      PHAN_LOAI_KHACH_HANG,
      PHONG_BAN,
      QUOC_GIA,
      QUAN_HUYEN,
    };
  },
  data() {
    return {
      LIST_TEXT_FIELD,
      txtFirstName: " ",
      txtLastName: "",
      idLeadEdit: "",
      lead: {
        FirstName: "",
        LastName: "",
        Email: "",
        OfficeEmail: "",
        Mobile: "",
        OfficeMobile: "",
        CompanyName: "",
        SalutationName: "",
        TitleName: "",
        
      },
    };
  },
  methods: {
    /**
     * Hàm xử lí khi click vào nút lưu
     * Author: DTAN (28/7/2022)
     * @param{}  
     */
    clickSaveAndAdd() {
        let leadCode = document.getElementById("txtLeadCode");
        let name = document.getElementById("txtFirstName");
        let lastName = document.getElementById("txtLastName");
        let mobile = document.getElementById("txtMobile");
        let officeMobile = document.getElementById("txtOfficeTel");
        let email = document.getElementById("txtEmail");
        let officeEmail = document.getElementById("txtOfficeEmail");
        let salutationName= this.$refs.SalutationName.text;
        let titleName= this.$refs.TitleName.text;
        let departmentName =  this.$refs.DepartmentName.text;
        let companyName = document.getElementById("txtCompanyName"); // tổ chức

        if(salutationName=="-Không chọn-" || salutationName=="- Không chọn -"){
          salutationName="";
        }
        if(titleName=="-Không chọn-" || titleName=="- Không chọn -"){
          titleName="";
        }
      try {
        //  đối tượng lead để put
        let lead = {
          LeadCode: leadCode.value,
          FirstName: name.value,
          LastName: lastName.value,
          Mobile: mobile.value,
          OfficeMobile: officeMobile.value,
          Email: email.value,
          OfficeEmail: officeEmail.value,
          salutationName: salutationName,
          TitleName: titleName,
          DepartmentName:departmentName,
          CompanyName: companyName.value,
        };
        document.getElementById("idToast").style.display = "none";

        //Gọi api thực hiện sửa 
        var me = this;
        axios
          .put(`http://localhost:5214/api/v1/Leads/${this.idLeadEdit}`, lead)
          .then(function () {
            // 1. Hiển thị toast message Lưu thành công
            document.getElementById("idToast").style.display = "block";
            
            // 2. Chuyển về trang chủ
            setTimeout(function () {
              me.$router.push({path: '/'});
            },2000);
          })
          .catch(function (err) {
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
/* color="#99A1B2" mau khog chon */
div[isTextArea] {
  height: 76px;
  display: flex;
  align-items: start;
  margin: 6px 0;
}
div[isTextArea] > label {
  height: 32px;
  display: flex;
  align-items: center;
}
.function__left__titlebonus {
  font-size: 16px;
  font-weight: 500;
  padding-left: 16px;
}
.add__content {
  padding: 32px 56px 0 56px;
  overflow: auto;
  height: calc(100vh - 176px);
}
.add__content .title__image {
  color: #1f2229;
  font-size: 18px;
  font-weight: 500;
}
.avatar__image {
  width: 48px;
  height: 48px;
  background-color: #f0f2f4;
  border-radius: 50%;
  margin: 16px 0 40px 0;
}
.icon__avatar {
  content: "";
  display: inline-block;
  width: 48px;
  height: 48px;
  background: transparent
    url(https://crmplatform.misacdn.net/app/assets/Images/icon/icon_collection.svg)
    no-repeat -144px -848px;

  /* -144px -848px; */
}
.form__row {
  padding: 8px 0;
  display: flex;
}
.form__col1 {
  margin-right: 80px;
}
.form__col1 label,
.form__col2 label {
  min-width: 190px;
  /* max-width: 160px; */
  max-height: 32px;
}
.form__item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  min-height: 40px;
  /* max-height: 60px; */
  margin: 3px 0;
}
.field {
  position: relative;
}
</style>