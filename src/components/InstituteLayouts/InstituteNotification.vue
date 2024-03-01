<template>
  <InstitutePanel>
    <div class="notification">
      <h1 class="heading">Institute Notification</h1>
    </div>
  </InstitutePanel>
</template>
<script>
import InstitutePanel from "./InstitutePanel.vue";
export default {
  name: "InstituteNotification",
  components: { InstitutePanel },
};
</script>
<style scoped>
.notification {
  #notification-panel {
    display: none;
    position: fixed;
    top: 5rem;
    right: 0;
    width: 300px;
    max-height: 100vh;
    overflow-y: auto;
    background-color: #f8f8f8;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    z-index: 1000;
  }

  #toggle-btn {
    position: fixed;
    top: 10px;
    right: 10%;
    padding: 10px;
    cursor: pointer;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
  }
}
</style>
