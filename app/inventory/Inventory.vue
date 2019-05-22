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

    <button @click="mounted">ghghyg</button>

    <!-- <div v-if="saveNumber === 6">canne à pêche</div> -->
    <div v-if="saveNumber === 3">le point d'eau maggle</div>
    <div v-else-if="saveNumber === 3">nourriture</div>
    <div v-else-if="saveNumber === 4">
      <div>ficelles</div>
      <div>pieces de tissus</div>
    </div>
    <div v-else-if="saveNumber === 4"></div>
    <div v-else-if="saveNumber === 1">hache</div>
    <div v-else-if="saveNumber === 2">bois</div>
    <!-- <div v-else-if="saveNumber === 1">planche</div> -->
    <div>
      <br>
      <br>
      <br>
      <br>
      <router-link to="/game/Craft">Craft</router-link>
    </div>
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
      saveNumber: Number
    };
  },
  components: {
    inventoryChild
  },
  methods: {
    mounted() {
      this.saveNumber = expeditionsChoicesService.expeditionSave();
    }
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
</style>