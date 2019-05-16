<template>
  <div class="home">
    <div class="home__content">
      <h1>Home</h1>
      <router-link class="button" to="/game/Recap">
        <span>Go to the Game</span>
      </router-link>
      <router-link class="button" to="/dev">
        <span>Go to Dev</span>
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
  .home__content {
    margin: auto auto;
  }
  h1 {
    font-size: 200px;
    font-family: sans-serif;
  }
  .button {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    background-color: #2196f3;
    border-radius: 5px;
    text-decoration: none;
  }
}
span {
  text-decoration: none;
  font-size: 16px;
  color: white;
}
</style>

<script>
export default {
  name: "home"
};
</script>
