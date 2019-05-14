<template>
  <div class="game__text--content">
    <Recap class="paragraph" v-for="data in myJson" v-bind:key="data.text" v-bind:text="data.text"></Recap>
  </div>
</template>

<style scoped>
.game__text--content {
  display: flex;
  flex-direction: column;
}
.paragraph {
  width: 80%;
  height: 30%;
  margin: 0 auto;
  margin-top: 30px;
  font-family: sans-serif;
  text-align: center;
}
</style>
<script>
import Recap from "../components/Recap.vue";
import json from "../json/data.json";

export default {
  data: function() {
    return {
      myJson: json
    };
  },
  components: {
    Recap
  }
};
</script>