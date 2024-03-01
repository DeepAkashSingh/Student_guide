<template>
  <div class="">
    <HeaderSection />
    <div class="d-flex w100 m-a">
      <StudentNavBar />
      <div class="w75 container main p-1 d-flex f-col">
        <div class="noti d-flex align-center">
          <router-link to="StudentNotification">
            <abbr title="Notification">
              <img
                src="../../assets/images/bell.png"
                alt="notification"
                class="icon"
              />
            </abbr>
            <!-- <div id="notification-panel bor">this is notification</div> -->
          </router-link>
          <router-link to="StudentChatbot">
            <abbr title="Chatbot">
              <img
                src="../../assets/images/chatbot.svg"
                alt="chatbot"
                class="chatbot ml-1"
              />
            </abbr>
          </router-link>
          <router-link to="StudentChangePassword">
            <abbr title="Change Password">
              <img
                src="../../assets/images/login.png"
                alt="password"
                class="icon ml-1"
              />
            </abbr>
          </router-link>
          <router-link to="StudentProfilePage">
            <abbr title="Profile">
              <img
                src="../../assets/images/user.svg"
                alt="profile"
                class="ml-1 user-avatar"
              />
            </abbr>
          </router-link>
        </div>

        <slot />
      </div>
    </div>

    <FooterSection />
  </div>
</template>
<script>
import HeaderSection from "../LandingPageLayouts/HeaderSection.vue";
import StudentNavBar from "./StudentNavBar.vue";
import FooterSection from "../LandingPageLayouts/FooterSection.vue";

export default {
  name: "StudentPanel",
  components: {
    HeaderSection,
    StudentNavBar,
    FooterSection,
  },
  // data() {
  //   return {
  //     panelVisible: false,
  //   };
  // },
  // methods: {
  //   togglePanel() {
  //     alert("clicked");
  //     this.panelVisible = !this.panelVisible;
  //   },
  // },
};
</script>
