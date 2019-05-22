<template>
  <div class="inventary"></div>
</template>

<style lang="scss" scoped>
.inventary {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
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
import inventory from "../json/inventory.json";

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
      axeSrc: function() {
        return "../assets/img/assets-components/items/itemsFloor/AxeFloor.png";
      },
      fish: {
        state: true
      },
      fishingRod: {
        state: true
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