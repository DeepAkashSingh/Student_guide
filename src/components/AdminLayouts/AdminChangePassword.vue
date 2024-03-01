<template>
  <AdminPanel>
    <form class="form w100">
      <div class="ls-main">
        <h1 class="heading">Change Password</h1>
        <div class="ls-container mt-3 w70 m-a">
          <div class="ls-form d-flex f-col">
            <label for="currentPassword" class="ls-label"
              >Current Password:</label
            >
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              class="input"
              required
            />
          </div>
          <div class="ls-form d-flex f-col">
            <label for="newPassword" class="ls-label">New Password:</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              class="input"
              required
            />
          </div>
          <div class="ls-form d-flex f-col">
            <label for="confirmPassword" class="ls-label"
              >Confirm Password:</label
            >
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              class="input"
              required
            />
          </div>
          <button type="submit" class="ls-btn">Change Password</button>
        </div>
      </div>
    </form>
  </AdminPanel>
</template>
<script>
import AdminPanel from "../AdminLayouts/AdminPanel.vue";

export default {
  name: "ChangePassword",
  components: { AdminPanel },
  // data() {
  //   return
  //   {role:"",}
  // },
  // created(){
  //   this.role = this.$route.params.role;

  // }
};
</script>
