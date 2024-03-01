<template>
  <div class="">
    <HeaderSection />
    <div class="d-flex m-a">
      <InstituteNavBar />
      <div class="container w70 main p-1 d-flex f-col">
        <div class="noti d-flex align-center">
          <router-link to="InstituteNotification">
            <abbr title="Notification">
              <img
                src="../../assets/images/bell.png"
                alt="notification"
                class="icon"
              />
            </abbr>
          </router-link>
          <router-link to="InstituteChatbot">
            <abbr title="Chatbot">
              <img
                src="../../assets/images/chatbot.svg"
                alt="chatbot"
                class="chatbot ml-1"
              />
            </abbr>
          </router-link>
          <router-link to="InstituteChangePassword">
            <abbr title="Change Password">
              <img
                src="../../assets/images/login.png"
                alt="password"
                class="icon ml-1"
              />
            </abbr>
          </router-link>
          <router-link to="InstituteProfilePage">
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
import InstituteNavBar from "../InstituteLayouts/InstituteNavBar.vue";
import HeaderSection from "../LandingPageLayouts/HeaderSection.vue";
import FooterSection from "../LandingPageLayouts/FooterSection.vue";
export default {
  name: "InstitutePanel",
  components: {
    HeaderSection,
    InstituteNavBar,
    FooterSection,
  },
};
</script>
