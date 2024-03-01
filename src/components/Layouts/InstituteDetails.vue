<template>
  <MainPageLayout>
    <div class="course-container b-shadow">
      <!-- {{ instituteData }} -->
      <div class="text">
        <h1 class="content-head">{{ instituteData.InstituteTitle }}</h1>
        <p class="mt-1">
          {{ instituteData.Description }}
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
        <img src="../../assets/images/Institute.jpg" alt="Your Image" />
      </div>
    </div>
    <div class="b-shadow p-1 bg-blue">
      <div class="course-container d-flex space-between">
        <div class="card">
          <div class="details">
            <p>{{ instituteData.Address }}</p>
            <p>{{ instituteData.Email }}</p>
            <p>{{ instituteData.Phone }}</p>
            <p>{{ instituteData.Website }}</p>
            <p>{{ instituteData.Language }}</p>
          </div>
        </div>
      </div>
    </div>
  </MainPageLayout>
</template>
<script>
import ApiList from "@/ApiList";
import MainPageLayout from "@/components/LandingPageLayouts/MainPageLayout.vue";
export default {
  name: "InstituteDetails",
  mixins: [ApiList],
  components: {
    MainPageLayout,
  },

  props: ["item"],
  data() {
    return {
      instituteID: 0,
      instituteData: {},
    };
  },
  created() {
    this.instituteID = this.$route.params.id;
    // alert(JSON.stringify(this.$route.params));
    console.log("call load " + this.$route.params.id);
  },
  mounted() {
    this.instituteID = this.$route.params.id;
    // alert(JSON.stringify(this.instituteData));
    this.loadData();
  },
  methods: {
    loadData() {
      // alert(this.instituteID);
      let list = this.apis.instituteList.filter(
        (v) => v.ID == this.instituteID
      );
      this.instituteData = list[0];
    },
  },
};
</script>
