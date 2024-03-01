<template>
  <StudentPanel>
    <h1 class="ls-h2 heading">Educationl Background</h1>
    <form class="form">
      <div class="ls-main">
        <div class="ls-container mt-1">
          <div class="ls-form w100 m-a d-flex space-between">
            <span class="w100">
              <label class="label" for="qualification"
                >Highest Qualification:</label
              >
              <select class="input w100">
                <option value="" disabled selected>Select</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Graduation">Graduation</option>
                <option value="Post Graduation">Post Graduation</option>
              </select>
            </span>
            <label class="label" for="passing_year">Passing Year:</label>
            <input
              class="input w100"
              name="passing_year"
              id="passing_year"
              type="date"
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
              required
            />
          </div>
          <div class="ls-form">
            <label class="label">GPA/Grades:</label>
            <input
              class="input w100"
              type="text"
              placeholder="GPA Grades"
              required
            />
          </div>

          <div class="ls-form">
            <label class="label">Achievements(If/Any):</label>
            <input
              class="input w100"
              type="text"
              placeholder="Achievements"
              required
            />
          </div>

          <div class="eduBackgroundBTN">
            <input type="submit" value="submit" class="ls-btn" />
          </div>
        </div>
      </div>
    </form>
  </StudentPanel>
</template>

<script>
import StudentPanel from "./StudentPanel.vue";

export default {
  name: "EducationBackground",
  components: { StudentPanel },
};
</script>
