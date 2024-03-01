<template>
  <nav class="sidebar">
    <router-link to="AdminDashboard">Home</router-link>
    <router-link to="AdminCourseList">Course List</router-link>
    <router-link to="AdminInstituteList">Institute List</router-link>
    <router-link to="StudentList">Student List</router-link>
    <router-link to="AdminFeedbackList">Feedback List</router-link>
  </nav>
</template>
<script>
export default {
  name: "AdminNavBar",
  components: {},
};
</script>
