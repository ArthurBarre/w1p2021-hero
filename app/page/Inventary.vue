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
import inventory from "../json/inventory.json";

export default {
  components: {
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