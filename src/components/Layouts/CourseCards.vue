<template>
  <section class="wrap-product" id="app">
    <img src="../../assets/images/dummy.jpg" class="cardimg" />
    <h2>{{ item.CourseTitle }}</h2>
    <span class="uniorcoll d-flex align-center"
      ><img src="../../assets/images/university.svg" class="icons mr-1" />
      Cambridge University &nbsp;| &nbsp;<img
        src="../../assets/images/clock.svg"
        alt="clock"
        class="icons mr-1"
      />
      {{ item.Duration }}</span
    >
    <h4>&#163; {{ item.Cost }}</h4>

    <span class="rating"
      >{{ item.Ratings }}

      <img src="../../assets/images/star.svg" alt="star" class="icons" />
      <img src="../../assets/images/star.svg" alt="star" class="icons" />
      <img src="../../assets/images/star.svg" alt="star" class="icons" />
      <img src="../../assets/images/star.svg" alt="star" class="icons" />
      <img src="../../assets/images/star.svg" alt="star" class="icons" />
    </span>
  </section>
</template>
<script>
export default {
  name: "CourseCards",
  props: ["item"],

  components: {},
  data() {
    return {};
  },
};
</script>
