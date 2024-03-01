<template>
  <header class="header">
    <div class="header-wrapper">
      <h2>
        <router-link to="/"
          >International <span>Student Educational Guide</span></router-link
        >
      </h2>
      <ul class="header-links" id="header-links">
        <li v-if="IsLogin == false">
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="IsLogin == false">
          <router-link to="AboutUs">About Us</router-link>
        </li>
        <li v-if="IsLogin == false">
          <router-link to="SignUp">Register</router-link>
        </li>
        <router-link
          to="../SignIn"
          class="login-button"
          v-if="IsLogin == false"
          @click="signIn"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_130_592)">
              <path
                d="M12.5 14.0625C16.3818 14.0625 19.5312 10.9131 19.5312 7.03125C19.5312 3.14941 16.3818 0 12.5 0C8.61816 0 5.46875 3.14941 5.46875 7.03125C5.46875 10.9131 8.61816 14.0625 12.5 14.0625ZM18.75 15.625H16.0596C14.9756 16.123 13.7695 16.4062 12.5 16.4062C11.2305 16.4062 10.0293 16.123 8.94043 15.625H6.25C2.79785 15.625 0 18.4229 0 21.875V22.6562C0 23.9502 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.9502 25 22.6562V21.875C25 18.4229 22.2021 15.625 18.75 15.625Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_592">
                <rect width="25" height="25" />
              </clipPath>
            </defs>
          </svg>
          <span>Sign In</span>
        </router-link>
        <!-- <button>Signout</button> -->
        <router-link to="" class="login-button" v-if="IsLogin" @click="signOut">
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 25"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_130_592)">
              <path
                d="M12.5 14.0625C16.3818 14.0625 19.5312 10.9131 19.5312 7.03125C19.5312 3.14941 16.3818 0 12.5 0C8.61816 0 5.46875 3.14941 5.46875 7.03125C5.46875 10.9131 8.61816 14.0625 12.5 14.0625ZM18.75 15.625H16.0596C14.9756 16.123 13.7695 16.4062 12.5 16.4062C11.2305 16.4062 10.0293 16.123 8.94043 15.625H6.25C2.79785 15.625 0 18.4229 0 21.875V22.6562C0 23.9502 1.0498 25 2.34375 25H22.6562C23.9502 25 25 23.9502 25 22.6562V21.875C25 18.4229 22.2021 15.625 18.75 15.625Z"
              />
            </g>
            <defs>
              <clipPath id="clip0_130_592">
                <rect width="25" height="25" />
              </clipPath>
            </defs>
          </svg>

          <span>Sign Out</span>
        </router-link>
      </ul>
    </div>
    <div
      class="container d-flex space-between header-panel w90 m-a"
      v-if="IsLogin"
    >
      <span class="panel">
        <h3>{{ role }} Panel</h3>
        <p>Welcome {{ fname }} {{ lname }}</p>
      </span>
    </div>
  </header>
</template>

<script>
import ApiList from "@/ApiList";

export default {
  name: "HeaderSection",
  props: {},
  mixins: [ApiList],

  data() {
    return {
      IsLogin: false,
      fname: "",
      lname: "",
      role: "",
      username: "",
    };
  },
  mounted() {
    this.IsLogin = localStorage.getItem("IsLogin");
    this.fname = localStorage.getItem("fName");
    this.lname = localStorage.getItem("lName");
    this.role = localStorage.getItem("role");
    this.username = localStorage.getItem("userName");
    this.IsLogin = this.IsLogin == null ? false : this.IsLogin;
    // alert("--" + this.IsLogin + "--");
  },
  methods: {
    signIn() {
      this.$router.push("/SignIn");
    },
    signOut() {
      // this.apis.IsLogin = false;
      // this.apis.userName = "";
      localStorage.clear();
      // alert("logout");
      this.$router.push("/");
    },
  },
};
</script>
