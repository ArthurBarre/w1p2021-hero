<template>
  <div class="event">
    <div class="event_els">
      <div class="event__picture"></div>
      <h3 class="event__title">{{events}}</h3>
    </div>
  </div>
</template>
<style scoped>
.event {
  width: 100%;
  height: 100%;
}
.event__els {
  display: flex;
  justify-content: center;
  width: 40%;
}
.event__picture {
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-image: url(../assets/img/assets-components/Explorations/boatWreck.png);
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 25px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
}
.event__title {
  display: flex;
  justify-content: center;
  width: max-content;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
</style>

<script>
import data from "../json/user.json";
export default {
  data() {
    return {
      events: data.events
    };
  }
};
</script>
