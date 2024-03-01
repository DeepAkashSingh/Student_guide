<template>
  <div class="footer w100">
    <div class="content">
      <div class="ficons d-flex justify-center align-center g-1">
        <img src="../../assets/images/ig.svg" alt="icon" class="icon" />
        <img src="../../assets/images/fb.svg" alt="icon" class="icon" />
        <img src="../../assets/images/linkedin.svg" alt="icon" class="icon" />
        <img src="../../assets/images/twitter.svg" alt="icon" class="icon" />
      </div>
      <div class="links">
        <ul>
          <li class="d-flex justify-center">
            <a href="privacy.vue" class="link">Privacy</a>
            <a href="terms.vue" class="link">Terms</a>
            <a href="contact.vue" class="link">Contact Us</a>
          </li>
        </ul>
      </div>
      <p class="d-flex justify-center">
        © 2023 International Inc. All Rights Reserved.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterSection",
};
</script>
