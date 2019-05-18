<template>
<body>
  <h1>{{game}}</h1>
</body>
</template>

<script>
export default {
  data() {
    return {
      game: "Game Over"
    };
  }
};
</script>
<style scoped>
body {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/Fonds/Loose.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
h1 {
  width: max-content;
  height: max-content;
  color: white;
  font-size: 200px;
  transform: translateY(350px);
  font-family: sans-serif;
  margin: auto auto;
}
</style>

