<template>
  <MainPageLayout>
    <form class="form container w100 m-a">
      <div class="ls-main">
        <div class="ls-container m-a p-1 w90">
          <h1 class="ls-h2">Create New Account</h1>
          <div class="ls-form w90 m-a mt-1 d-flex f-col">
            <div class="w100 d-flex space-between m-a">
              <span class="w50">
                <label for="fname">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  v-model="formdata.first_name"
                  class="input w100"
                  id="fname"
                  required
                />
              </span>
              <span class="w50">
                <label for="lname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  v-model="formdata.last_name"
                  class="input w100"
                  id="lname"
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
                  v-model="formdata.email"
                  class="input w100"
                  id="email"
                  required
                />
              </span>
              <span class="w50">
                <label for="mobile">Mobile</label>
                <input
                  type="number"
                  placeholder="Enter Your Mobile"
                  v-model="formdata.mobile"
                  class="input w100"
                  id="mobile"
                  required
                />
              </span>
            </div>

            <div class="w100 m-a d-flex f-col">
              <span>
                <label class="label">Registered As</label>
              </span>
              <span class="input d-flex g-1">
                <span>
                  <input
                    type="radio"
                    value="student"
                    v-model="formdata.role"
                    id="student"
                  />
                  <label for="student">Student</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value="institute"
                    id="institute"
                    v-model="formdata.role"
                  />
                  <label for="institute">Institute</label>
                </span>

                <!-- <span>
                  <input
                    type="radio"
                    name="course-advisor"
                    id="course-advisor"
                  />
                  <label for="course-advisor">Course Advisor</label>
                </span> -->
              </span>
            </div>
            <span class="w100 m-a">
              <label for="password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                v-model="formdata.password"
                class="input w100"
                id="password"
                required
              />
            </span>
          </div>

          <div class="ls-form d-flex space-around">
            <span class="buttons">
              <input
                type="button"
                value="Submit"
                @click="saveData"
                class="ls-btn"
              />
              <input type="reset" class="ls-btn hover" value="Reset" />
            </span>
          </div>
          <div class="ls-sign d-flex justify-center">
            <router-link to="SignIn" class="ls-link">
              Already Have An Account
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </MainPageLayout>
</template>
<script>
import MainPageLayout from "../LandingPageLayouts/MainPageLayout.vue";
import axios from "axios";
export default {
  components: { MainPageLayout },
  data() {
    return {
      formdata: {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        role: "",
        status: "pending",
        password: "",
      },
    };
  },
  methods: {
    saveData() {
      const formData = new FormData();

      formData.append("first_name", this.formdata.first_name);
      formData.append("last_name", this.formdata.last_name);
      formData.append("email", this.formdata.email);
      formData.append("mobile", this.formdata.mobile);
      formData.append("role", this.formdata.role);
      formData.append("status", this.formdata.status);
      formData.append("password", this.formdata.password);

      const url = "https://techebiz.com/student_guide/api/registerUser";
      axios
        .post(url, formData) //Product/listCategories?token="+localStorage.token)
        .then((response) => {
          // console.log(response);
          alert(response.data.msg);
          this.formdata.first_name = "";
          this.formdata.last_name = "";
          this.formdata.email = "";
          this.formdata.mobile = "";
          this.formdata.role = "";
          this.formdata.password = "";
        });
    },
  },
};
</script>
