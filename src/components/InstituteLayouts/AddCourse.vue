<template>
  <InstitutePanel>
    <form class="form">
      <div class="ls-main">
        <h1 class="ls-h2 heading">Add Course</h1>
        <div class="ls-container mt-1">
          <div class="ls-form w100 m-a d-flex space-between">
            <span class="w50">
              <label for="course-name">Course Name:</label>
              <input
                type="text"
                id="course-name"
                name="course-name"
                v-model="formdata.course_name"
                class="input w100"
                autocomplete="on"
                required
              />
            </span>
            <span class="w50">
              <label for="coursecode">Course Code:</label>
              <input
                type="text"
                id="coursecode"
                name="coursecode"
                v-model="formdata.course_code"
                class="input w100"
                required
              />
            </span>
          </div>
          <div class="ls-form m-a d-flex space-between">
            <span class="w50">
              <label for="courseduration">Course Duration:</label>
              <input
                type="text"
                id="courseduration"
                v-model="formdata.course_duration"
                name="courseduration"
                class="input w100"
                required
              />
            </span>
            <span class="w50">
              <label for="description">Description:</label>
              <textarea
                id="description"
                name="description"
                rows="1"
                v-model="formdata.description"
                class="input w100"
                required
              ></textarea>
            </span>
          </div>
          <div class="ls-form m-a d-flex space-between">
            <span class="w50">
              <label for="eligibility">Eligibility:</label>
              <textarea
                id="eligibility"
                v-model="formdata.eligibility"
                name="eligibility"
                rows="1"
                class="input w100"
                required
              ></textarea>
            </span>
            <span class="w50">
              <label for="careerOpportunities">Career Opportunities:</label>
              <textarea
                id="careerOpportunities"
                v-model="formdata.career_opportunities"
                name="career_opportunities"
                rows="1"
                class="input w100"
                required
              ></textarea>
            </span>
          </div>
          <div class="ls-form m-a d-flex space-between">
            <span class="w50">
              <label for="courseType">Course Type:</label>
              <select
                id="courseType"
                v-model="formdata.coursetype"
                name="courseType"
                class="input w100"
                required
              >
                <option disabled selected>Select</option>
                <option value="fullTime">Full-time</option>
                <option value="partTime">Part-time</option>
              </select>
            </span>
            <span class="w50">
              <label for="intake">Intake:</label>
              <input
                type="text"
                id="intake"
                v-model="formdata.intake"
                name="intake"
                class="input w100"
                required
              />
            </span>
          </div>
          <div class="ls-form m-a d-flex space-between">
            <span class="w50">
              <label for="tuitionFees">Tuition Fees:</label>
              <input
                type="text"
                id="tuitionFees"
                v-model="formdata.tution_fees"
                name="tuitionFees"
                class="input w100"
                required
              />
            </span>
          </div>
          <div class="ls-form m-a d-flex justify-center">
            <input
              type="button"
              class="ls-btn"
              @click="saveData"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </form>
  </InstitutePanel>
</template>
<script>
import axios from "axios";

import InstitutePanel from "./InstitutePanel.vue";
export default {
  components: {
    InstitutePanel,
  },
  data() {
    return {
      formdata: {
        course_name: "",
        course_code: "",
        course_duration: "",
        description: "",
        eligibility: "",
        career_opportunities: "",
        coursetype: "",
        intake: "",
        tution_fees: "",
      },
      user_id: "0",
    };
  },
  mounted() {
    this.user_id = localStorage.getItem("userName");
  },
  methods: {
    saveData() {
      const formData = new FormData();

      formData.append("user_id", this.user_id);
      formData.append("course_name", this.formdata.course_name);
      formData.append("course_code", this.formdata.course_code);
      formData.append("course_duration", this.formdata.course_duration);
      formData.append("description", this.formdata.description);
      formData.append("eligibility", this.formdata.eligibility);
      formData.append("status", this.formdata.status);
      formData.append(
        "career_opportunities",
        this.formdata.career_opportunities
      );
      formData.append("course_type", this.formdata.coursetype);
      formData.append("intake", this.formdata.intake);
      formData.append("tution_fees", this.formdata.tution_fees);

      const url = "http://localhost:8000/api/saveCourse";
      axios
        .post(url, formData) //Product/listCategories?token="+localStorage.token)
        .then((response) => {
          // console.log(response);
          alert(response.data.msg);
          this.formdata.course_name = "";
          this.formdata.course_code = "";
          this.formdata.course_duration = "";
          this.formdata.description = "";
          this.formdata.eligibility = "";
          this.formdata.career_opportunities = "";
          this.formdata.coursetype = "";
          this.formdata.intake = "";
          this.formdata.tution_fees = "";
        });
    },
  },
};
</script>
