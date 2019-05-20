<template>
  <div v-bind:class="{ none: !axe.state }" class="item"></div>
</template>
<style lang="scss" scoped>
.item {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/assets-components/items/itemsFloor/axeFloor.png);
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
      axe: {
        state: true
      }
    };
  }
};
</script>