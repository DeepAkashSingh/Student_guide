<template>
  <StudentPanel>
    <div class="w100 d-flex">
      <div class="w70">
        <div class="w98 b-shadow p1">
          <h2 class="th heading d-flex space-between">
            Course List
            <input type="text" v-model="search" class="p1 bor-rad-1" />
          </h2>
          <table class="w100 mt-1">
            <tr>
              <th>Course Id</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Course Type</th>
              <th>Eligibility</th>
              <th>Tuition Fee</th>
            </tr>
            <tr v-for="course in filterList" :key="course.sno">
              <td>{{ course.course_code }}</td>
              <td>{{ course.course_name }}</td>
              <td>{{ course.course_duration }}</td>
              <td>{{ course.course_type }}</td>
              <td>{{ course.eligibility }}</td>
              <td>{{ course.tution_fees }}</td>
            </tr>
          </table>
        </div>
        <div class="b-shadow w98 mt-1 p1">
          <h2 class="heading">Top 5 Institutes</h2>
          <InstituteCardSM
            v-for="institute in instituteList"
            :key="institute.user_id"
            :item="institute"
            class="mt-3"
          />
        </div>
      </div>

      <div
        class="b-shadow h-5 d-flex f-col justify-center align-center w30 mt-3"
      >
        <div class="cards">
          <div class="card">
            <router-link to="MyCoursesList">
              <img
                src="../../assets/images/course.svg"
                alt="course"
                class="icons"
              />
              <p class="">Courses</p>
            </router-link>
          </div>
          <div class="card">
            <router-link to="StudentChatBot">
              <img
                src="../../assets/images/chatbot.svg"
                alt="chatbot"
                class="icons"
              />
              <p>ChatBot</p>
            </router-link>
          </div>
          <div class="card">
            <router-link to="StudentChat">
              <img
                src="../../assets/images/chat.svg"
                alt="chat"
                class="icons"
              />
              <p>Chat</p>
            </router-link>
          </div>
          <div class="card d-flex">
            <router-link to="StudentNotification ">
              <h4>Notification</h4>
              <span class="p-1 notification">
                {{ messageList.length }}
              </span>
            </router-link>
          </div>
        </div>

        <div class="information p-1">
          <h2>Personal Information</h2>
          <p>Name:Harpreet Kaur</p>
          <p>Phone:9876543210</p>
          <p>Email:harpreet@gmail.com</p>
        </div>
      </div>
    </div>

    <!-- </div> -->
  </StudentPanel>
</template>
<script>
import axios from "axios";
import ApiList from "@/ApiList";
import StudentPanel from "./StudentPanel.vue";
import InstituteCardSM from "../Layouts/InstituteCardSM.vue";
export default {
  name: "StudentDashboard",
  mixins: [ApiList],
  props: ["item"],

  components: {
    StudentPanel,
    InstituteCardSM,
  },
  data() {
    return {
      search: "",
      list: [],
      instituteList: [],
      displayedCourseIndex: 0,

      messageList: [
        "Feedback Notification ...",
        "2nd Notification",
        "3rd Notification",
      ],
      Name: "Harpreet Kaur",
      PhNo: "9876543210",
      Email: "harpreet@gmail.com",
      City: "Sangrur",
    };
  },
  mounted() {
    this.loadData();
  },
  computed: {
    filterList() {
      let searchText = this.search;
      return this.list.filter((v) => {
        return v.course_name.toLowerCase().includes(searchText);
      });
    },
  },
  methods: {
    loadData() {
      // this.instituteList = this.apis.instituteList;
      const url = "http://localhost:8000/api/courseList";
      axios
        .get(url, {
          // params: {
          //     invoice_id: this.invoiceno,
        }) //Product/listCategories?token="+localStorage.token)
        .then((response) => {
          // console.log(response);
          this.list = response.data;
          // alert(this.list.length);
        });
      // instituteData
      const institute_url = "http://localhost:8000/api/instituteList";
      axios
        .get(institute_url, {
          // params: {
          //     invoice_id: this.invoiceno,
        })
        .then((response) => {
          // console.log(response);
          this.instituteList = response.data;
          // alert(this.list.length);
        });
    },
    moveCards(id) {
      this.$router.push(`/CourseDetails/${id}`);
    },
    moveInstitute(id) {
      this.$router.push(`/InstituteDetails/${id}`);
    },
  },
};
</script>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 270px;
  margin: 1rem auto;
}
.card {
  max-width: 120px;
  border: 2px solid;
  padding: 2rem 6rem 20px 15px;
  overflow: hidden;
  border-radius: 10px;
}
a {
  color: black;
}
.icons {
  width: 35px;
  height: 35px !important;
}
.main {
  position: relative;
  width: 75%;
}
.noti {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
}
.notification {
  font-size: 30px;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); */
}
table,
th,
td {
  border: 1px solid black;
}
</style>
