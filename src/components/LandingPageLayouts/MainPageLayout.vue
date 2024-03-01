<template>
  <div>
    <HeaderSection />
    <!-- <FindCourses /> -->
    <!-- <div class="d-flex"> -->
    <slot />
    <!-- </div> -->
    <FooterSection />
  </div>
</template>
<script>
import HeaderSection from "./HeaderSection.vue";
// import FindCourses from "../Layouts/FindCourses.vue";
import FooterSection from "./FooterSection.vue";
export default {
  name: "MainPageLayout",
  components: {
    HeaderSection,
    // FindCourses,
    FooterSection,
  },
};
</script>
