<template>
  <div>
    <h3>Eau</h3>
    <div class="foods__wrapper">
      <Water v-for="Water in 3" :key="Water" v-bind:Water="Water"><Water/>
    </div>
  </div>
</template>

<style scoped>
.foods__wrapper{
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-bottom: 10px;
}
h3{
  margin-left: 10px;
  margin-top: 8px;
  font-size:17px;
  font-family: sans-serif;
  color: white
}
</style>

<script>
import Water from "./Water.vue";
export default {
  components: {
    Water
  },
  data() {
    return {};
  }
};
</script>
