<template>
  <MainPageLayout>
    <div class="course-container b-shadow">
      <!-- {{ courseData }} -->
      <div class="text">
        <h1 class="content-head">{{ courseData.CourseTitle }}</h1>
        <p>
          {{ courseData.Description }}
        </p>
        <div class="rating-container">
          <div class="rating"></div>
          <div class="rating"></div>
          <div class="rating"></div>
          <div class="rating"></div>
          <div class="rating"></div>
        </div>
      </div>
      <div class="image">
        <img
          src="../../assets/images/website-development-logo.jpg"
          alt="Your Image"
        />
      </div>
    </div>
    <div class="b-shadow p-1 bg-blue">
      <div class="course-container d-flex space-between">
        <div class="card">
          <h2>{{ courseData.Cost }}</h2>
          <p class="offer">Limited time offer</p>
          <div class="details">
            <p>{{ courseData.Duration }}</p>
            <p>Certificate: Hard Copy / Online</p>
            <p>{{ courseData.Language }}</p>
          </div>
        </div>
      </div>
      <div class="course-container">
        <h4>What you'll learn</h4>
        <p>Semester 1</p>
        <ul>
          <li>Basic Of Internet</li>
          <li>Client Server Technologies</li>
          <li>Wire Framing, Mock Ups</li>
          <li>HTML, CSS,JavaScript 2.0 , Vue JS</li>
          <li>PHP Advance and MVC PHP (Codeigniter)</li>
          <li>MySql</li>
          <li>Data Architecture</li>
          <li>Dynamic Web site</li>
          <li>Working with API’s</li>
          <li>Word Press</li>
          <li>Basic Mobile App Development</li>
          <li>Responsive Web Designing</li>
          <li>Project (Hosting, FTP)</li>
        </ul>
        <p>Semester 2</p>
        <ul>
          <li>Web Digital Marketing</li>
          <li>Content Management</li>
          <li>Web Analytics and data analysis technology</li>
          <li>Networking (LAN, WAN)</li>
          <li>Server configuration.</li>
          <li>Live Project</li>
        </ul>
        <h4>Job Opportunities</h4>
        <ul>
          <li>Digital Marketing</li>
          <li>Web Content Management</li>
          <li>Web Analytics and data analysis technology</li>
          <li>Networking (LAN, WAN)</li>
          <li>Server configuration.</li>
          <li>Live Project</li>
        </ul>
      </div>
    </div>
  </MainPageLayout>
</template>
<script>
import ApiList from "@/ApiList";
import MainPageLayout from "@/components/LandingPageLayouts/MainPageLayout.vue";
export default {
  name: "CourseDetails",
  mixins: [ApiList],
  components: {
    MainPageLayout,
  },

  props: ["item"],
  data() {
    return {
      courseID: 0,
      courseData: {},
    };
  },
  created() {
    this.courseID = this.$route.params.id;
    // alert(JSON.stringify(this.$route.params));
    console.log("call load applied visa" + this.$route.params.id);
  },
  mounted() {
    this.courseID = this.$route.params.id;
    // alert(JSON.stringify(this.courseData));
    this.loadData();
  },
  methods: {
    loadData() {
      // alert(this.courseID);
      let list = this.apis.courseList.filter((v) => v.Id == this.courseID);
      this.courseData = list[0];
    },
  },
};
</script>
