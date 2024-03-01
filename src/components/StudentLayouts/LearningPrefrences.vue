<template>
  <StudentPanel>
    <div class="banner w100">
      <h1 class="heading">Learning Prefrences</h1>

      <div class="learningPreferences">
        <p>
          Help us providing you with the relevant recommendations based on your
          choices.
        </p>

        <div class="learningTopics">
          <h4>Learning Topics</h4>
          <p>Select the learning topics that you are interested in.</p>
          <div class="w100 learningform d-flex space-between">
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="../../assets/images/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w50 topics">
              <input type="checkbox" /> Accounting & Finance
              <span><img src="images/icons/a.png" alt="" /></span>
            </div>
            <div class="w100 button">
              <input type="submit" />
            </div>
          </div>
        </div>

        <div class="learningTopics mt-3">
          <h4>Skills</h4>
          <p>Select the skills that you want to learn.</p>
          <div class="w100 learningform d-flex space-between">
            <input type="search" placeholder="skills" />
          </div>

          <div class="w100 button">
            <input type="submit" class="btn" />
          </div>
        </div>
      </div>
    </div>
  </StudentPanel>
</template>
<script>
import StudentPanel from "./StudentPanel.vue";

export default {
  name: "LearningPrefrences",
  components: {
    StudentPanel,
  },
};
</script>
