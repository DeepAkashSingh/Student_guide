<template>
  <AdminPanel>
    <div class="m-a p-1 w100">
      <div class="m-a">
        <h1 class="heading">Course List</h1>
        <div class="mt-3" v-for="(inst, index) in list" :key="inst.ID">
          <h3>
            {{ index + 1 }}) {{ inst.InstituteTitle }}({{
              courseList.filter((v) => v.InstituteId == inst.InstituteId)
                .length
            }})
          </h3>
          <!-- {{ courseList.filter((v) => v.InstituteId == inst.InstituteId) }} -->

          <table>
            <tr>
              <!-- <th>ID</th> -->
              <!-- <th>CourseId</th> -->
              <th>Course Name</th>
              <th>Cost</th>
              <th>Start Date</th>
              <th>Start Mode</th>
              <th>Duration</th>
            </tr>
            <tr
              v-for="course in courseList.filter(
                (v) => v.InstituteId == inst.InstituteId
              )"
              :key="course.courseId"
            >
              <!-- <td>{{ course.Id }}</td> -->
              <!-- <td>{{ course.courseId }}</td> -->
              <td>{{ course.CourseTitle }}</td>
              <td>{{ course.Cost }}</td>
              <td>{{ course.StartDate }}</td>
              <td>{{ course.StudyMode }}</td>
              <td>{{ course.Duration }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </AdminPanel>
</template>
<script>
import AdminPanel from "./AdminPanel.vue";
import ApiList from "@/ApiList";

export default {
  name: "AdminCourseList",
  components: { AdminPanel },
  mixins: [ApiList],
  data() {
    return { list: [], courseList: [] };
  },
  mounted() {
    this.list = this.apis.instituteList;
    this.courseList = this.apis.courseList;
  },
};
</script>
<style scoped>
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
