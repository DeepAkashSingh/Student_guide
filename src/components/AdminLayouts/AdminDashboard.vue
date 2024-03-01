<template>
  <AdminPanel>
    <div class="courses w100 d-flex f-col">
      <h2 class="heading">Top 5 Courses</h2>
      <div class="course mt-1 d-flex space-evenly w75">
        <CourseCards
          v-for="item in apis.courseList.slice(0, 5)"
          :key="item.CourseTitle"
          :item="item"
          @click="moveCards(item.Id)"
          class="cursor w40"
        />
      </div>
      <div class="b-shadow p1 info">
        <h3 class="heading">Personal Information</h3>
        <p>Name:</p>
        <p>Phone Num:</p>
        <p>Email:</p>
        <p>City:</p>
      </div>
    </div>

    <div class="d-flex space-evenly w100">
      <h2 class="heading">Top 5 Institutes</h2>
      <div
        class="mt-1 w100"
        v-for="(inst, index) in list.slice(0, 5)"
        :key="index"
      >
        <table>
          <tr>
            <th>Institute Name</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          <tr
            v-for="institute in instituteList.filter(
              (v) => v.InstituteId == inst.InstituteId
            )"
            :key="institute.InstituteId"
          >
            <!-- <td>{{ institute.ID }}</td> -->
            <!-- <td>{{ institute.InstituteId }}</td> -->
            <td>{{ institute.InstituteTitle }}</td>
            <td>{{ institute.Phone }}</td>
            <!-- <td>{{ institute.Address }}</td> -->
            <td>{{ institute.Website }}</td>
          </tr>
        </table>
      </div>
    </div>
    <!-- <SmCourseCard /> -->
  </AdminPanel>
</template>
<script>
import ApiList from "@/ApiList";
import AdminPanel from "./AdminPanel.vue";
import CourseCards from "../Layouts/CourseCards.vue";
// import SmCourseCard from "../Layouts/SmCourseCard.vue";
// import InstituteCards from "../Layouts/InstituteCards.vue";
export default {
  name: "AdminDashboard",
  props: ["item"],

  mixins: [ApiList],

  components: {
    AdminPanel,
    CourseCards,
    // SmCourseCard,
  },
  data() {
    return {
      list: [],
      displayedCourseIndex: 0,
      showPanel: false,
      instituteList: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    togglePanel() {
      this.showPanel = !this.showPanel;
    },
    loadData() {
      this.instituteList = this.apis.instituteList;
      this.list = this.apis.courseList;
    },
    moveCards(id) {
      this.$router.push(`/CourseDetails/${id}`);
    },
    moveInstitute(id) {
      this.$router.push(`/InstituteDetails/${id}`);
    },
  },
};
</script>
<style scoped>
/* .wrap-product {
  width: 40%;
} */
.info {
  margin-top: 4rem;
  height: 10%;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
