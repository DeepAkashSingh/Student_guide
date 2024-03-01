<template>
  <!-- <MainPageLayout> -->
  <!-- <InstituteNavBar /> -->
  <div class="p-1 container">
    <span class="d-flex space-between p-1 align-center">
      <h2>Course List</h2>
      <input type="search" v-model="searchCourse" name="search" id="search" class="p-1 search w25 bor-rad-1"
        @input="searchCourses" />
    </span>
    <div class="d-flex space-between">
      <CourseCards v-for="(course, index) in filteredCourses" :item="course" :key="index" class="w25" />
    </div>
  </div>


  <!-- </MainPageLayout> -->
</template>

<script>
import ApiList from "@/ApiList";
import CourseCards from "../Layouts/CourseCards.vue";
// import MainPageLayout from "../LandingPageLayouts/MainPageLayout.vue";
// import InstituteNavBar from "../LandingPageLayouts/InstituteNavBar.vue";
// import AdminPanel from "../AdminLayouts/AdminPanel.vue";
export default {
  mixins: [ApiList],
  components: {
    CourseCards,
    // AdminPanel,
    // MainPageLayout,
    // InstituteNavBar,
  },
  data() {
    return {
      searchCourse: "",
    };
  },
  computed: {
    // filteredCourses() {
    //   const searchTerm = this.searchCourse.toLowerCase();
    //   return this.apis.courseList.filter(
    //     (course) =>
    //       course.CourseTitle.toLowerCase().includes(searchTerm) ||
    //       course.Instructor.toLowerCase().includes(searchTerm) ||
    //       course.Cost.toLowerCase().includes(searchTerm) ||
    //       course.Enrolled.toString().includes(searchTerm)
    //   );
    // },
    filteredCourses() {
      const searchTerm = this.searchCourse.toLowerCase();
      return this.apis.courseList.filter((course) => {
        return (
          (course.CourseTitle &&
            course.CourseTitle.toLowerCase().includes(searchTerm)) ||
          (course.Instructor &&
            course.Instructor.toLowerCase().includes(searchTerm)) ||
          (course.Cost && course.Cost.toLowerCase().includes(searchTerm)) ||
          (course.Enrolled && course.Enrolled.toString().includes(searchTerm))
        );
      });
    },
  },
  methods: {
    searchCourses() {
      // Perform additional search logic if needed
    },
  },
};
</script>
