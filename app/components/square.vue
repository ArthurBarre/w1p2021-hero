<template>
  <div v-html="text" class="square" v-bind:class="size" v-bind:style="{ backgroundColor: color}"></div>
</template>

<script>
export default {
  name: "Square",
  props: {
    src: String,
    color: String,
    size: String,
    text: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.square {
  background-color: cornflowerblue;
  color: #fff;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.square:hover {
  transform: scale(1.1);
  transition: ease-in-out 0.2s;
}
.small {
  width: 100px;
  height: 100px;
}
.medium {
  width: 200px;
  height: 200px;
}
.large {
  width: 300px;
  height: 300px;
}
</style>