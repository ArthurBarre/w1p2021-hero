<template>
  <div class="items">
    <ItemAxe/>
  </div>
</template>

<style lang="scss" scoped>
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
  }
};
</script>