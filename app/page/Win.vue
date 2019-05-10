<template>
<body>
  <h1>{{game}}</h1>
</body>
</template>

<script>
export default {
  data() {
    return {
      game: "C'est la win"
    };
  }
};
</script>
<style scoped>
body {
  background-color: green;
}
h1 {
  color: white;
  font-size: 100px;
}
</style>

