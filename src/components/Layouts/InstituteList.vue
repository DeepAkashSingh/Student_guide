<template>
  <MainPageLayout>
    <div class="p-1 container">
      <span class="d-flex space-between p-1 align-center">
        <h2>Institute List</h2>
        <!-- {{ filteredInstitutes }} -->
        <input
          type="search"
          v-model="searchInstitute"
          name="search"
          id="search"
          class="p-1 bor-rad-1"
        />
      </span>
      <div class="d-flex space-between">
        <InstituteCards
          v-for="(institute, index) in filteredInstitutes"
          :item="institute"
          :key="index"
          class="mt-1"
        />
      </div>
    </div>
  </MainPageLayout>
</template>
<script>
import ApiList from "@/ApiList";
import InstituteCards from "../Layouts/InstituteCards.vue";
import MainPageLayout from "../LandingPageLayouts/MainPageLayout.vue";

export default {
  mixins: [ApiList],
  components: {
    InstituteCards,
    MainPageLayout,
  },

  data() {
    return {
      searchInstitute: "",
      list: [],
    };
  },
  computed: {
    filteredInstitutes() {
      const searchTerm = this.searchInstitute.toLowerCase();
      return this.list.filter((institute) => {
        return (
          (institute.InstituteName &&
            institute.InstituteName.toLowerCase().includes(searchTerm)) ||
          (institute.Instructor &&
            institute.Instructor.toLowerCase().includes(searchTerm)) ||
          (institute.Cost &&
            institute.Cost.toLowerCase().includes(searchTerm)) ||
          (institute.Enrolled &&
            institute.Enrolled.toString().includes(searchTerm))
        );
      });
    },
  },
  mounted() {
    console.log("Component mounted");
    this.list = this.apis.instituteList;
  },
};
</script>
