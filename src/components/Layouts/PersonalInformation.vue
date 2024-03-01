<template>
  <div class="container w90">
    <h2>Personal Information</h2>
    <div class="content flex">
      <div class="left-side">
        <div class="upload-container">
          <label for="fileInput" class="upload-btn">Profile Picture</label>
          <input type="file" id="fileInput" accept="image/*" />
          <input type="button" id="change-pic" value="Change" />
        </div>
      </div>
      <div class="right-side">
        <div class="card-content">
          <form class="form w70">
            <div class="ls-main">
              <div class="ls-container w60">
                <div class="ls-form">
                  <label class="ls-form">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    name="first-name"
                    class="input"
                    required
                  />
                </div>
                <div class="ls-form">
                  <label class="ls-form">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="last-name"
                    class="input"
                    required
                  />
                </div>
                <div class="ls-form">
                  <label class="ls-form">DOB </label>
                  <input
                    type="date"
                    placeholder="Enter Your DOB"
                    name="dob"
                    class="input"
                    required
                  />
                </div>
                <div class="ls-form">
                  <label class="ls-gender">Gender</label>
                  <div class="input">
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
                  </div>
                </div>
                <div class="ls-form">
                  <label class="ls-form">Mobile No</label>
                  <input
                    type="number"
                    placeholder="Enter Your Mob Num"
                    name="MobNum"
                    class="input"
                    required
                  />
                </div>
                <div class="ls-form">
                  <label class="ls-form">Username</label>
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    name="MobNum"
                    class="input"
                    required
                  />
                </div>
                <div class="ls-form">
                  <label class="ls-form">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    name="pass"
                    class="input"
                    required
                  />
                </div>
                <div class="ls-form">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Your Password"
                    name="cpass"
                    class="input"
                    required
                  />
                </div>
                <div class="ls-form">
                  <label class="ls-profile">Registered As</label>
                  <div class="input">
                    <span>
                      <input type="radio" name="student" id="student" />
                      <label for="student">Student</label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        name="course-advisor"
                        id="course-advisor"
                      />
                      <label for="course-advisor">Course Advisor</label>
                    </span>
                    <span>
                      <input type="radio" name="institute" id="institute" />
                      <label for="institute">Institute</label>
                    </span>
                  </div>
                </div>
                <div class="ls-form">
                  <input type="Submit" class="ls-submit" value="Signup" />
                  <input type="reset" class="ls-reset hover" value="Reset" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
