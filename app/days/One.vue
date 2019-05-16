
<template>
  <div>
    <h1>1</h1>
    <router-link
      class="button"
      v-for="action in step.actions"
      v-bind:key="action.to"
      to="action.to"
    >{{ action.to.String()}}</router-link>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.ressources__directions {
  height: 90px;
  .ressources__directions--next {
    float: right;
    margin-top: 60px;

    margin-right: 20px;
  }
  .ressources__directions--prev {
    float: left;
    bottom: 0;
    margin-top: 60px;
    margin-left: 20px;
  }
}
</style>


<script>
export default {};
</script>
