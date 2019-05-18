<template>
  <img v-bind:class="{ none: !axe.state }" class="item" src="../assets/img/AxeFloor.png" alt="axe">
</template>
<style lang="scss" scoped>
.item {
  position: absolute;
  width: 150px;
  height: 150px;
  background-image: url(../assets/img/Fonds/Game.jpg);
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