<template>
  <div>
    <h3>Nourriture</h3>
    <div class="foods__wrapper">
      <Food v-for="Food in 3" :key="Food" v-bind:Food="Food"><Food/>
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
import Food from "./Food.vue";
export default {
  components: {
    Food
  },
  data() {
    return {};
  }
};
</script>
