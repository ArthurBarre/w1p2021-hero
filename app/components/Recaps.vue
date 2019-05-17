<template>
<div class="game__container">
    <div class="game__main">
  <div class="recap">
    <div>
            <h1>Jour {{count}}</h1>
      <VitalSituation class="recap__vs"></VitalSituation>

    </div>
  
    <div>
      <div class="ressources__directions template">
        <router-link class="ressources__directions--prev" to="/game/Craft">prev</router-link>
        <router-link class="ressources__directions--next" to="/game/Ressources">next</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
  font-size: 100px;
  width: max-content;
  margin: 0  auto;
  margin-bottom: 100px;
}
.game__container {
  font-family: sans-serif;
  display: flex;
  width: 1366px;
  height: 750px;
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
.recap {
  display: flex;
  height: 640px;
  width: 680px;
  flex-direction: column;
  transform: translateY(100px);
  margin: 0 auto;
}
.recap > div {
  align-items: space-around;
  height: 120px;
}
.ressources__directions {
  height: 90px;
  margin-top: 200px;
  .ressources__directions--next {
    float: right;
    margin-right: 20px;
  }
  .ressources__directions--prev {
    float: left;
    bottom: 0;
    margin-left: 20px;
  }
}
</style>

<script>
import VitalSituation from "../components/VitalSituation.vue";
import ExpeditionResult from "../components/ExpeditionResult.vue";
import user from "../json/user.json";
import countService from "../services/countService.js";
import waterQuantity from '../services/waterQuantity.js';
import foodProgress from '../services/foodProgress.js';



export default {

  data() {
    return {
      count: countService.value(),
      foodProgress: foodProgress.value(),
      waterQuantity: foodProgress.value()
    }
  },
  components: {
    VitalSituation,
    ExpeditionResult
  },
  mounted() {
    console.log(this.foodProgress);
    console.log(this.waterQuantity);
  },
};
</script>