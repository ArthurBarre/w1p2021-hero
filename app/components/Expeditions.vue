<template>
  <div class="expedition__box">
    <h3>Expéditions de demain</h3>
    <br>
    <p
      class="expedition__explications"
    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    <br>
    <p class="expedition__question">Quelle expédition veux-tu réaliser ?</p>
    <div class="expeditions">
      <Expedition
        class="one"
        v-for="expedition in 2"
        :key="expedition"
        v-bind:expedition="expedition"
      ></Expedition>
      <Expedition
        class="two"
        v-for="expedition in 2"
        :key="expedition"
        v-bind:expedition="expedition"
      ></Expedition>
    </div>
    <div class="expedition__directions template">
      <span class="expedition__directions--prev">prev</span>
      <span class="expedition__directions--next">next</span>
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
  margin-top: 90px;
  font-family: sans-serif;
}
h3 {
  margin-left: 10px;
}
.expedition__directions {
  transform: translateY(-100px);
  .expedition__directions--next {
    float: right;
    margin-right: 20px;
  }
  .expedition__directions--prev {
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
