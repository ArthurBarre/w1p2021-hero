<template>
  <div class="home">
    <h1>Home</h1>
    <router-link class="button" to="/game">
      <span>Go to the Game</span>
    </router-link>
    <router-link class="button" to="/dev">
      <span>Go to Dev</span>
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 200px;
    font-family: sans-serif;
  }
  .button {
    margin-top: 100px;
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
