<template>
  <StudentPanel>
    <div class="notin">
      <h1 class="heading">Student Notification</h1>
    </div>
    <table>
      <td width="25%" valign="top">
        <h4>Notification Alerts</h4>
        <div style="border: 1px solid #333; border-radius: 10px; padding: 5px">
          <div class="notification" v-for="msg in messageList" :key="msg">
            {{ msg }}
            <!-- <button @click="closeNotification">Close</button> -->
          </div>
        </div>
      </td>
    </table>
  </StudentPanel>
</template>
<script>
import StudentPanel from "./StudentPanel.vue";

export default {
  name: "StudentNotification",

  components: {
    StudentPanel,
  },
  data() {
    return {
      panelVisible: false,
      messageList: [
        "Feedback Notification ...",
        "2nd Notification",
        "3rd Notification",
      ],
    };
  },
  // methods: {
  //   togglePanel() {
  //     this.panelVisible = !this.panelVisible;
  //   },
  // },
};
</script>
