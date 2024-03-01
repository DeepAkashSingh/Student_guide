<template>
  <MainPageLayout>
    <form action="" class="form container w100 m-a">
      <div class="ls-main">
        <div class="ls-container p-3 w60 m-a">
          <h1 class="ls-h2">Login</h1>
          <div class="ls-form d-flex f-col">
            <label class="ls-label" for="username">Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              id="username"
              class="input"
              v-model="user"
              required
            />
            <i class="fa fa-user fa-lg"></i>
          </div>

          <div class="ls-form d-flex f-col">
            <span class="password">
              <label class="ls-label" for="password">Password</label>
              <!-- <span
                ><router-link to="ForgetPassword" class="ls-label"
                  >Forget Password?</router-link
                >
              </span> -->
            </span>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              class="input"
              v-model="pass"
              required
            />
            <i class="fa fa-key fa-lg"></i>
          </div>
          <div class="ls-sign d-flex align-center">
            <h4>Not registered ?</h4>
            <router-link to="SignUp" class="ls-link ml-1">
              Create an account
            </router-link>
          </div>
          <div class="ls-sign">
            <button
              @click="validateUser"
              type="button"
              class="ls-btn ls-w-100 hover"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </form>
  </MainPageLayout>
</template>

<script>
import axios from "axios";
import ApiList from "@/ApiList";

import MainPageLayout from "../LandingPageLayouts/MainPageLayout.vue";
export default {
  name: "SignIn",
  mixins: [ApiList],

  components: {
    MainPageLayout,
  },
  data() {
    return {
      user: "",
      pass: "",
      IsLogin: false,
      userData: {},
    };
  },
  methods: {
    saveData(user, fname, lname, role, islogin) {
      localStorage.setItem("userName", user);
      localStorage.setItem("fName", fname);
      localStorage.setItem("lName", lname);
      localStorage.setItem("role", role);
      localStorage.setItem("IsLogin", islogin);
      // alert("Data Saved");
    },
    validateUser() {
      if (this.user == "" && this.pass == "") {
        alert("Please Enter Username and Password!");
      } else {
        const url = "http://localhost:8000/api/loginUser";

        const formData = new FormData();

        formData.append("user", this.user);
        formData.append("password", this.pass);
        axios
          .post(url, formData) //Product/listCategories?token="+localStorage.token)
          .then((response) => {
            // console.log(response);
            this.userData = response.data[0];
            // alert(JSON.stringify(this.userData) + "---" + this.userData.role);

            if (this.userData.role == "admin") {
              // this.apis.userName = this.user;          // this.apis.IsLogin = true;
              this.saveData(
                this.userData.user_id,
                this.userData.first_name,
                this.userData.last_name,
                this.userData.role,
                true
              );
              this.$router.push("/AdminDashboard");
            } else if (this.userData.role == "institute") {
              // this.apis.userName = this.user;
              // this.apis.IsLogin = true;
              this.saveData(
                this.userData.user_id,
                this.userData.first_name,
                this.userData.last_name,
                this.userData.role,
                true
              );
              this.$router.push("/InstituteDashboard");
            } else if (this.userData.role == "student") {
              // this.apis.userName = this.user;
              // this.apis.IsLogin = true;
              this.saveData(
                this.userData.user_id,

                this.userData.first_name,
                this.userData.last_name,
                this.userData.role,
                true
              );
              this.$router.push("/StudentDashboard");
            } else {
              alert("invalid username or password");
              // this.apis.userName = "";
              this.user = "";
              this.pass = "";
              // this.apis.IsLogin = false;
              this.saveData("", "", "", "", "false");
            }
          });
      }
    },
    logout() {
      this.apis.userName = "";
      this.IsLogin = false;
      this.user = "";
      this.pass = "";
    },
  },
};
</script>
