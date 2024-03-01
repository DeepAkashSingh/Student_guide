<template>
  <MainPageLayout>
    <FindCourses />
    <div class="contact-section w100">
      <div class="heading">
        <div class="top-header">
          <h1>Trending Courses</h1>
          <p>Explore Courses</p>
        </div>
        <div class="bg-overlay"></div>
      </div>
      <div class="w10 trendingCourses">
        <img
          src="../assets/images/right-icon.svg"
          alt="left"
          class="arrow cursor"
          style="transform: scale(-1)"
        />
        <img
          src="../assets/images/right-icon.svg"
          alt="right"
          class="arrow cursor"
          @click="loadNextCards"
        />
      </div>
    </div>
    <div class="d-flex space-between transform w90 m-a">
      <CourseCards
        v-for="item in apis.courseList.slice(0, 3)"
        :key="item.CourseTitle"
        :item="item"
        @click="CardDetails(item.Id)"
        class="w30"
      />
    </div>
    <div class="mt-1">
      <div class="contact-section">
        <div class="heading">
          <div class="top-header">
            <h1 class="heading">Trending Institutes</h1>
            <p>Explore Institutes</p>
          </div>
          <div class="bg-overlay"></div>
        </div>
        <div class="w10 trendingCourses">
          <img
            src="../assets/images/right-icon.svg"
            alt="left"
            style="transform: scale(-1)"
          />
          <img
            src="../assets/images/right-icon.svg"
            alt="right"
            class="arrow cursor"
          />
        </div>
      </div>
      <div class="d-flex space-between transform w90 m-a">
        <InstituteCards
          v-for="item in list.slice(0, 2)"
          :key="item.InstituteTitle"
          :item="item"
          @click="InstituteDetails(item.ID)"
        />
      </div>
    </div>
  </MainPageLayout>
</template>
<script>
import ApiList from "@/ApiList";
import MainPageLayout from "./LandingPageLayouts/MainPageLayout.vue";
import CourseCards from "./Layouts/CourseCards.vue";
import InstituteCards from "./Layouts/InstituteCards.vue";
import FindCourses from "./Layouts/FindCourses.vue";
export default {
  Title: "Trending Courses",
  name: "HomePage",
  mixins: [ApiList],
  components: {
    MainPageLayout,
    CourseCards,
    InstituteCards,
    FindCourses,
  },
  data() {
    return {
      list: [],
      displayedCourseIndex: 0,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.list = this.apis.instituteList;
    },
    CardDetails(id) {
      this.$router.push(`/CourseDetails/${id}`);
    },
    InstituteDetails(id) {
      this.$router.push(`/InstituteDetails/${id}`);
    },
    loadNextCards() {
      console.log("loadNextCards called");
      alert("function called");
      const totalCourses = this.apis.courseList.length;
      const cardsPerPage = 3;

      // Increment the index by 3 and wrap around if necessary
      this.displayedCourseIndex =
        (this.displayedCourseIndex + cardsPerPage) % totalCourses;
    },
  },
  computed: {
    displayedCourseList() {
      // Use slice to get the next three course cards based on the current index
      return this.apis.courseList.slice(
        this.displayedCourseIndex,
        this.displayedCourseIndex + 3
      );
    },
  },
};
</script>
