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
      <div class="content__scale">
        <div class="ressources">
          <div class="ressource food">
            <Foods/>
          </div>
          <div class="ressource water">
            <Waters/>
          </div>
        </div>

        <div class="buttons">
          <div class="quantities foodQuantity">
            <p class="quantity">{{foodQuantity}}</p>
          </div>
          <div class="button button--food" @click="eat">
            <ItemFood/>
            <!-- <p>{{foodQuantity}}</p> -->
          </div>
          <div class="quantities waterQuantity">
            <p class="quantity">{{waterQuantity}}</p>
          </div>
          <div class="button button--water" @click="drink">
            <ItemWater/>
            <!-- <p>{{waterQuantity}}</p> -->
          </div>
        </div>
      </div>
      <div class="directions">
        <router-link class="direction direction--prev" to="/game/recap"></router-link>
        <router-link class="direction direction--next" to="/game/Expeditions"></router-link>
      </div>
    </div>
    <aside>Une collaboration d'Arthur Barré & Kalani Marquand</aside>
  </div>
</template>

<style  lang="scss" scoped>
* {
  font-family: "Neucha", cursive;
  color: var(--brand-color);
  letter-spacing: 2px;
}
h1 {
  font-size: 90px;
  margin: 10% 0 2% 0;
  text-align: center;
}
.game__container {
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
  margin: auto auto;
  width: 710px;
  height: 710px;
  margin-top: 4%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(../assets/img/assets-components/PaperFond.png);
}
.buttons {
  position: relative;
  display: flex;
  padding-top: 5%;
  width: 400px;
  justify-content: space-evenly;
}
.quantities {
  position: absolute;
  text-align: center;
  border-radius: 50%;
  background-color: white;
  width: 25px;
  height: 25px;
}
.quantity {
  font-size: 20px;
  margin-top: 20%;
}
.foodQuantity {
  left: 10%;
}
.waterQuantity {
  left: 55%;
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
import Foods from "./Foods.vue";
import Waters from "./Waters.vue";
import ItemFood from "../items/ItemFood.vue";
import ItemWater from "../items/ItemWater.vue";
import ressourcesService from "../services/ressourcesService.js";
import thirstService from "../services/thirstService.js";
import hungerService from "../services/hungerService.js";
import healthService from "../services/healthService";
import dayService from "../services/dayService";
import user from "../json/user.json";

export default {
  data: function() {
    return {
      day: null,
      waterQuantity: null,
      foodQuantity: null,
      thirstLevel: null,
      hungerLevel: null
    };
  },
  components: {
    Foods,
    Waters,
    ItemWater,
    ItemFood
  },
  methods: {
    drink: function() {
      ressourcesService.decrementWater();
      thirstService.drink();
      this.waterQuantity--;
      console.log("waterQuantity : " + ressourcesService.valueFoodQuantity());
      console.log("health from drinking : " + this.health);
    },
    eat: function() {
      ressourcesService.decrementFood();
      hungerService.eat();
      this.foodQuantity--;
      console.log("foodQuantity : " + ressourcesService.valueFoodQuantity());
      console.log("health from eating : " + this.health);
    }
  },
  mounted() {
    this.waterQuantity = ressourcesService.valueWaterQuantity();
    this.foodQuantity = ressourcesService.valueFoodQuantity();
    this.day = dayService.test();
  }
};
</script>