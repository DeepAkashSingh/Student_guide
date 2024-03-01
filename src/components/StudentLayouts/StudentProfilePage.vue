<template>
  <StudentPanel>
    <form action="" class="form w100 m-a">
      <div class="ls-main">
        <h1 class="ls-h2">Profile Page</h1>
        <div class="ls-container p-3 w60 m-a">
          <div class="ls-form d-flex f-col">
            <label class="ls-label" for="address">Address</label>
            <textarea
              name="address"
              id="address"
              v-model="formdata.address"
              required
              class="input"
              placeholder="Enter Address"
            ></textarea>
          </div>
          <div class="ls-form d-flex f-col">
            <label class="ls-label" for="pincode">Pincode</label>
            <input
              type="number"
              placeholder="Enter Pincode"
              name="pincode"
              id="pincode"
              class="input"
              v-model="formdata.pincode"
              required
            />
          </div>
          <div class="ls-form d-flex f-col">
            <label class="ls-label">Gender</label>
            <span class="d-flex space-evenly input">
              <span>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  v-model="formdata.male"
                  required
                />
                <label class="ls-label" for="male">Male</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  v-model="formdata.female"
                />
                <label class="ls-label" for="female">Female</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  v-model="formdata.other"
                />
                <label class="ls-label" for="other">Other</label>
              </span>
            </span>
          </div>

          <div class="ls-form d-flex f-col">
            <label class="ls-label" for="dob">Date Of Birth</label>
            <input
              type="date"
              placeholder="Enter Date Of Birth"
              name="dob"
              id="dob"
              class="input"
              v-model="formdata.dob"
              required
            />
          </div>
          <div class="ls-form d-flex f-col">
            <label class="ls-label" for="website">Website</label>
            <input
              type="text"
              placeholder="Enter Website"
              name="website"
              id="website"
              class="input"
              v-model="formdata.website"
              required
            />
          </div>
          <div class="ls-form d-flex f-col">
            <label class="ls-label" for="description">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              name="description"
              id="description"
              class="input"
              v-model="formdata.description"
              required
            />
          </div>
          <div class="ls-form d-flex f-col">
            <label class="ls-label" for="user_id">User Id</label>
            <input
              type="text"
              placeholder="Enter User Id"
              name="user_id"
              id="user_id"
              class="input"
              v-model="formdata.user_id"
              required
            />
          </div>

          <div class="ls-sign">
            <input
              type="button"
              value="submit"
              class="ls-btn ls-w-100 hover"
              @click="saveData"
            />
          </div>
        </div>
      </div>
    </form>
  </StudentPanel>
</template>
<script>
import StudentPanel from "./StudentPanel.vue";
import axios from "axios";

export default {
  name: "StudentProfilePage",
  components: { StudentPanel },
  data() {
    return {
      formdata: {
        address: "",
        pincode: "",
        gender: "",
        dob: "",
        website: "",
        description: "",
        // user_id: "",
      },
      user_id: "0",
    };
  },
  methods: {
    saveData() {
      const formData = new FormData();

      formData.append("user_id", this.user_id);
      formData.append("address", this.formdata.address);
      formData.append("pincode", this.formdata.pincode);
      formData.append("gender", this.formdata.gender);
      formData.append("dob", this.formdata.dob);
      formData.append("website", this.formdata.website);
      formData.append("description", this.formdata.description);
      // formData.append("user_id", this.formdata.user_id);

      const url = "https://techebiz.com/student_guide/api/saveProfile";
      axios
        .post(url, formData) //Product/listCategories?token="+localStorage.token)
        .then((response) => {
          // console.log(response);
          alert(response.data.msg);
          this.formdata.address = "";
          this.formdata.pincode = "";
          this.formdata.gender = "";
          this.formdata.dob = "";
          this.formdata.website = "";
          this.formdata.description = "";
          // this.formdata.user_id = "";
        });
    },
  },
};
</script>
