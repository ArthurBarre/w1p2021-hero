<template>
  <div class="game__container">
    <div class="game__main">
      <div class="ressources">
        
        <h2 class="ressources__title">Ressource</h2>
        <div class="ressources__food template">
          <div class="food__wrapper"><ItemFood v-for="Food in foodQuantity" :key="Food" v-bind:Food="Food"><Item
      Food/></div>
          
        </div>
        <div class="ressources__water template">
          <div class="water__wrapper"><ItemWater v-for="Water in waterQuantity" :key="Water" v-bind:Water="Water"><ItemWater/></div>
         
        </div>
        <div class="ressources__buttons">
          <div class="ressources__buttons--food" @click="eat">
            <ItemFood/>
            <p>{{foodQuantity}}</p>
          </div>
          <div class="ressources__buttons--water" @click="drink">
            <ItemWater/>
            <p>{{waterQuantity}}</p>
          </div>
        </div>
        <div class="directions template">
          <router-link class="directions--prev" to="/game/Recap"></router-link>
          <router-link class="directions--next" to="/game/Expeditions"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
body {
}
.food__wrapper{
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-bottom: 10px;
}
.water__wrapper{
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-bottom: 10px;
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
.size {
  width: 100px;
  height: 100px;
}
.ressources {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
}
.template {
  width: 100%;
}
.ressources__title {
  float: left;
  font-size: 20px;
  margin: 60px 0 30px 50px;
}
.directions {
  z-index: 1;
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
.ressources__food {
  width: 80%;
  height: 120px;
  background-color: grey;
  transform: translateX(40px);
}
.ressources__water {
  width: 80%;
  height: 100px;
  margin-top: 20px;
  background-color: blue;
  transform: translateX(40px);
}
.ressources__buttons {
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 0 auto;
}

.ressources__buttons--food {
  margin-right: 30px;
}
.ressources__buttons > * {
  transform: scale(1.5);
}
</style>

<script>
import Foods from "./Foods.vue";
import Waters from "./Waters.vue";
import ItemFood from "../items/ItemFood.vue";
import ItemWater from "../items/ItemWater.vue";
import ressourcesService from '../services/ressourcesService.js';
import thirstService from '../services/thirstService.js';
import hungerService from '../services/hungerService.js';
import healthService from "../services/healthService";

import user from "../json/user.json";

export default {
  data: function() {
    return {
      waterQuantity: ressourcesService.valueWaterQuantity(),
      foodQuantity: ressourcesService.valueFoodQuantity(),
      health: healthService.checkHealth()
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
      this.health = healthService.checkHealth(),
      console.log('waterQuantity : '+ressourcesService.valueFoodQuantity());
      console.log("health from drinking : " + this.health);
    },
    eat: function() {
      ressourcesService.decrementFood();
      hungerService.eat();
      this.health = healthService.checkHealth(),
      console.log('fp: '+hungerService.valueHunger())
      console.log('foodQuantity : '+ressourcesService.valueFoodQuantity());
      console.log("health from eating : " + this.health);
    }
  },mounted(){
    console.log("health from ressources : " + this.health);
  }
};
</script>