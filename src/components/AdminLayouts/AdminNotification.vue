<template>
  <AdminPanel>
    <div class="notification">
      <h1 class="heading">Notification Panel</h1>
    </div>
  </AdminPanel>
</template>
<script>
import AdminPanel from "./AdminPanel.vue";
export default {
  name: "AdminNotification",
  components: { AdminPanel },
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
