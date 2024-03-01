<template>
  <div class="card-container">
    <div class="card">
      <span class="card-details">
        <h4 class="institute-name">
          {{ item.first_name }}{{ item.last_name }}
        </h4>
        <p class="institute-address">
          {{ item.email }}
        </p>
        <p class="institute-address">
          {{ item.mobile }}
        </p>
      </span>
      <span class="cta-button">
        <button class="chat-button" @click="moveNext(item.user_id)">
          Chat
        </button>
      </span>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "InstituteCardSM",
  props: ["item"],
  components: {},
  data() {
    return {
      formdata: {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
      },
    };
  },
  methods: {
    saveData() {
      const formData = new FormData();

      formData.append("first_name", this.formdata.first_name);
      formData.append("last_name", this.formdata.last_name);
      formData.append("email", this.formdata.email);
      formData.append("mobile", this.formdata.mobile);

      const url = "https://techebiz.com/student_guide/api/registerUser";
      axios.post(url, formData).then((response) => {
        // console.log(response);
        alert(response.data.msg);
        this.formdata.first_name = "";
        this.formdata.last_name = "";
        this.formdata.email = "";
        this.formdata.mobile = "";
      });
    },
    moveNext(v) {
      this.$router.push(`/StudentChatBot/${v}`);
    },
  },
};
</script>
