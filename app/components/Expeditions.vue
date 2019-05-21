<template>
  <div class="game__container">
    <div class="game__main">
      <div class="expedition__box">
        <h3>Expéditions de demain</h3>
        <br>
        <p
          class="expedition__explications"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <br>
        <p class="expedition__question">Quelle expédition veux-tu réaliser ?</p>
        <div class="expeditions">
          <div @click="exploreIslandSummit" v-if="exploreIslandSummitOk">sommet de l'île</div>

          <div @click="exploreIslandCenter" v-if="exploreIslandCenterOk">centre de l'ile</div>

          <!-- <div @click="exploreAround" v-if="exploreAroundOk">le tour de l'île maggle</div> -->

          <!-- <div @click="visitBoatWreck" v-if="visitBoatWreckOk">épave du bateau</div> -->

          <!-- <div @click="fish" v-if="fishOk">aller pêcher des petits poissons</div> -->
          <!-- <div>aller chercher de l'eau par ce que dans 10 ans y'en aura plus</div> -->
          <button @click="test">test</button>
        </div>
        <div class="directions template">
          <router-link class="directions--prev" to="/game/Ressources"></router-link>
          <router-link class="directions--next" to="/game/Craft"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
.expeditions {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
}
.expeditions > div {
  margin-top: 20px;
}
.expedition__question {
  margin-left: 40px;
  margin-top: 10px;
}
.expedition__explications {
  margin-left: 10px;
  padding: 2%;
  margin-top: 10px;
}
.expedition__box {
  width: 100%;
  font-family: sans-serif;
}
h3 {
  margin-left: 10px;
}
.directions {
  width: 710px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 50px;
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
import data from "../json/test.json";
import healthService from "../services/healthService";
import expeditionsService from "../services/expeditionsService";
export default {
  data: function() {
    return {
      health: healthService.checkHealth(),
      // visitBoatWreckOk: true,
      // exploreAroundOk: true,
      exploreIslandSummitOk: expeditionsService.islandSummitOkData(),
      exploreIslandSummitAction: expeditionsService.islandSummitActionData(),
      exploreIslandCenterOk: true
      // fishOk: false,
      // waterOk: false
    };
  },
  methods: {
    exploreIslandSummit() {
      expeditionsService.islandSummitFunction();
    },
    exploreAround() {
      this.exploreAroundOk = false;
    },
    exploreIslandCenter() {
      this.exploreIslandCenterOk = false;
    },
    visitBoatWreck() {
      this.visitBoatWreckOk = false;
    },
    test() {
      console.log(this.exploreIslandSummitOk);
      console.log(this.exploreIslandSummitAction);
    }
  },
  mounted() {
    console.log("health from expe" + this.health);
  }
};
</script>
