<template>
  <div>
    <h3>Eau</h3>
    <div class="foods__wrapper">
      <ItemWater v-for="Water in waterQuantity" :key="Water" v-bind:Water="Water"><ItemWater/>
    </div>
  </div>
</template>

<style scoped>
.foods__wrapper {
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-bottom: 10px;
}
h3 {
  margin-left: 10px;
  margin-top: 8px;
  font-size:17px;
  font-family: sans-serif;
  color: white
}
</style>

<script>
import ItemWater from "../items/ItemWater.vue";
import user from "../json/user.json";
export default {
  components: {
    ItemWater
  },
  data() {
    return {
      waterNumber:user.waterQuantity
    };
  }
};
</script>
