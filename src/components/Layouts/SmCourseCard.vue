<template>
  <main>
    <section>
      <div class="profile profile-table">
        <div class="profile__image">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png"
            alt="Doggo"
          />
        </div>
        <div class="profile__info">
          <h4>{{ item.CourseTitle }}</h4>
          <p class="profile__info__extra">
            {{ item.Cost }}
          </p>
          <span class="rating"
            >{{ item.Ratings }}

            <img src="../../assets/images/star.svg" alt="star" class="icons" />
            <img src="../../assets/images/star.svg" alt="star" class="icons" />
            <img src="../../assets/images/star.svg" alt="star" class="icons" />
            <img src="../../assets/images/star.svg" alt="star" class="icons" />
            <img src="../../assets/images/star.svg" alt="star" class="icons" />
          </span>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "SmCourseCard",
  props: ["item"],

  components: {},
  data() {
    return {};
  },
};
</script>
