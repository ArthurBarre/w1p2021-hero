<template>
  <div class="game__container">
    <div class="game__main">
      <div class="craft__box">
        <h3>Construction</h3>
        <button class="button__ressource">le test</button>
        <button class="button">faim</button>
        <button class="button">Test 2</button>
        <p
          class="craft__explications"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi sapiente. Expedita sequi quisquam, repudiandae vel deserunt cum similique iste eaque animi, eos ipsum at qui reprehenderit pariatur architecto accusantium.</p>
        <br>
        <p class="craft__questions">Voulez vous faire un craft ?</p>
        <div class="craft__wrapper">
          <div class="firstEl element"></div>
          <span class="more">+</span>
          <div class="secondEl element"></div>
          <span class="equal">=</span>
          <div class="resultEl element"></div>
        </div>
        <div class="directions template">
          <div></div>
          <router-link class="directions--prev" to="/game/Expedition"></router-link>

          <div @click="presets" v-if="this.health!=0">
            <router-link class="directions--next" to="/game/Recap"></router-link>
          </div>
          <div @click="presets" v-else-if="this.health===0">
            <router-link class="directions--next" to="/game/Loose"></router-link>
          </div>
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
  width: 710px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  bottom: 120px;
  height: 90px;
  .directions--next::after {
    content: url(../assets/img/assets-components/ArrowRight.png);
  }
  .directions--prev {
    transform: translateX(-240px);
  }
  .directions--prev::after {
    content: url(../assets/img/assets-components/ArrowLeft.png);
  }
}
.directions--next {
  transform: translateX(-200px);
}
</style>

<script>
import user from "../json/user.json";
import thirstService from "../services/thirstService";
import hungerService from "../services/hungerService";
import dayService from "../services/dayService";
import healthService from "../services/healthService";

export default {
  data: function() {
    return {
      //Resssources data
      day: dayService.test(),
      thirstLevel: thirstService.valueThirst(),
      hungerLevel: hungerService.valueHunger(),
      health: healthService.checkHealth()
    };
  },
  methods: {
    // water
    thirst() {
      thirstService.decrement();
      this.thirstLevel = thirstService.valueThirst();
      console.log(this.thirstLevel);
    },
    // Food
    hunger() {
      hungerService.decrement();
      this.hungerLevel = hungerService.valueHunger();
    },
    // Day Counter
    dayPassed() {
      this.day = dayService.increment();
    },
    healthFunction() {
      healthService.checkHealth();
    },
    //set health
    presets() {
      this.thirst();
      this.hunger();
      this.dayPassed();
      this.healthFunction();
    }
  },
  mounted: function() {
    console.log("health from craft : " + this.health);
  }
};
</script>
