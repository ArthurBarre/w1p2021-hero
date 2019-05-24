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
      <h1 class="day">Jour {{day}}</h1>

      <div class="main__content">
        <div class="content__recap">
          <p
            class="recap"
          >Il est temps pour moi de prendre mon destin en main. Je dois me fabriquer des objets pour me nourrir et pourquoi pas sortir de cette île...</p>
          <br>
          <p class="recap--question">Qu’est ce que je peux construire ?</p>
        </div>

        <!-- Faire un component supplémentaire dont le template correspond au craft__wrapper -->
        <p class="craft__questions">Voulez vous faire un craft ?</p>
        <div class="craft__wrapper">
          <div class="firstEl element"></div>
          <span class="more">+</span>
          <div class="secondEl element"></div>
          <span class="equal">=</span>
          <div class="resultEl element"></div>
        </div>
        <div class="directions">
          <div v-if="this.health!=0">
            <router-link class="directions--next" to="/game/Recap"></router-link>
          </div>
          <div v-else-if="this.health===0">
            <router-link class="directions--next" to="/game/Loose"></router-link> 
          </div>
        </div>
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
  margin: 10% 0 2% 0;
  text-align: center;
}
.game__container {
  background-image: url(../assets/img/Fonds/Game.jpg);
  display: flex;
  width: 100vw;
  height: 100vh;
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
.craft__wrapper {
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 5%;
  width: 600px;
  height: 200px;
  padding-top: 2%;
  justify-content: space-evenly;
}
.element {
  background-color: red;
  width: 100px;
  height: 100px;
}

  .directions--next::after {
    position: absolute;
    right: 23%;
    bottom: 5%;
    content: url(../assets/img/assets-components/ArrowRight.png);  
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
.day{
  font-size: 59px;
}
</style>

<script>

import dayService from "../services/dayService.js";
import healthService from "../services/healthService.js";
import expeditionsService from "../services/expeditionsService.js";

export default {
  data: function() {
    return {
      //Resssources data
      day: null,
      health: null
    };
  },
  mounted() {
    this.day = dayService.test();
    healthService.meal();
    this.health = healthService.healthValue();
  },
};
</script>
