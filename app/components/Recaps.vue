<template>
  <div class="game__container">
    <div class="game__main">
      <div class="recap">
        <div>
          <h1>Jour {{day}}</h1>
          <VitalSituation class="recap__vs"></VitalSituation>
          <p></p>
        </div>
        <div>
          <div class="directions template">
            <router-link class="directions--prev" to="/game/Craft"></router-link>
            <router-link class="directions--next" to="/game/Ressources"></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test-btn {
  width: max-content;
}
h1 {
  font-size: 100px;
  width: max-content;
  margin: 0 auto;
  margin-bottom: 100px;
}
body {
  overflow: hidden;
}
.game__container {
  font-family: sans-serif;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/Fonds/Game.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
.game__main {
  display: flex;
  width: 710px;
  height: 710px;
  background-image: url(../assets/img/assets-components/PaperFond.png);
  opacity: 0.9;
}
.recap {
  display: flex;
  height: 710px;
  width: 710px;
  flex-direction: column;
  transform: translateY(100px);
  margin: 0 auto;
}
.recap > div {
  align-items: space-around;
  height: 120px;
}
.directions {
  width: 710px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 110px;
  height: 90px;
  .directions--next {
    transform: translateX(100px);
  }
  .directions--next::after {
    content: url(../assets/img/assets-components/ArrowRight.png);
  }
  .directions--prev {
    transform: translateX(-100px);
  }
  .directions--prev::after {
    content: url(../assets/img/assets-components/ArrowLeft.png);
  }
}
</style>

<script>
import VitalSituation from "../components/VitalSituation.vue";
import ExpeditionResult from "../components/ExpeditionResult.vue";
import user from "../json/user.json";
import dayService from "../services/dayService";
import healthService from "../services/healthService";

export default {
  data() {
    return {
      health: healthService.checkHealth(),
      day: dayService.test()
    };
  },
  components: {
    VitalSituation,
    ExpeditionResult
  },
  mounted() {
    console.log("health from recap : " + this.health);
  }
};
</script>