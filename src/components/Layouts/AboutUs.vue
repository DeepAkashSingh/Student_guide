<template>
  <MainPageLayout>
    <h2 class="course-container b-shadow aboutus w90">
      <div class="text">
        <h2 class="content-head">About Us</h2>
        <p class="txt mt-1">
          Welcome to International Student Guide, where we are dedicated to
          empowering students to navigate the challenges of academic and
          personal growth. Our team of experienced counselors and advisors is
          committed to providing a supportive and nurturing environment for
          every student.
        </p>
      </div>
      <div class="image">
        <img
          src="../../assets/images/about-us.png"
          alt="about us"
          class="w100 about-img"
        />
      </div>
    </h2>
  </MainPageLayout>
</template>
<script>
import MainPageLayout from "../LandingPageLayouts/MainPageLayout.vue";
export default {
  name: "AboutUs",

  components: {
    MainPageLayout,
  },
};
</script>
