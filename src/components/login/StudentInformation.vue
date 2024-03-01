<template>
  <MainPageLayout>
    <form class="form">
      <div class="ls-main">
        <div class="ls-container w90 m-a p-1">
          <h2 class="ls-h2">Create New Account</h2>

          <div class="ls-form m-a mt-1 d-flex">
            <div class="left w40">
              <div class="content">
                <span class="upload-container">
                  <label for="profile-pic" class="profile cursor"
                    >Select Picture</label
                  >
                  <input
                    type="file"
                    id="profile-pic"
                    name="profile-pic"
                    class="w100 cursor"
                  />
                </span>
              </div>
            </div>
            <div class="right w60 m-a p-1">
              <div class="ls-input">
                <span class="ls-content">
                  <label for="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="input w100"
                    required
                  />
                </span>
              </div>
              <div class="ls-input">
                <span class="ls-content">
                  <label for="dob">Date Of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    class="input w100"
                    required
                  />
                </span>
              </div>

              <div class="ls-input">
                <span class="ls-content">
                  <label for="address">Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    rows="1"
                    class="address w100"
                    required
                  ></textarea>
                </span>
              </div>
              <div class="ls-input">
                <span class="ls-content">
                  <label for="pin_code">Pin Code:</label>
                  <input
                    type="number"
                    id="pin_code"
                    name="pin_code"
                    class="input w100"
                    required
                  />
                </span>
              </div>
              <div class="ls-input">
                <span class="w100 m-a d-flex f-col">
                  <span>
                    <label class="label">Gender</label>
                  </span>
                  <span class="input d-flex g-1">
                    <span>
                      <input type="radio" name="male" id="male" />
                      <label for="male">Male</label>
                    </span>

                    <span>
                      <input type="radio" name="female" id="female" />
                      <label for="female">Female</label>
                    </span>
                    <span>
                      <input type="radio" name="other" id="other" />
                      <label for="other">Other</label>
                    </span>
                  </span>
                </span>
              </div>
              <div class="ls-input d-flex justify-center">
                <button class="btn">
                  <router-link to="SignUp">Back</router-link>
                </button>
                <input type="submit" class="ls-btn" value="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </MainPageLayout>
</template>
<script>
// import MainPageLayout from "../LandingPageLayouts/MainPageLayout.vue";

export default {
  name: "StudentInformation",
  // components: { MainPageLayout },
};
</script>
