<template>
  <StudentPanel>
    <div class="feedback-form w100">
      <h1 class="heading">Feedback Form</h1>
      <div id="comments-container">
        <div id="new-comment">
          <form>
            <textarea
              placeholder="Write your Feedback here..."
              rows="4"
              required
            ></textarea>
            <br />
            <input type="submit" value="Submit" class="btn" />
          </form>
        </div>
        <div class="comment">
          <div class="user-profile">
            <img src="../../assets/images/user.svg" class="user-avatar" />
            <div class="user-info">
              <strong>User</strong>
            </div>
          </div>
          <div class="comment-text">
            <p>
              This is the first comment. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div class="comment-meta">
            <span>Posted on: January 1, 2023</span>
          </div>
        </div>
        <div class="comment">
          <div class="user-profile">
            <img
              src="../../assets/images/user.svg"
              fill="black"
              alt="User Avatar"
              class="user-avatar rect"
            />
            <div class="user-info">
              <strong>User</strong>
            </div>
          </div>
          <div class="comment-text">
            <p>
              This is the first comment. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div class="comment-meta">
            <span>Posted on: January 1, 2023</span>
          </div>
        </div>
        <div class="comment">
          <div class="user-profile">
            <img src="../../assets/images/user.svg" class="user-avatar" />

            <div class="user-info">
              <strong>User</strong>
            </div>
          </div>
          <div class="comment-text">
            <p>
              This is the first comment. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div class="comment-meta">
            <span>Posted on: January 1, 2023</span>
          </div>
        </div>
      </div>
    </div>
  </StudentPanel>
</template>
<script>
import StudentPanel from "./StudentPanel.vue";
export default {
  name: "StudentFeedbackList",
  components: {
    StudentPanel,
  },
};
</script>
<style scoped>
#comments-container {
  width: 70%;
  margin: auto;
  padding: 20px;
  margin-top: 1rem;
}

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
  flex-wrap: wrap;
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
