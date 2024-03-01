<template>
  <StudentPanel>
    <h1 class="heading">Recommended Courses</h1>
    <div class="container w100 p1">
      <h3 class="text-center p-1">Courses Based On Your Prefrences</h3>
      <table class="table w100" border="1px">
        <tr>
          <th>Course Title</th>
          <th>Duration</th>
          <th>Cost</th>
        </tr>
        <tr v-for="item in apis.courseList.slice(0, 5)" :key="item.CourseTitle">
          <td>{{ item.CourseTitle }}</td>
          <td>{{ item.Duration }}</td>
          <td>{{ item.Cost }}</td>
        </tr>
      </table>
    </div>
    <div class="container p-1 bg-blue">
      <form>
        <span class="mr-1 bg-grey">
          <input
            list="carrerpath"
            name="carrerpath"
            placeholder="Carrer Path"
            class="text-center p-1"
          />
          <datalist id="carrerpath">
            <option value="select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </datalist>
        </span>
        <span class="mr-1">
          <input
            list="categories"
            name="categories"
            placeholder="Categories"
            class="text-center p-1"
          />
          <datalist id="categories">
            <option value="select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </datalist>
        </span>
        <span class="mr-1">
          <input
            list="courses"
            name="courses"
            placeholder="Courses"
            class="text-center p-1"
          />
          <datalist id="courses">
            <option value="select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </datalist>
        </span>
        <span class="mr-1">
          <input
            list="languages"
            name="languages"
            placeholder="Languages"
            class="text-center p-1"
          />
          <datalist id="languages">
            <option value="select">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </datalist>
        </span>
      </form>
    </div>
  </StudentPanel>
</template>
<script>
import ApiList from "@/ApiList";

import StudentPanel from "./StudentPanel.vue";
export default {
  name: "RecommendedCourses",
  mixins: [ApiList],

  components: {
    StudentPanel,
  },
  data() {
    return {
      list: [],
      instData: {},
      courseList: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.instData = this.apis.instituteList[0];
      this.courseList = this.apis.courseList.filter(
        (v) => v.InstituteId == this.instData.InstituteId
      );
    },
  },
};
</script>
