<template>
  <div class="event__box">
    <h3>Expéditions de demain</h3>
    <br>
    <p
      class="event__explications"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    <br>
    <p class="event__question">Quelle expédition veux-tu réaliser ?</p>
    <div class="expeditions">
      <Expedition class="one" v-for="event in 2" :key="event" v-bind:event="event"></Expedition>
      <Expedition class="two" v-for="event in 2" :key="event" v-bind:event="event"></Expedition>
    </div>
    <div class="event__directions template">
      <span class="event__directions--prev">prev</span>
      <span class="event__directions--next">next</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.expeditions {
  width: 100%;
  transform: translateY(-40px);
  .one {
    transform: translateX(120px);
  }
  .two {
    transform: translateX(-120px) translateY(-108px);
  }
}
.event__question {
  margin-left: 40px;
  margin-top: 10px;
}
.event__explications {
  margin-left: 10px;
  padding: 2%;
  margin-top: 10px;
}
.event__box {
  margin-top: 90px;
  font-family: sans-serif;
}
h3 {
  margin-left: 10px;
}
.event__directions {
  transform: translateY(-100px);
  .event__directions--next {
    float: right;
    margin-right: 20px;
  }
  .event__directions--prev {
    float: left;
    margin-left: 20px;
  }
}
</style>

<script>
import Expedition from "./Expedition.vue";
export default {
  components: {
    Expedition
  }
};
</script>
