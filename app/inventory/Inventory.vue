<template>
  <div id="app">
    <!-- <inventoryChild
      v-for="data in myJson"
      v-bind:key="data.id"
      v-bind:text="data.text"
      v-bind:id="data.id"
    />-->
    <!-- 
    <br>-->

    <!-- <div v-if="saveNumber === 6">canne à pêche</div> -->
    <div class="island__center__inventory" v-if="saveNumber === 3"></div>
    <!-- <div class="food" v-else-if="saveNumber === 3"></div> -->
    <article class="boat__wreck__inventory" v-else-if="saveNumber === 4">
      <div class="string__inventory"></div>
      <div class="fabric__inventory"></div>
    </article>
    <div class="island__summit__inventory" v-else-if="saveNumber"></div>
    <div v-else-if="saveNumber === 2">bois</div>
    <div v-else-if="saveNumber === 1">planche</div>
    <!-- <router-link to="/game/Craft">Craft</router-link> -->
  </div>
</template>

<script>
import inventoryChild from "./inventoryChild.vue";
import json from "../json/inventory.json";
import expeditionsChoicesService from "../services/expeditionsChoicesService";

export default {
  name: "app",
  data() {
    return {
      myJson: json,
      saveNumber: null
    };
  },
  components: {
    inventoryChild
  },
  methods: {},
  mounted() {
    this.saveNumber = expeditionsChoicesService.expeditionSave();
  }
};
</script>

<style lang='scss' scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.island__summit__inventory {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/assets-components/items/itemsFloor/axeFloor.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.island__center__inventory {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/assets-components/items/itemsFloor/waterFloor.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.boat__wreck__inventory {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
}
.string__inventory {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/assets-components/items/itemsFloor/stringFloor.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.fabric__inventory {
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/assets-components/items/itemsFloor/fabricFloor.png");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>