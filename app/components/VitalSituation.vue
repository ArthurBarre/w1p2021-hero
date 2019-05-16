<template>
  <div v-if="health === 3">
    <p
      v-if="healthSentenceRandom === 1"
    >J’aime sentir les nutriments animer mon corps, je suis en pleine forme aujourd’hui.</p>
    <p v-else>Je déborde d’énergie, je devrai faire des provisions pour les temps moins cléments.</p>
  </div>
  <div v-else-if="health === 2">
    <p
      v-if="healthSentenceRandom === 1"
    >La fraîcheur de la nuit m’a permis de dormir comme un bébé, je me sens revigoré.</p>
    <p v-else>Le temps me semble bien long, heureusement que cette île regorge de denrées.</p>
  </div>
  <div v-else-if="health === 1">
    <p
      v-if="healthSentenceRandom === 1"
    >J’ai eu des vertiges en élaguant les arbres de la lisière, je dois trouver à manger si je veux garder des forces.</p>
    <p v-else>Par cette châleur il faut que je pense à m’hydrater.</p>
  </div>
  <div v-else>
    <p
      v-if="healthSentenceRandom === 1"
    >J’ai vu des rapaces voler en rond au dessus de ma tête, ils épient le moment où mon estomac sera vide.</p>
    <p v-else>Je me sens vraiment mal en point, si je ne bois pas rapidemment je vais me déssecher.</p>
  </div>
</template>

<style lang="scss" scoped>
.game__text--content {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
}
p {
  width: 680px;
  align-items: center;
  font-family: sans-serif;
  text-align: center;
}
</style>

<script>
import data from "../json/Ressources.json";
export default {
  data: function() {
    return {
      health: data.health,
      healthSentenceRandom: Number
    };
  },
  mounted: function() {
    console.log(this.health);
  },
  created() {
    this.healthSentenceRandom = Math.floor(Math.random() * 2) + 1;
    console.log(this.healthSentenceRandom);
  }
};
</script>

