<template>
  <div class="button">
    <span class="button__text">{{choice.content}}</span>
  </div>
</template>

<style scoped>
.button__text {
  margin: auto auto;
  color: white;
  font-family: sans-serif;
  padding: 1%;
  font-size: 15px;
}
</style>


<script>
export default {
  name: "Choice",
  props: ["choice"],
  data() {
    return {};
  }
};
</script>
