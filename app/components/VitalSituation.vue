<template>
  <article class="health3" v-if="health === 4">
    <p
      class="health3__sentence"
      v-if="healthSentenceRandom === 1"
    >J’aime sentir les nutriments animer mon corps, je suis en pleine forme aujourd’hui.</p>
    <p
      class="health3__sentence"
      v-else
    >Je déborde d’énergie, je devrais faire des provisions pour les temps moins cléments.</p>
  </article>
  <article class="health2" v-else-if="health === 3">
    <p
      class="health2__sentence"
      v-if="healthSentenceRandom === 1"
    >La fraîcheur de la nuit m’a permis de dormir comme un bébé, je me sens revigoré.</p>
    <p v-else>Le temps me semble bien long, heureusement que cette île regorge de denrées.</p>
  </article>
  <article class="health2" v-else-if="health === 2">
    <p
      class="health1__sentence"
      v-if="healthSentenceRandom === 1"
    >J’ai eu des vertiges en élaguant les arbres de la lisière, je dois trouver à manger si je veux garder des forces.</p>
    <p class="health1__sentence" v-else>Par cette châleur il faut que je pense à m’hydrater.</p>
  </article>
  <article class="health0" v-else-if="health ===1">
    <p
      class="health0__sentence"
      v-if="healthSentenceRandom === 1"
    >J’ai vu des rapaces voler en rond au dessus de ma tête, ils épient le moment où mon estomac sera vide.</p>
    <p
      class="health0__sentence"
      v-else
    >Je me sens vraiment mal en point, si je ne bois pas rapidemment je vais me déssecher.</p>
  </article>
</template>

<style lang="scss" scoped>
</style>

<script>
import healthService from "../services/healthService.js";

export default {
  data: function() {
    return {
      health: null,
      healthSentenceRandom: null
    };
  },
  created() {
    this.healthSentenceRandom = Math.floor(Math.random() * 2) + 1;
    // console.log("Recap Random Sentence : " + this.healthSentenceRandom);
  },
  beforeMount() {
    this.health = healthService.healthValue();
    console.log(this.health);
  }
};
</script>

