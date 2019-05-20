<template>
  <div>
    <!-- <button @click="test">zaza</button> -->
    <Inventary/>
  </div>
</template>



<style lang="scss" scoped>
.game__container {
  font-family: sans-serif;
  display: flex;
  width: 1366px;
  height: 750px;
  background-image: url(../assets/img/Fonds/Game.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
.game__main {
  display: flex;
  width: 710px;
  height: 710px;
  background-color: white;
  opacity: 0.9;
}
.game__buttons {
  width: max-content;
  display: flex;
  align-items: flex-end;
}
.day {
  width: 710px;
  position: absolute;
  display: inline;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
}
</style>


<script>
import Recaps from "../components/Recaps.vue";
import Ressources from "../components/Ressources.vue";
import Inventary from "../page/Inventary.vue";
import data from "../json/expeditions.json";
export default {
  data: function() {
    return {
      day: "Day 1",
      visitBoatWreckOk: data.events.visitBoatWreck.stateOk,
      exploreAroundOk: data.events.exploreAround.stateOk,
      exploreIslandSummitOk: data.events.exploreIslandSummit.stateOk,
      exploreIslandCenterOk: data.events.exploreIslandCenter.stateOk,
      fishOk: data.events.fish.stateOk,
      waterOk: data.events.water.stateOk
    };
  },
  methods: {
    test() {
      console.log(this.visitBoatWreckOk);
    }
  },

  components: {
    Recaps,
    Ressources,
    Inventary
  }
};
</script>
