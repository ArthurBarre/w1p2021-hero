<template>
  <div class="home">
    <img class="logo" src="../assets/img/assets-components/LogoBig.png" alt="Logo">
    <div class="home__content">
      <img
        class="sound"
        src="../assets/img/assets-components/soundOff.png"
        alt="Turn the sound off"
      >
      <h1>Survis le temps necessaire à la construction d’un radeau qui te permettra de te libérer de cette île</h1>
      <router-link class="button hover" to="/game/characters">
        <!-- <span>Go to Game</span> -->
      </router-link>
      <div class="button"></div>
    </div>
    <aside>Une collaboration d'Arthur Barré & Kalani Marquand</aside>
  </div>
</template>


<style lang="scss" scoped>
* {
  font-family: "Neucha", cursive;
  color: var(--brand-color);
  letter-spacing: 2px;
  line-height: 1.1;
}
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
    background-image: url(../assets/img/assets-components/PaperFond.png);
    width: 710px;
    height: 450px;
    margin-top: 0%;
  }
  h1 {
    font-size: 25px;
    width: 510px;
    margin: 10% auto auto;
    text-align: center;
  }
  .button {
    margin: 8% auto auto;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 70px;
    background-color: #0000001a;
    border: solid 1px #0000001a;
    border-radius: 5px;
    text-decoration: none;
  }
  .button::after {
    content: "Reprendre la partie";
  }
  .hover {
    width: 200px;
  }
  .hover::after {
    content: "Jouer";
  }
  .hover:hover {
    background-color: none;
    border: solid 2px var(--brand-color);
  }
}
.logo {
  width: 200px;
  margin-top: 2%;
}
.sound {
  position: absolute;
  right: 20%;
  top: 30%;
}
aside {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
</style>

<script>
export default {
  name: "home"
};
</script>
