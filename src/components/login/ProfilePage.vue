<template>
  <StudentPanel>
    <form class="form container w100 m-a">
      <div class="ls-main">
        <div class="ls-container m-a p-1 w90">
          <h1 class="ls-h2">My Profile</h1>
          <div class="ls-form w90 m-a mt-1 d-flex f-col">
            <div class="w100 d-flex space-between m-a">
              <span class="w50">
                <label for="fname">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  class="input w100"
                  id="fname"
                  required
                  v-model="formdata.first_name"
                />
              </span>
              <span class="w50">
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  class="input w100"
                  id="lname"
                  v-model="formdata.last_name"
                  required
                />
              </span>
            </div>
            <div class="w100 d-flex space-between m-a">
              <span class="w50">
                <label for="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  class="input w100"
                  id="email"
                  v-model="formdata.email"
                  required
                />
              </span>
              <span class="w50">
                <label for="mobile">Mobile</label>
                <input
                  type="number"
                  placeholder="Enter Your Mobile"
                  class="input w100"
                  id="mobile"
                  required
                  v-model="formdata.mobile"
                />
              </span>
            </div>
          </div>

          <div class="ls-form d-flex space-around">
            <span class="buttons">
              <input
                type="button"
                value="Submit"
                class="ls-btn"
                @click="saveData"
              />
              <input type="reset" class="ls-btn hover" value="Reset" />
            </span>
          </div>
        </div>
      </div>
    </form>
  </StudentPanel>
</template>
<script>
import axios from "axios";
import StudentPanel from "../StudentLayouts/StudentPanel.vue";
export default {
  name: "ProfilePage",
  components: {
    StudentPanel,
  },

  data() {
    return {
      userid: "",
      formdata: {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
      },
    };
  },
  mounted() {
    this.userid = localStorage.getItem("user_id");
    this.loadData();
    //   alert(this.userid);
  },
  methods: {
    loadData() {
      this.userid = localStorage.getItem("user_id");
      const url = "https://www.techebiz.com/student_guide/api/findUser";
      axios
        .get(url, {
          params: {
            user_id: this.userid,
          },
        }) //Product/listCategories?token="+localStorage.token)
        .then((response) => {
          // console.log(response);
          let userData = response.data[0];
          this.formdata.first_name = userData.first_name;
          this.formdata.last_name = userData.last_name;
          this.formdata.email = userData.email;
          this.formdata.mobile = userData.mobile;
        });
    },
    saveData() {
      const formData = new FormData();
      this.formData.append("user_id", this.userid);
      formData.append("first_name", this.formdata.first_name);
      formData.append("last_name", this.formdata.last_name);
      formData.append("email", this.formdata.email);
      formData.append("mobile", this.formdata.mobile);

      axios
        .post("https://techebiz.com/student_guide/api/updateUser", formData)
        .then((response) => {
          // console.log(response);
          alert(response.data.msg);
        });
    },
  },
};
</script>
