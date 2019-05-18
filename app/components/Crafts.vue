<template>
  <div class="game__container">
    <div class="game__main">
      <div class="craft__box">
        <h3>Construction</h3>
        <p
          class="craft__explications"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi sapiente. Expedita sequi quisquam, repudiandae vel deserunt cum similique iste eaque animi, eos ipsum at qui reprehenderit pariatur architecto accusantium.</p>
        <br>
        <p>{{count}}</p>
        <p class="craft__questions">Voulez vous faire un craft ?</p>
        <div class="craft__wrapper">
          <div class="firstEl element"></div>
          <span class="more">+</span>
          <div class="secondEl element"></div>
          <span class="equal">=</span>
          <div class="resultEl element"></div>
        </div>
        <div class="directions template">
          <router-link class="directions--prev" to="/game/Expedition"></router-link>
          <button @click="day" class="button">La muerte pour le jour prochain</button>
          <div v-if="health!=0">
            <router-link class="directions--next" to="/game/Recap"></router-link>
          </div>
          <div v-else="health=0">
            <router-link class="directions--next" to="/game/Loose"></router-link>
          </div>
          <button @click="ressourceChanged" class="button__ressource">ressources-1</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.button {
  transform: translateX(250px) translateY(200px);
}
.button__ressource {
  transform: translateX(280px) translateY(310px);
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
.craft__box {
  margin-top: 90px;
}
.craft__questions {
  margin-left: 40px;
  margin-top: 10px;
}
.craft__explications {
  margin-left: 10px;
  padding: 2%;
  margin-top: 10px;
}
h3 {
  margin-left: 10px;
}
.element {
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 1000px;
}
.craft__wrapper {
  width: 60%;
  margin: 0 auto;
  transform: translateX(55px) translateY(60px);
}
.craft__wrapper > * {
  display: inline-block;
  vertical-align: middle;
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
import user from "../json/user.json";
import countService from "../services/countService.js";
import foodProgress from "../services/foodProgress.js";
import waterProgress from "../services/waterProgress.js";
import healthServices from "../services/healthServices";
export default {
  data() {
    return {
      count: countService.value(),
      health: healthServices.value(),
      //Resssources data
      foodLife: user.foodLife,
      waterLife: user.waterLife,
      foodProgress: foodProgress.value(),
      waterProgress: waterProgress.value()
    };
  },
  methods: {
    // Day Counter
    dayPassed() {
      countService.increment();
    },
    day() {
      foodProgress.change();
      waterProgress.change();
      healthServices.check();
      countService.increment();
    },
    checkHealth() {
      console.log(health);
    },
    mounted() {
      // checkHealth();
    }
  }
};
</script>
