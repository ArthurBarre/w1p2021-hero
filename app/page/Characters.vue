<template>
  <div class="home">
    <div class="aside">
      <img class="logo" src="../assets/img/assets-components/LogoBig.png" alt="Logo">
      <img
        class="sound"
        src="../assets/img/assets-components/soundOff.png"
        alt="Turn the sound off"
      >
    </div>

    <div class="home__content">
      <h1>Choisis ton personnage</h1>
      <div class="characters">
        <img class="character character--man" src="../assets/img/Characters/Homme.png" alt="Homme">
        <img
          class="character character--woman"
          src="../assets/img/Characters/Femme.png"
          alt="Femme"
        >
      </div>
      <div class="modes">
        <router-link class="button easy" to="/game/recap">
          <!-- <span>Play in easy mode</span> -->
        </router-link>
        <router-link @click="hardMode" class="button hard" to="/game/recap">
          <!-- <span>Play in hard mode</span> -->
        </router-link>
      </div>
    </div>
    <aside>Une collaboration d'Arthur Barré & Kalani Marquand</aside>
  </div>
</template>


<style lang="scss" scoped>
* {
  font-family: "Neucha", cursive;
  color: var(--brand-color);
  letter-spacing: 2px;
  font-size: 20px;
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
    height: 710px;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 25px;
    width: 510px;
    margin: 10% auto auto;
    text-align: center;
  }

  .characters {
    width: 680px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    height: 500px;
    padding-top: 2%;
  }
  .character--man {
    left: 0;
    height: 450px;
  }
  .character--woman {
    right: 0;
    height: 350px;
  }
  .modes {
    width: 680px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
    height: 400px;
    padding-top: 3%;
  }
  .button {
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 70px;
    background-color: #0000001a;
    border: solid 1px #0000001a;
    border-radius: 5px;
    text-decoration: none;
  }
  .easy::after {
    content: "Facile";
  }
  .hard::after {
    content: "Difficile";
  }
  .button:hover {
    background-color: none;
    border: solid 2px var(--brand-color);
  }
}
.aside {
  position: absolute;
  right: 15%;
  top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  width: 150px;
}
.sound {
  width: 50px;
  margin-top: 20%;
}
aside {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
}
</style>


<script>
import expeditionsService from '../services/expeditionsService.js';
import data from  '../json/expeditions.json';import healthService from '../services/healthService.js'


export default {
  name: "characters",
  methods: { 
    hardMode() {
      healthService.aFunction();
    }
  },
  beforeMount() {
    for (let expedition in data.events) {
        expeditionsService.addExpedition(data.events[expedition].title);
      }
    }
    }
</script>