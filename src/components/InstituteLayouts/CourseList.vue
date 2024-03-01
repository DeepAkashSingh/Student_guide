<template>
  <InstitutePanel>
    <h1 class="heading">Course List</h1>
    <div class="p-1 w100 mt-1">
      <span
        class="d-flex space-between p-1 align-center"
        style="justify-content: end"
      >
        <input
          type="search"
          v-model="searchCourse"
          name="search"
          id="search"
          class="p1 search w25 bor-rad-1"
          @input="searchCourses"
        />
      </span>
      <div class="d-flex space-between">
        <CourseCards
          v-for="(course, index) in filteredCourses"
          :item="course"
          :key="index"
          class="w25"
        />
      </div>
    </div>
  </InstitutePanel>
</template>

<script>
import ApiList from "@/ApiList";
import InstitutePanel from "./InstitutePanel.vue";
import CourseCards from "../Layouts/CourseCards.vue";

export default {
  mixins: [ApiList],
  components: {
    CourseCards,
    InstitutePanel,
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
