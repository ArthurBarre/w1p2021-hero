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
          <Expedition
            class="one"
            v-for="expedition in 4"
            :key="expedition"
            v-bind:expedition="expedition"
          ></Expedition>
        </div>
        <div class="directions template">
          <router-link class="directions--prev" to="/game/Ressources">prev</router-link>
          <router-link class="directions--next" to="/game/Craft">next</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
.expeditions {
  display: flex;
  flex-direction: row;
  width: 80%;
  flex-wrap: wrap;
  .one {
    flex-wrap: wrap;
  }
  .two {
    transform: translateX(-120px) translateY(-148px);
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
  .directions--prev {
    float: left;
    bottom: 0;
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
