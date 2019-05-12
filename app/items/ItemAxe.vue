<template>
  <img v-bind:class="{ none: !axe.state }" class="item" src="../assets/img/AxeFloor.png" alt="axe">
</template>
<style lang="scss" scoped>
.item {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 750px;
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