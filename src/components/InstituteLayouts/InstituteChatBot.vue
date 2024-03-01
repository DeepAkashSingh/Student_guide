<template>
  <InstitutePanel>
    <div class="feedback-form w75 d-flex f-col">
      <h1 class="heading">Chat Bot</h1>
      <div class="w70 mt-1 m-a">
        <div id="new-comment">
          <h2>Ask Me</h2>
          <form>
            <textarea
              placeholder="Ask your Query..."
              rows="4"
              required
            ></textarea>
            <input type="submit" value="Submit" class="btn" />
          </form>
        </div>
        <div class="comment">
          <div class="user-profile">
            <img src="../../assets/images/user.svg" class="user-avatar" />
            <div class="user-info">
              <strong>{{ first_name }}{{ last_name }}</strong>
            </div>
          </div>
          <div class="comment-text">
            <p>
              {{ message }}
            </p>
          </div>
          <div class="comment-meta">
            <span>Posted on: January 1, 2023</span>
          </div>
        </div>
      </div>
    </div>
  </InstitutePanel>
</template>
<script>
import axios from "axios";

import InstitutePanel from "./InstitutePanel.vue";

export default {
  name: "InstituteChatBot",
  props: ["item"],
  components: { InstitutePanel },
  data() {
    return {
      formdata: {
        first_name: "",
        last_name: "",
        message: "",
      },
    };
  },
  methods: {
    saveData() {
      const formData = new FormData();

      formData.append("first_name", this.formdata.first_name);
      formData.append("last_name", this.formdata.last_name);
      formData.append("message", this.formdata.message);

      const url = "https://techebiz.com/student_guide/api/registerUser";
      axios.post(url, formData).then((response) => {
        // console.log(response);
        alert(response.data.msg);
        this.formdata.first_name = "";
        this.formdata.last_name = "";
        this.formdata.message = "";
      });
    },
    moveNext(v) {
      this.$router.push(`/StudentChat/${v}`);
    },
  },
};
</script>
<style scoped>
.comment {
  border-bottom: 1px solid #ccc;
  margin-bottom: 15px;
  padding-bottom: 15px;
  img {
  }
}

.comment:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.user-profile {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: #104b83;
  padding: 5px;
}

.comment-text {
  margin-bottom: 10px;
}

.comment-meta {
  font-size: 0.8em;
  color: #888;
}

#new-comment {
  margin-top: 20px;
}

#new-comment textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>
