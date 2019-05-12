<template>
  <img
    v-bind:class="{ none: !fishingRod.state }"
    class="item"
    src="../assets/img/FishingRodFloor.png"
    alt="fishing-rod"
  >
</template>
<style lang="scss" scoped>
.item {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 750px;
}
.none {
  display: none;
}
</style>
<script>
export default {
  data() {
    return {
      fishingRod: {
        state: true
      }
    };
  }
};
</script>

