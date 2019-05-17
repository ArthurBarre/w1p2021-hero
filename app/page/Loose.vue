<template>
<body>
  <h1>{{game}}</h1>
</body>
</template>

<script>
export default {
  data() {
    return {
      game: "C'est la loose"
    };
  }
};
</script>
<style scoped>
body {
  background-color: red;
}
h1 {
  color: white;
  font-size: 100px;
}
</style>

