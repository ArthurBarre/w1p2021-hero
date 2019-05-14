<template>
  <p v-html="text"></p>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>