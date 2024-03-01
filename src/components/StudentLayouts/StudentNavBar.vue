<template>
  <nav class="sidebar">
    <router-link to="StudentDashboard">Home</router-link>
    <router-link to="MyCoursesList">My Courses</router-link>
    <router-link to="StudentRanking">Rankings</router-link>
    <router-link to="StudentChatBot">Chat Support</router-link>
    <router-link to="StudentFeedbackList">FeedbackList</router-link>
    <router-link to="LearningPrefrences">Learning Prefrences</router-link>
    <router-link to="RecommendedCourses">Recommended Courses</router-link>
    <router-link to="EducationBackground">Education Background</router-link>
    <router-link to="StudentChangePassword">Change Password</router-link>
  </nav>
</template>
<script>
export default {
  name: "StudentNavBar",
  components: {},
};
</script>
