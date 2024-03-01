<template>
  <InstitutePanel>
    <form class="form w100">
      <div class="ls-main">
        <div class="ls-container w100">
          <h2 class="heading">Add New Institute</h2>

          <div class="ls-form m-a mt-1 d-flex">
            <div class="left w40">
              <div class="content">
                <span class="upload-container">
                  <label for="profile-pic" class="profile cursor">Select Picture</label>
                  <input type="file" id="profile-pic" name="profile-pic" class="w100 cursor" />
                </span>
              </div>
            </div>
            <div class="right w60 m-a p-1">
              <div class="ls-input">
                <span class="ls-content">
                  <label for="institute_name">Institute Name:</label>
                  <input type="phone" id="institute_name" name="institute_name" class="input w100" required />
                </span>
              </div>
              <div class="ls-input">
                <span class="ls-content">
                  <label for="starting_date">Starting Date:</label>
                  <input type="date" id="starting_date" name="starting_date" class="input w100" required />
                </span>
              </div>

              <div class="ls-input">
                <span class="ls-content">
                  <label for="mobile_no">Mobile No:</label>
                  <input type="number" id="mobile_no" name="mobile_no" class="input w100" maxlength="10" required />
                </span>
              </div>
              <div class="ls-input">
                <span class="ls-content">
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" class="input w100" required />
                </span>
              </div>
              <div class="ls-input">
                <span class="ls-content">
                  <label for="country">Country:</label>
                  <input type="text" id="country" name="country" class="input w100" required />
                </span>
              </div>
              <div class="ls-input">
                <span class="ls-content">
                  <label for="address">Address:</label>
                  <textarea name="address" id="address" rows="2" class="input w100" required></textarea>
                </span>
              </div>

              <div class="ls-input d-flex justify-center">
                <input type="submit" class="ls-btn" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </InstitutePanel>
</template>
<script>
import InstitutePanel from "./InstitutePanel.vue";

export default {
  name: "AddInstitute",
  components: { InstitutePanel },
  methods: {
  },
};
</script>
