<template>
  <nav class="sidebar">
    <router-link to="InstituteDashboard">Dashboard</router-link>
    <router-link to="AddInstitute">Add Institute</router-link>
    <router-link to="AddCourse">Add Course</router-link>
    <router-link to="CourseList">Course List</router-link>
    <router-link to="InstituteFeedbackList">Feedback List</router-link>
    <router-link to="InstituteChangePassword">Change Password</router-link>
  </nav>
</template>
<script>
export default {
  name: "InstituteNavBar",
  components: {},
};
</script>
