<template>
  <div class="game__container">
    <div class="aside">
      <img class="logo" src="../assets/img/assets-components/LogoBig.png" alt="Logo">
      <img
        class="sound"
        src="../assets/img/assets-components/soundOff.png"
        alt="Turn the sound off"
      >
    </div>

    <div class="game__main">
      <div class="main__content">
        <h1>Jour {{day}}</h1>
        <div class="content__recap">
          <!-- <RecapExpedition></RecapExpedition> -->
          <ExpeditionResults/>

          <br>
          <!-- <RecapCraft></RecapCraft> -->
          <br>
          <!-- <VitalSituation class="recap recap__vs"></VitalSituation> -->
        </div>
      </div>
      <div class="directions">
        <router-link class="direction direction--prev" to="/game/characters"></router-link>
        <router-link class="direction direction--next" to="/game/Ressources"></router-link>
      </div>
    </div>
    <aside>Une collaboration d'Arthur Barré & Kalani Marquand</aside>
  </div>
</template>


<style lang="scss" scoped>
* {
  font-family: "Neucha", cursive;
  color: var(--brand-color);
  letter-spacing: 2px;
  font-size: 20px;
  line-height: 1.1;
}
h1 {
  font-size: 90px;
  width: 510px;
  margin: 10% auto auto;
  text-align: center;
}
.game__container {
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
  margin: auto auto;
  width: 710px;
  height: 710px;
  margin-top: 4%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(../assets/img/assets-components/PaperFond.png);
}
.content__recap {
  max-width: 600px;
}
.recap {
  padding-top: 4%;
}
.direction--next::after {
  position: absolute;
  right: 32%;
  bottom: 13%;
  content: url(../assets/img/assets-components/ArrowRight.png);
}
.direction--prev::after {
  position: absolute;
  left: 32%;
  bottom: 13%;
  content: url(../assets/img/assets-components/ArrowLeft.png);
}
.aside {
  position: absolute;
  right: 15%;
  top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  width: 150px;
}
.sound {
  width: 50px;
  margin-top: 20%;
}
aside {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
}
</style>

<script>
import VitalSituation from "../components/VitalSituation.vue";
import ExpeditionResults from "../expeditions/ExpeditionResults.vue";
import user from "../json/user.json";
import dayService from "../services/dayService";
import healthService from "../services/healthService";

export default {
  data() {
    return {
      health: null,
      day: null
    };
  },
  components: {
    VitalSituation,
    ExpeditionResults
  },
  mounted() {
    this.health = healthService.testHealth();
    console.log("health from recap : " + this.health);
    this.day = dayService.test();
  }
};
</script>