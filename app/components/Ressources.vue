<template>
  <div class="game__container">
    <div class="game__main">
      <div class="ressources">
        <h2 class="ressources__title">Ressources</h2>
        <div class="ressources__food template">
          <Foods/>
          <p>{{waterProgress}}</p>
        </div>
        <div class="ressources__water template">
          <Waters/>
        </div>
        <div class="ressources__buttons">
          <div class="ressources__buttons--food" @click="feed">
            <ItemFood/>
            <h2></h2>
          </div>
          <div class="ressources__buttons--water" @click="drink">
            <ItemWater/>
            <h2></h2>
          </div>
        </div>
        <div class="directions template">
          <router-link class="directions--prev" to="/game/Recap">prev</router-link>
          <router-link class="directions--next" to="/game/Expeditions">next</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
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
  margin: 60px 0 30px 15px;
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
.ressources__food {
  height: 120px;
  background-color: grey;
}
.ressources__water {
  height: 100px;
  background-color: blue;
}
.ressources__buttons {
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
import user from "../json/user.json";
import feedService from "../services/feedService";
export default {
  data: function() {
    return {
      waterProgress: feedService.quantityFoodValue(),
      foodQuantity: user.foodQuantity,
      waterLife: user.waterLife,
      foodLife: user.foodLife

      // waterProgress: user.waterProgress,
      // foodQuantity: user.foodQuantity,
      // waterLife: user.waterLife,
      // foodLife: user.foodLife
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
      this.waterProgress--;
      this.waterLife = 4;
      console.log("waterProgress" + this.waterProgress);
      console.log("waterProgress" + this.waterProgress);
    },
    feed: function() {
      this.foodQuantity--;
      this.foodLife = 4;
      console.log("foodQuantity" + this.foodQuantity);
      console.log("foodLife" + this.foodLife);
    }
  }
};
</script>