<template>
<body>
  <h1>{{game}}</h1>
    <h2> Il vous réstait {{foodQuantity}} Nourritures</h2>
    <h2>Il vous réstait {{waterQuantity}} Eau</h2>
</body>
</template>

<script>
import healthService from '../services/healthService.js'
export default {
  data() {
    return {
      game: "C'est la win",
      foodQuantity: healthService.foodValue(),
      waterQuantity: healthService.waterValue()
    };
  }
};
</script>
<style scoped>
* {
  font-family: "Neucha", cursive;
  color: var(--brand-color);
  letter-spacing: 2px;
}
body {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/Fonds/Win.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
h1 {
  color: white;
  font-size: 100px;
}
h2{
  color : white;
  font-size: 50px;
  width: max-content;
  margin: 0 auto;
}
</style>

