<template>
  <div class="game__container">
    <div class="aside">
      <img class="logo" src="../assets/img/assets-components/LogoBig.png" alt="Logo">
      <img
        class="sound"
        src="../assets/img/assets-components/soundOff.png"
        alt="Turn the sound off"
      >
    </div>

    <div class="game__main">
      <h1>Jour {{day}}</h1>

      <div class="main__content">
        <div class="content__recap">
          <p class="recap">
            Maintenant que j’ai du temps libre, je devrais peut-être l’utiliser pour explorer un peu les environs.
            <br>
            <br>J’ai tout de même peur de me perdre dans cette jungle dense.
          </p>
          <br>
          <p class="recap--question">Aller explorer demain ?</p>
        </div>

        <div class="expeditions">
          <Expedition
            v-for="(expedition, index) in expeditions"
            :key="index"
            :expedition="expedition"
            @expedition="handleExpedition"
            ref="expedition"
          ></Expedition>
        </div>

        <router-link to="/game/Inventory">inventory</router-link>

        <div class="directions">
          <router-link class="direction direction--next" to="/game/Craft"></router-link>
        </div>
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
h1 {
  font-size: 90px;
  margin: 10% 0 2% 0;
  text-align: center;
}
.game__container {
  background-image: url(../assets/img/Fonds/Game.jpg);
  display: flex;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
.game__main {
  margin: auto auto;
  width: 710px;
  height: 710px;
  margin-top: 4%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(../assets/img/assets-components/PaperFond.png);
}
.content__recap {
  max-width: 600px;
}
.recap {
  padding-top: 4%;
}
.direction--next::after {
  position: absolute;
  right: 32%;
  bottom: 13%;
  content: url(../assets/img/assets-components/ArrowRight.png);
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

.select {
  margin-left: 30px;
}

</style>

<script>
import data from "../json/expeditions.json";
import dayService from "../services/dayService";
import Expedition from "../components/Expedition";
import expeditionsService from '../services/expeditionsService.js';

export default {
  data: function() {
    return {
      day: null,
      expeditions: expeditionsService.list(),
      expedition: null,
      items: null
    };
  },
  components: {
    Expedition
  },
  methods: {
    handleExpedition(expedition) {
      expeditionsService.activeExpedition(expedition);
      expeditionsService.resultExpedition(expedition);
      this.$refs.expedition.forEach(exp => {
        if (expedition == exp.expedition) {
          exp.$el.classList.add('select');
        } else {
          exp.$el.classList.remove('select')
        }
      });
    }
  },
  mounted() {
    this.day = dayService.test();
    this.items = expeditionsService.listItems()
    console.log('items :'+ this.items)
      
    }
  };
</script>