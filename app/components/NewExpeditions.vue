<template>
  <div id="app">
    <square
      @click="selectExpedition"
      v-for="data in myJson"
      v-bind:key="data.text"
      v-bind:text="data.text"
      v-bind:size="data.size"
      v-bind:id="data.id"
    />
  </div>
</template>

<script>
import square from "./square.vue";
import json from "../json/test.json";

export default {
  name: "app",
  data() {
    return {
      myJson: json
    };
  },
  components: {
    square
  },
  methods: {
    selectExpedition: function(event) {
      targetId = event.currentTarget.text;
      console.log(TargetId); // returns 'foo'
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