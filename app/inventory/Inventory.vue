<template>
  <div id="app">
    <inventoryChild
      v-for="(item, index) in items"
      v-bind:key="index"
      :inventoryChild="inventoryChild"
      ref="item"
    />
  </div>
</template>

<script>
import inventoryChild from "./inventoryChild.vue";
import json from "../json/inventory.json";
import expeditionsService from "../services/expeditionsService";

export default {
  name: "app",
  data() {
    return {
      items: expeditionsService.listItems(),
      item: null,
    };
  },
  components: {
    inventoryChild
  },
  beforeMount() {
  },
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