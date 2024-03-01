<template>
  <form action="" class="form container w100 m-a">
    <div class="ls-main">
      <div class="ls-container p-3 w60 m-a">
        <h1 class="ls-h2">Profile Page</h1>
        <div class="ls-form d-flex space-between">
          <label class="ls-label" for="address">Address</label>
          <textarea
            type="text"
            placeholder="Enter Address"
            name="address"
            id="address"
            class="input w100"
            v-model="user"
            required
          />
        </div>
        <div class="ls-form w100 d-flex space-between">
          <span class="w50 d-flex f-col">
            <label class="ls-label">Gender</label>
            <span class="d-flex space-evenly input">
              <span>
                <label class="ls-label" for="male">Male</label>
                <input
                  type="radio"
                  name="male"
                  id="male"
                  v-model="male"
                  required
                />
              </span>
              <span>
                <label class="ls-label" for="female">Female</label>
                <input
                  type="radio"
                  name="female"
                  id="female"
                  v-model="female"
                  required
                />
              </span>
              <span>
                <label class="ls-label" for="other">Other</label>
                <input
                  type="radio"
                  name="other"
                  id="other"
                  v-model="other"
                  required
                />
              </span>
            </span>
          </span>
          <span class="ls-form d-flex f-col w50">
            <label class="ls-label" for="dob">Date Of Birth</label>
            <input
              type="date"
              placeholder="Enter Date Of Birth"
              name="dob"
              id="dob"
              class="input"
              v-model="user"
              required
            />
            <i class="fa fa-user fa-lg"></i>
          </span>
        </div>
        <div class="ls-form d-flex f-col">
          <label class="ls-label" for="website">Website</label>
          <input
            type="text"
            placeholder="Enter Website"
            name="website"
            id="website"
            class="input"
            v-model="user"
            required
          />
          <i class="fa fa-user fa-lg"></i>
        </div>
        <div class="ls-form d-flex f-col">
          <label class="ls-label" for="description">Description</label>
          <input
            type="text"
            placeholder="Enter Description"
            name="description"
            id="description"
            class="input"
            v-model="user"
            required
          />
          <i class="fa fa-user fa-lg"></i>
        </div>
        <div class="ls-form d-flex f-col">
          <label class="ls-label" for="user_id">User Id</label>
          <input
            type="text"
            placeholder="Enter User Id"
            name="user_id"
            id="user_id"
            class="input"
            v-model="user"
            required
          />
          <i class="fa fa-user fa-lg"></i>
        </div>

        <div class="ls-sign">
          <button
            @click="validateUser"
            type="button"
            class="ls-btn ls-w-100 hover"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "InstituteProfilePage",
};
</script>
