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
      <!-- <RecapExpedition></RecapExpedition> -->
      <div class="content__recap">
        <article class="VS">
          <VitalSituation></VitalSituation>
        </article>
        <article class="ER">
          <ExpeditionResults/>
        </article> 
          <article class="bonusMalus">
            <div v-if="random === 4" >Une noix de coco est tombée à quelques centimètres de ma boîte crâniène. J’ai senti l’objet me frôler, je ne pense pas être passé très loin de la mort cette fois. En revanche son eau m’a désaltéré.</div>
          <div v-else-if="random === 10 ">J’ai laissé mes gourdes ouvertes au soleil, par cette chaleur accablante la totalité s’est évaporée. Je m’en remets aux dieux de la pluie à présent …
          Je suis parti me baigner un peu trop loin du rivage, le courant m’a emporté au large et j’ai peiné à revenir à la berge. C’est un dauphin et son cavalier bigorneau qui m’ont porté secours.
          </div>
          <div v-else-if="random === 2 ">Une loutre sauvage a tenté de me voler mes vêtements pendant que je faisais la vaisselle. Je l’ai poursuivis dans une partie de la forêt que je n’ai pas encore exploré. Je me suis perdu et ai erré pendant une partie de la journée.
          </div>
          <div v-else-if="random === 16 ">
            Je meurs de faim … Et ces grosses sauterelles là, ça se mange ?
          </div>
        </article>
      </div>
      <!-- <RecapCraft></RecapCraft> -->

      <div class="directions">
        <router-link class="direction direction--next" to="/game/Ressources"></router-link>
      </div>
    </div>
    <span>Une collaboration d'Arthur Barré & Kalani Marquand</span>
    <Inventory class="inventory__position"></Inventory>
  </div>
</template>


<style lang="scss" scoped>
.inventory__position {
  z-index: 1;
}
.directions {
  z-index: 2;
}
* {
  font-family: "Neucha", cursive;
  color: var(--brand-color);
  letter-spacing: 2px;
  font-size: 20px;
  line-height: 1.1;
}
h1 {
  font-size: 90px;
  width: 510px;
  margin: 10% auto auto;
  text-align: center;
}
article {
  display: flex;
  flex-direction: row;
}
article > * {
  width: 710px;
  align-items: center;
  text-align: center;
  padding: 5%;
}
.game__container {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/img/Fonds/Game.jpg);
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
.recap {
  padding-top: 4%;
}
.content__recap {
  width: 100%;
  display: flex;
  flex-direction: column;
  transform: translateY(-100px);
}
.recapVitalSituation {
  padding: 5%;
}
.direction--next::after {
  position: absolute;
  right: 32%;
  bottom: 5%;
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
article {
  width: 710px;
}
.day{
  font-size: 59px;
}
span {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 16px;
}
</style>

<script>
import VitalSituation from "../components/VitalSituation.vue";
import ExpeditionResults from "../expeditions/ExpeditionResults.vue";
import Inventory from "../inventory/Inventory";
import dayService from "../services/dayService";
import healthService from "../services/healthService";

export default {
  data() {
    return {
      day: null,
      health: null,
      random: null
    };
  },
  components: {
    VitalSituation,
    ExpeditionResults,
    Inventory
  },
  methods: {
    bonusMalus(){
      if(this.random === 4 || this.random === 16 ){
        healthService.bonusOne();
        console.log('bogoss')
      }
      else if (this.random === 1 ){
        healthService.bonusTwo();
      }
      else if(this.random === 2 ){
        healthService.malusOne();
        console.log('looser')
      }
      else if(this.random === 10){
        healthService.malusTwo();
      }
    }
  },
  mounted() {
    console.log(healthService.healthValue());
    this.bonusMalus();
    
  },
  beforeMount() {
    dayService.increment();
    this.day = dayService.test();
  },
  created() {
    this.random = Math.floor(Math.random() * 16) + 1;
    console.log(this.random)
}
}
</script>