<template>
  <div id="app">
    <!-- <inventoryChild
      v-for="data in myJson"
      v-bind:key="data.id"
      v-bind:text="data.text"
      v-bind:id="data.id"
    />-->
    <!-- <div>hache</div>
    <br>
    <div>pieces de tissus</div>-->
    <br>
    <button @click="mounted">ghghyg</button>

    <div v-if="saveNumber === 1">canne à pêche</div>
    <br>
    <!-- <div>eau</div>
    <br>
    <div>nourriture</div>
    <br>
    <div>ficelles</div>
    <br>
    <div>bois</div>
    <br>
    <div>planche</div>-->
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