<template>
  <div class="home">
    <div class="home__content">
      <h1>L'île</h1>
      <router-link class="button" to="/game/recap">
        <!-- <span>Go to Game</span> -->
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/Fonds/Game.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  .home__content {
    margin: auto auto;
  }
  h1 {
    font-size: 200px;
    color: gold;
    font-family: sans-serif;
  }
  .button {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background-color: #2196f3;
    border-radius: 5px;
    text-decoration: none;
  }
  .button::after {
    content: "Play";
    margin: auto auto;
    color: white;
    font-family: sans-serif;
    font-size: 25px;
  }
  .button:hover::after {
    color: #2196f3;
  }

  .button:hover {
    background-color: white;
    border: solid 2px #2196f3;
  }
}
span {
  text-decoration: none;
  font-size: 25px;
  font-family: sans-serif;
  color: white;
}
</style>

<script>
export default {
  name: "home"
};
</script>
