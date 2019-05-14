class healthCare {
  constructor() {
    this.life = 3;
    this.health = [
      { "1": 'Je me sens vraiment mal en point, si je ne bois pas rapidemment je vais me déssecher.', "2": 'J’ai vu des rapaces voler en rond au dessus de ma tête, ils épient le moment où mon estomac sera vide.' },

      { 1: 'J’ai eu des vertiges en élaguant les arbres de la lisière, je dois trouver à manger si je veux garder des forces.', 2: 'Par cette châleur il faut que je pense à m’hydrater.' },

      { 1: 'La fraîcheur de la nuit m’a permis de dormir comme un bébé, je me sens revigoré.', 2: 'Le temps me semble bien long, heureusement que cette île regorge de denrées.' },

      { 1: 'J’aime sentir les nutriments animer mon corps, je suis en pleine forme aujourd’hui.', 2: 'Je déborde d’énergie, je devrai faire des provisions pour les temps moins cléments.' }
    ]
  }
}
gain() {
  this.life++
}
loose() {
  this.life--
}
value() {
  return this.life;
}
}
module.exports = new healthCare();

health[healthCare.value]


