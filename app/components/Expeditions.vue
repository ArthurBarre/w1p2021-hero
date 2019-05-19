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
          <!-- <Expedition
            class="one"
            v-for="expedition in 2"
            :key="expedition"
            v-bind:expedition="expedition"
          ></Expedition>-->
          <div v-bind:src="summitSrc" v-if="exploreIslandSummitOk">sommet de l'île</div>

          <div v-if="exploreIslandCenterOk">centre de l'ile</div>

          <div v-if="exploreAroundOk">le tour de l'île maggle</div>

          <div v-if="visitBoatWreckOk">épave du bateau</div>

          <div v-if="fishOk">aller pêcher des petits poissons</div>
          <div v-if="waterOk">aller chercher de l'eau par ce que dans 10 ans y'en aura plus</div>
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
  height: 90px;
  .directions--next {
    float: right;
    margin-right: 20px;
  }
  .directions--next::after {
    content: url(../assets/img/assets-components/ArrowRight.png);
  }
  .directions--prev {
    float: left;
    bottom: 0;
    margin-left: 20px;
  }
  .directions--prev::after {
    content: url(../assets/img/assets-components/ArrowLeft.png);
  }
}
</style>

<script>
import expeditionProgress from "../services/expeditionProgress.js";
import data from "../json/expeditions.json";
export default {
  data: function() {
    return {
      day: "Day 1",
      visitBoatWreckOk: data.events.visitBoatWreck.stateOk,
      exploreAroundOk: data.events.exploreAround.stateOk,
      exploreIslandSummitOk: data.events.exploreIslandSummit.stateOk,
      exploreIslandCenterOk: data.events.exploreIslandCenter.stateOk,
      fishOk: data.events.fish,
      waterOk: data.events.water,
      summitSrc: data.events.exploreIslandSummit.src
    };
  },
  methods: {
    test() {
      console.log(this.waterOk);
    }
  }
};
</script>
