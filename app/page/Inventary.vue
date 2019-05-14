<template>
  <div class="inventary">
    <div class="inventary__item">
      <ItemAxe v-bind:class="{ none: !axe.state }"></ItemAxe>
    </div>
    <div class="inventary__item">
      <ItemBoat v-bind:class="{ none: !boat.state }"></ItemBoat>
    </div>
    <div class="inventary__item">
      <ItemFish v-bind:class="{ none: !fish.state }"></ItemFish>
    </div>
    <div class="inventary__item">
      <ItemFishingRod v-bind:class="{ none: !fishingRod.state }"></ItemFishingRod>
    </div>
    <div class="inventary__item">
      <ItemString v-bind:class="{ none: !string.state }"></ItemString>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inventary {
  width: 1366px;
  height: 750px;
  background-image: url("../assets/img/test.jpg");
  background-repeat: no-repeat;
  background-size: contain;
}
.none {
  display: none;
}
</style>

<script>
import ItemAxe from "../items/ItemAxe.vue";
import ItemBoat from "../items/ItemBoat.vue";
import ItemFabric from "../items/ItemFabric.vue";
import ItemFish from "../items/ItemFish.vue";
import ItemFishingRod from "../items/ItemFishingRod.vue";
import ItemPlank from "../items/ItemPlank.vue";
import ItemSail from "../items/ItemSail.vue";
import ItemString from "../items/ItemString.vue";
import ItemWood from "../items/ItemWood.vue";

export default {
  components: {
    ItemFishingRod,
    ItemAxe,
    ItemFish,
    ItemBoat,
    ItemString,
    ItemWood,
    ItemFabric,
    ItemPlank,
    ItemSail
  },
  data() {
    return {
      fish: {
        state: true
      },
      fishingRod: {
        state: false
      },
      axe: {
        state: true
      },
      boat: {
        state: true
      },
      string: {
        state: true
      }
    };
  }
};
</script>