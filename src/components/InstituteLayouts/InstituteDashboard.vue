<template>
  <InstitutePanel>
    <div class="d-flex mt-1">
      <table width="100%" border="0" cellspacing="25px">
        <tr>
          <td width="75%" valign="top">
            <div class="space-evenly w100">
              <h2>{{ instData.InstituteTitle }}</h2>
              <p>{{ instData.Description }}</p>
              <br />
              <p>Address :{{ instData.Address }}</p>

              <p>Phone :{{ instData.Phone }}</p>
              <p>Website : {{ instData.Website }}</p>
            </div>
            <br /><br />
            <div class="space-evenly w100">
              <h2>Our Courses</h2>
              <table class="table" border="1px">
                <tr>
                  <th>Course Title</th>
                  <th>Duration</th>
                  <th>Cost</th>
                </tr>
                <tr
                  v-for="item in apis.courseList.filter(
                    (v) => v.InstituteId == instData.InstituteId
                  )"
                  :key="item.CourseTitle"
                >
                  <td>{{ item.CourseTitle }}</td>
                  <td>{{ item.Duration }}</td>
                  <td>{{ item.Cost }}</td>
                </tr>
              </table>
            </div>
          </td>
          <td width="25%" valign="top">
            <div
              style="
                text-align: center;
                border: 1px solid #333;
                border-radius: 10px;
                padding: 5px;
                margin: 8px 0px;
              "
            >
              <span style="font-size: 48px">+</span>
              <h4>Course</h4>
            </div>

            <div
              style="
                text-align: center;
                border: 1px solid #333;
                border-radius: 10px;
                padding: 5px;
                margin: 8px 0px;
              "
            >
              <h4>Our Courses</h4>
              <span style="font-size: 36px">10</span>
            </div>

            <div
              style="
                text-align: center;
                border: 1px solid #333;
                border-radius: 10px;
                padding: 5px;
                margin: 8px 0px;
              "
            >
              <h4>No of Students Enrolled</h4>
              <span style="font-size: 36px">276</span>
            </div>
            <h4>Notification Alerts</h4>
            <div
              style="border: 1px solid #333; border-radius: 10px; padding: 5px"
            >
              <div class="notification" v-for="msg in messageList" :key="msg">
                {{ msg }}
                <!-- <button @click="closeNotification">Close</button> -->
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <!-- <br><br> -->

    <!-- <div class="container mt-3 p-1 info w40"> -->
    <!-- </div> -->
    <!-- </div> -->
  </InstitutePanel>
</template>
<script>
import ApiList from "@/ApiList";
import InstitutePanel from "./InstitutePanel.vue";
// import CourseCards from "../Layouts/CourseCards.vue";
// import InstituteCards from "../Layouts/InstituteCards.vue";
export default {
  name: "AdminDashboard",

  mixins: [ApiList],

  components: {
    InstitutePanel,
    // CourseCards,
    // InstituteCards,
  },
  data() {
    return {
      list: [],
      instData: {},
      courseList: [],
      displayedCourseIndex: 0,
      visible: true,
      messageList: [
        "Feedback Notification ...",
        "2nd Notification",
        "3rd Notification",
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    showNotification(message) {
      this.message = message;
      this.visible = true;

      setTimeout(() => {
        this.closeNotification();
      }, 5000); // Auto-close after 5 seconds
    },
    closeNotification() {
      this.visible = false;
      this.message = "";
    },
    loadData() {
      this.instData = this.apis.instituteList[0];
      this.courseList = this.apis.courseList.filter(
        (v) => v.InstituteId == this.instData.InstituteId
      );
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
.courses {
  width: 50%;
  /* border: 1px solid red; */
}

.wrap-product {
  width: 40%;
}

.info {
  /* float: right; */
  height: 40%;
}

.d-flex h2 {
  display: block;
  width: 100%;
}

.notification {
  /* position: fixed; */
  margin: 6px 0px;
  top: 20px;
  right: 20px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
