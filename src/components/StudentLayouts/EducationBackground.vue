<template>
  <StudentPanel>
    <h1 class="ls-h2 heading">Educationl Background</h1>
    <div class="flex">
      <form class="form w40">
        <div class="ls-main">
          <div class="ls-container mt-1">
            <div class="ls-form w100 m-a d-flex space-between">
              <span class="w100">
                <label class="label" for="user_id">user id:</label>
                <input
                  class="input w100"
                  name="user_id"
                  id="user_id"
                  type="text"
                  v-model="frm.user_id"
                  required
                />
                <label class="label" for="qualification"
                  >Highest Qualification:</label
                >
                <select class="input w100" v-model="frm.qualification">
                  <option value="" disabled selected>Select</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Post Graduation">Post Graduation</option>
                </select>
              </span>

              <label class="label" for="stream">Stream:</label>
              <input
                class="input w100"
                name="stream"
                id="stream"
                type="text"
                v-model="frm.stream"
                required
              />
              <label class="label" for="passing_year">Passing Year:</label>
              <input
                class="input w100"
                name="passing_year"
                id="passing_year"
                type="text"
                v-model="frm.passing_year"
                required
              />
            </div>

            <div class="ls-form">
              <label class="label" for="passing_institute"
                >Passing Institute:</label
              >
              <input
                class="input w100"
                type="text"
                name="passing_institute"
                id="passing_institute"
                placeholder="Passing Institute"
                v-model="frm.passing_institute"
                required
              />
            </div>
            <div class="ls-form">
              <label class="label">GPA/Grades:</label>
              <input
                class="input w100"
                type="text"
                placeholder="GPA Grades"
                v-model="frm.grades"
                required
              />
            </div>

            <div class="ls-form">
              <label class="label">Achievements(If/Any):</label>
              <input
                class="input w100"
                type="text"
                placeholder="Achievements"
                v-model="frm.achivements"
                required
              />
            </div>

            <div class="ls-form">
              <label class="label">Status:</label>
              <input
                class="input w100"
                type="text"
                placeholder="Status"
                v-model="frm.status"
                required
              />
            </div>

            <div class="eduBackgroundBTN">
              <input
                type="button"
                value="submit"
                class="ls-btn"
                @click="saveData"
              />
            </div>
          </div>
        </div>
      </form>
      <div>
        <table class="w50">
          <tr>
            <th>Highest Qualification</th>
            <th>Passing Institute</th>
            <th>Passing Year</th>
            <!-- <th>GPA/Grades</th> -->
          </tr>
          <tr>
            <!-- <td>{{ instit }}</td>
          <td>{{ institute.InstituteId }}</td>
          <td>{{ instit }}</td> -->
            <!-- <td>{{ institute.InstituteId }}</td> -->
          </tr>
        </table>
      </div>
    </div>
  </StudentPanel>
</template>

<script>
import StudentPanel from "./StudentPanel.vue";
import axios from "axios";

export default {
  name: "EducationBackground",
  components: { StudentPanel },

  data() {
    return {
      frm: {
        user_id: "",
        qualification: "",
        stream: "",
        passing_year: "",
        passing_institute: "",
        grades: "",
        achivements: "",
        status: "active",
      },
    };
  },
  mounted() {
    this.frm.user_id = localStorage.getItem("user_id");
  },
  methods: {
    saveData() {
      const formData = new FormData();

      formData.append("user_id", this.frm.user_id);
      formData.append("qualification", this.frm.qualification);
      formData.append("stream", this.frm.stream);
      formData.append("passing_year", this.frm.passing_year);
      formData.append("passing_institute", this.frm.passing_institute);
      formData.append("grades", this.frm.grades);
      formData.append("achivements", this.frm.achivements);
      formData.append("status", this.frm.status);
      // alert("test");
      const url = "https://techebiz.com/student_guide/api/saveEducation";
      axios.post(url, formData).then((response) => {
        alert(response.data.msg);

        this.frm.user_id = "";
        this.frm.qualification = "";
        this.frm.stream = "";
        this.frm.passing_year = "";
        this.frm.passing_institute = "";
        this.frm.grades = "";
        this.frm.achivements = "";
        this.frm.status = "";
      });
    },
  },
};
</script>
<style scoped>
.flex {
  display: flex;
}
table {
  border-collapse: collapse;
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
