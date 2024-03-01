<template>
  <div class="">
    <HeaderSection />
    <div class="d-flex m-a">
      <AdminNavBar />
      <div class="container main p1 d-flex f-col">
        <div class="noti d-flex align-center">
          <router-link to="AdminNotification" @click="togglePanel">
            <abbr title="Notification">
              <img
                src="../../assets/images/bell.png"
                alt="notification"
                class="icon"
              />
            </abbr>
            <div v-show="showPanel" id="notification-panel">
              this is notification
            </div>
          </router-link>
          <router-link to="AdminChatBot">
            <abbr title="Chatbot">
              <img
                src="../../assets/images/chatbot.svg"
                alt="chatbot"
                class="chatbot ml-1"
              />
            </abbr>
          </router-link>
          <router-link to="AdminChangePassword">
            <abbr title="Change Password">
              <img
                src="../../assets/images/login.png"
                alt="password"
                class="icon ml-1"
              />
            </abbr>
          </router-link>
          <router-link to="AdminProfile">
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
import AdminNavBar from "./AdminNavBar.vue";
import FooterSection from "../LandingPageLayouts/FooterSection.vue";

export default {
  name: "AdminPanel",
  components: {
    HeaderSection,
    AdminNavBar,
    FooterSection,
  },
};
</script>
