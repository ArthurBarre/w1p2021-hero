<template>
  <div>
    <h3>Nourriture</h3>
    <div class="foods__wrapper">
      <ItemFood v-for="Food in 3" :key="Food" v-bind:Food="Food"><Item
      Food/>
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
import ItemFood from "../items/ItemFood.vue";
import data from "../json/user.json";
export default {
  components: {
    ItemFood
  },
  data() {
    return {
    };
  }
  }
</script>
