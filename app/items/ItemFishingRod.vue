<template>
  <div v-bind:class="{ none: !fishingRod.state }" class="item"></div>
</template>
<style lang="scss" scoped>
.item {
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: url(../assets/img/assets-components/items/FishingRod.png);
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
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

