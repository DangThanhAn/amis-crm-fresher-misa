<template>
  <div class="function" style="height: 64px">
    <div class="function__left">
      <div class="function__left__title">Thêm tiềm năng</div>
      <div class="function__left__titlebonus">Mẫu tiêu chuẩn</div>
      <div class="function__left__text">Sửa bố cục</div>
    </div>
    <div class="function__right">
      <router-link to="/">
        <BaseButton backgroundColor="#ffffff" hasTertiary buttonText="Hủy bỏ" />
      </router-link>
      <BaseButton
        style="margin: 0 8px"
        hasSecondaryOutLine
        hasTextBold
        buttonText="Lưu và thêm"
        @click="clickSaveAndAdd"
      />
      <BaseButton
        hasTextBold
        hasHoverAndActivePrimaryBlue
        buttonText="Lưu"
        @click="clickSave"
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
              idButton="txtSalutationName"
              ref="SalutationName"
              valueProp="lead.SalutationName"
              :fieldName="'SalutationName'"
              @changeValue="changeValue"
              @blurMethod="blurMethod"
              hasInputSearch
              :arrays="SALUTATION"
              style="margin-left: 10px; position: relative"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            ref="refFirstName"
            :valueProp="lead.FirstName"
            :fieldName="'FirstName'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
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
              idButton="txtDepartmentName"
              ref="DepartmentName"
              valueProp="lead.DepartmentName"
              :fieldName="'DepartmentName'"
              @changeValue="changeValue"
              @blurMethod="blurMethod"
              hasInputSearch
              :arrays="DEPARTMENT"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            ref="refMobile"
            :valueProp="lead.Mobile"
            :fieldName="'Mobile'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
            idInput="txtMobile"
            contentLabel="ĐT di động"
            contentTooltip="ĐT di động"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            ref="refOfficeEmail"
            :valueProp="lead.OfficeEmail"
            :fieldName="'OfficeEmail'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
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
              :arrays="BUSINESSTYPE"
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
            :valueProp="lead.LastName + ' ' + lead.FirstName"
            style="position: relative"
            contentLabel="Họ và tên"
            readOnly
            contentTooltip="Họ và tên"
            hasTooltip
            hasLabel
            width="465px"
            idInput="txtFullName"
          />
          <TextField
            v-model="txtLastName"
            idInput="txtLastName"
            ref="refLastName"
            style="position: relative"
            contentLabel="Họ và đệm"
            contentTooltip="Họ và đệm"
            :valueProp="lead.LastName"
            :fieldName="'LastName'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
            hasTooltip
            hasLabel
            width="465px"
          />
          <div class="form__item">
            <label for="">Chức danh</label>
            <BaseDropdownMenu
              idButton="txtTitleName"
              ref="TitleName"
              hasInputSearch
              :arrays="TITLE"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <TextField
            style="position: relative"
            ref="refOfficeMobile"
            :valueProp="lead.OfficeMobile"
            :fieldName="'OfficeMobile'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
            idInput="txtOfficeMobile"
            contentLabel="ĐT cơ quan"
            contentTooltip="ĐT cơ quan"
            hasTooltip
            hasLabel
            width="465px"
          />
          <TextField
            :valueProp="lead.Email"
            :fieldName="'Email'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
            ref="refEmail"
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
            ref="refCompanyName"
            :valueProp="lead.CompanyName"
            :fieldName="'CompanyName'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
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
              :arrays="BUSINESSTYPE"
              style="margin-left: 10px"
              dropdownContent="- Không chọn -"
              width="465px"
            />
          </div>
          <div class="form__item">
            <label for="">Doanh thu/Ngân sách</label>
            <BaseDropdownMenu
              hasInputSearch
              :arrays="ANUAREVEN"
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
              :arrays="INDUSTRY"
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
              :arrays="COUNTRY"
              style="margin-left: 10px"
              dropdownContent="Việt Nam"
              width="465px"
            />
          </div>
          <div class="form__item">
            <label for="">Quận/Huyện</label>
            <BaseDropdownMenu
              hasInputSearch
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
            <BaseCheckbox style="margin-left: 10px" />
          </div>
          <TextField
            idInput="txtLeadCode"
            ref="leadddCode"
            style="position: relative"
            contentTooltip="Mã tiềm năng"
            hasTooltip
            hasLabel
            contentLabel="Mã tiềm năng"
            placeholder="Mã tự sinh"
            width="465px"
            :valueProp="lead.LeadCode"
            :fieldName="'LeadCode'"
            @changeValue="changeValue"
            @blurMethod="blurMethod"
          />
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
import { ref } from "vue";
import axios from "axios";
import LIST_TEXT_FIELD from "../../constants/text-field-form-add";
import SALUTATION from "../../constants/item-dropdown-form-add/xungho";
import TITLE from "../../constants/item-dropdown-form-add/chuc-danh";
import ANUAREVEN from "../../constants/item-dropdown-form-add/doanh-thu";
import BUSINESSTYPE from "../../constants/item-dropdown-form-add/linh-vuc";
import LOAI_HINH from "../../constants/item-dropdown-form-add/loai-hinh";
import INDUSTRY from "../../constants/item-dropdown-form-add/nganh-nghe";
import NGUON_GOC from "../../constants/item-dropdown-form-add/nguon-goc";
import LEADSOURCE from "../../constants/item-dropdown-form-add/phan-loai-khach-hang";
import DEPARTMENT from "../../constants/item-dropdown-form-add/phong-ban";
import COUNTRY from "../../constants/item-dropdown-form-add/quoc-gia";
import TextField from "../../components/base/BaseTextField";
import BaseButton from "../base/BaseButton.vue";
import BaseCheckbox from "../base/BaseCheckbox.vue";
import BaseTextArea from "../base/BaseTextArea.vue";
import BaseDropdownMenu from "../base/BaseDropdownMenu.vue";
import BaseDateTimePicker from "../base/BaseDateTimePicker.vue";
import BaseToast from "../base/BaseToast.vue";

export default {
  name: "LeadAdd",
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
    /**
     * Hàm lấy sẵn mã nhân viên mới khi tải trang
     * AUTHOR: DTAN 06/08/2022
     */

    var me = this;
    axios
      .get("http://localhost:5214/api/v1/Leads/NewLeadCode")
      .then((res) => {
        me.lead["LeadCode"] = res.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  setup() {
    const inputForms = ref(LIST_TEXT_FIELD);
    return {
      inputForms,
      SALUTATION,
      TITLE,
      ANUAREVEN,
      BUSINESSTYPE,
      LOAI_HINH,
      INDUSTRY,
      NGUON_GOC,
      LEADSOURCE,
      DEPARTMENT,
      COUNTRY,
    };
  },
  data() {
    return {
      LIST_TEXT_FIELD,
      // Đối tượng lead
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
      txtLastName: "",
      txtFirstName: "",
    };
  },
  methods: {
    /**
     *  Thay đổi giá trị các trường
     *  Author: DTAN (28/7/2022)
     */
    changeValue(fieldName, value) {
      this.lead[fieldName] = value;
    },

    /**
     * Theo dõi giá trị để validate
     * Author: DTAN (28/7/2022)
     * @param {*} fieldName
     * @param {*} value
     */
    blurMethod(fieldName, value) {
      console.log({ fieldName, value });
    },

    /**
     * Author: DTAN (28/7/2022)
     * @param{} khi nhấn nút lưu "-"
     */
    clickSave() {
      //Nếu validate trả về true thì thực hiện thêm mới
      if (this.validate() == true) {
        let leadCode = this.$refs.leadddCode.valueProp;
        let name = this.$refs.refFirstName.valueProp;
        let lastName = this.$refs.refLastName.valueProp;
        let mobile = this.$refs.refMobile.valueProp;
        let officeMobile = this.$refs.refOfficeMobile.valueProp;
        let email = this.$refs.refEmail.valueProp;
        let officeEmail = this.$refs.refOfficeEmail.valueProp;
        let salutationName = this.$refs.SalutationName.text;
        let titleName = this.$refs.TitleName.text;
        let departmentName = this.$refs.DepartmentName.text
        let companyName = this.$refs.refCompanyName.valueProp; // tổ chức

        if (salutationName == "-Không chọn-" ||salutationName == "- Không chọn -") {
          salutationName = "";
        }
        if (titleName == "-Không chọn-" || titleName == "- Không chọn -") {
          titleName = "";
        }
        if (departmentName == "-Không chọn-" || departmentName == "- Không chọn -") {
          departmentName = "";
        }
        try {
          // Thêm khởi tạo đối tượng lead để post 
          let lead = {
            LeadCode: leadCode,
            FirstName: name,
            LastName: lastName,
            Mobile: mobile,
            OfficeMobile: officeMobile,
            Email: email,
            OfficeEmail: officeEmail,
            SalutationName: salutationName,
            TitleName: titleName,
            CompanyName: companyName,
            DepartmentName: departmentName
          };
          document.getElementById("idToast").style.display = "none";
          // Gọi api thực hiện thêm mới
          axios
            .post("http://localhost:5214/api/v1/Leads", lead)
            .then(function () {
              document.getElementById("idToast").style.display = "block";
              // chuyển sang trang details
              this.$router.push({path: '/lead/view/:id'});
            })
            .catch(function (err) {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    /**
     * Khi ấn vào nút lưu và thêm mới
     * Clear giá trị
     * Author: DTAN 19/08/2022
     */

    clickSaveAndAdd() {
      this.clickSave();
      this.clearData();
    },
    /**
     * Hàm validate tên và test chuyển đổi bắt buộc nhập
     * Author: DTAN(16/08/2022)final update misa <3
     */

    validate() {
      let checkPass = false;
      let name = document.getElementById("txtFirstName");
      if (name.value == "" || name.value == null) {
        name.focus();
        checkPass = false;
        name.classList.add("input--error");
        document.getElementById("message--error").style.display = "block";
      } else {
        name.classList.remove("input--error");
        document.getElementById("message--error").style.display = "none";
        checkPass = true;
      }

      let testTransform = document.getElementById("txtTest");
      if (testTransform.value == "" || testTransform.value == null) {
        testTransform.focus();
        testTransform.classList.add("input--error");
        document.getElementById("message--error--test").style.display = "block";
        checkPass = false;
      } else {
        testTransform.classList.remove("input--error");
        document.getElementById("message--error--test").style.display = "none";
        checkPass = true;
      }
      return checkPass;
    },

    /**
     * Hàm clear giá trị các ô input sau khi click lưu và thêm
     * Author: DTAN(16/08/2022)
     */
    clearData(){
      document.getElementById("txtFirstName").value = "";
      document.getElementById("txtLastName").value = "";
      document.getElementById("txtFullName").value = "";
      document.getElementById("txtMobile").value = "";
      document.getElementById("txtOfficeMobile").value = "";
      document.getElementById("txtEmail").value = "";
      document.getElementById("txtOfficeEmail").value = "";
      document.getElementById("txtCompanyName").value = "";
      document.getElementById("txtLeadCode").value = "";
      document.getElementById("txtSalutationName").innerHTML = "-Không chọn-";
      document.getElementById("txtTitleName").innerHTML = "-Không chọn-";
      document.getElementById("txtDepartmentName").innerHTML = "-Không chọn-";
    }
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