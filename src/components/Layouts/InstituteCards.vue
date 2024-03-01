<template>
  <div class="institute-card w50">
    <div class="card-container w100">
      <div class="card-img">
        <img src="../../assets/images/Institute-card.jpg" alt="Card Image" />
      </div>
      <div class="card-content">
        <div class="top">
          <h2>
            <img
              src="../../assets/images/university.svg"
              alt=""
              class="icons mr-1"
            />{{ item.InstituteTitle }}
          </h2>
          <p>
            <img
              src="../../assets/images/info.svg"
              alt="info"
              class="icons mr-1"
            />Description
          </p>
        </div>
        <div class="bottom">
          <p>
            <img
              src="../../assets/images/phone-icon.svg"
              alt=""
              class="icons mr-1"
            />{{ item.Phone }}
          </p>
          <p>
            <img
              src="../../assets/images/address.svg"
              alt="address"
              class="icons mr-1"
            />
            {{ item.Address }}
          </p>
          <p>
            <img src="../../assets/images/link.svg" alt="" class="icons mr-1" />
            {{ item.Website }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InstituteCards",
  props: ["item"],
};
</script>
