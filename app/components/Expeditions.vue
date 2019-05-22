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
      <h1>Jour {{day}}</h1>

      <div class="main__content">
        <div class="content__recap">
          <p class="recap">
            Maintenant que j’ai du temps libre, je devrais peut-être l’utiliser pour explorer un peu les environs.
            <br>
            <br>J’ai tout de même peur de me perdre dans cette jungle dense.
          </p>
          <br>
          <p class="recap--question">Aller explorer demain ?</p>
        </div>

        <div class="expeditions">
          <br>
          <div @click="exploreIslandSummit" v-if="exploreIslandSummitOk">sommet de l'île</div>
          <br>
          <div @click="exploreIslandCenter" v-if="exploreIslandCenterOk">centre de l'ile</div>
          <br>
          <div @click="exploreBoatWreck" v-if="exploreBoatWreckOk">épave du bateau</div>
          <br>
          <div @click="exploreAround" v-if="exploreAroundOk">le tour de l'île maggle</div>
          <br>
          <div v-if="fishOk">aller pêcher des petits poissons</div>
          <br>
          <div v-if="waterOk">aller chercher de l'eau par ce que dans 10 ans y'en aura plus</div>
        </div>
        <div class="directions">
          <router-link class="direction direction--prev" to="/game/Ressources"></router-link>
          <router-link class="direction direction--next" to="/game/Craft"></router-link>
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
import data from "../json/expeditions.json";
import healthService from "../services/healthService";
import expeditionsChoicesService from "../services/expeditionsChoicesService";
import dayService from "../services/dayService";
export default {
  data: function() {
    return {
      day: dayService.test(),
      health: healthService.testHealth(),
      exploreIslandSummitOk: data.events.exploreIslandSummit.stateOk,
      exploreIslandSummitAction: data.events.exploreIslandSummit.stateAction,
      exploreBoatWreckOk: data.events.exploreBoatWreck.stateOk,
      exploreBoatWreckAction: data.events.exploreBoatWreck.stateAction,
      exploreIslandCenterOk: data.events.exploreIslandCenter.stateOk,
      exploreIslandCenterAction: data.events.exploreIslandCenter.stateAction,
      exploreAroundAction: data.events.exploreAround.stateAction,
      exploreAroundOk: data.events.exploreAround.stateOk,
      fishOk: data.events.fish.stateOk,
      waterOk: data.events.water.stateOk
    };
  },
  methods: {
    exploreIslandSummit() {
      this.exploreIslandSummitAction = expeditionsChoicesService.islandSummitActionData();
      this.exploreIslandSummitOk = expeditionsChoicesService.islandSummitOkData();
      console.log("new island summit StateOk =" + this.exploreIslandSummitOk);
      console.log(
        "new island summit StateAction =" + this.exploreIslandSummitAction
      );
    },
    exploreIslandCenter() {
      this.exploreIslandCenterOk = expeditionsChoicesService.exploreIslandCenterOkData();
      this.exploreIslandCenterAction = expeditionsChoicesService.exploreIslandCenterActionData();
      console.log("new island center StateOk =" + this.exploreIslandCenterOk);
      console.log("new island center =" + this.exploreIslandCenterAction);
    },
    exploreBoatWreck() {
      this.exploreBoatWreckOk = expeditionsChoicesService.exploreBoatWreckOkData();
      this.exploreBoatWreckAction = expeditionsChoicesService.exploreBoatWreckActionData();
      console.log("new boat StateOk = " + this.exploreBoatWreckOk);
      console.log("new boat stateAction= " + this.exploreBoatWreckAction);
    },
    exploreAround() {
      this.exploreAroundOk = expeditionsChoicesService.exploreAroundOkData();
      this.exploreAroundAction = expeditionsChoicesService.exploreAroundActionData();
      console.log("new explore around StateOk =" + this.exploreAroundOk);
      console.log(
        "new explore around StateAction =" + this.exploreAroundAction
      );
    }
  }
};
</script>