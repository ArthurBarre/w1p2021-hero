<template>
  <div class="game__container">
    <div class="game__main">
      <h1 class="day">{{day}}</h1>
      <Recaps/>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.game__container {
  font-family: sans-serif;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/test.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
.game__main {
  display: flex;
  width: 680px;
  height: 640px;
  background-color: white;
  opacity: 0.9;
}
.game__buttons {
  width: max-content;
  display: flex;
  align-items: flex-end;
}
.day {
  width: 680px;
  position: absolute;
  display: inline;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>


<script>
import Recaps from "../components/Recaps.vue";

export default {
  data: function() {
    return {
      day: "Day 1"
    };
  },

  components: {
    Recaps
  }
};
</script>
