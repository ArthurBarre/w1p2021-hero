<template>
  <img src="../assets/img/StringFloor.png" alt class="item">
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
      string: {
        state: true
      }
    };
  }
};
</script>