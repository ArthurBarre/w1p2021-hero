import healthService from '../services/healthService';
class ExpeditionsService {
  constructor() {
    this.expeditions = [];
    this.items = [];
    this.expeditionResult = 'En me réveillant ce matin, le visage dans le sable, j’ai constaté le pétrain dans lequel je suis. J’ai des courbatures mais rien de cassé. Quelques réserves d’eau se sont échouées près de moi. J’ai avalé des baies exotiques dont j’ignore le nom. Ce régime ne va pas longtemps me convenir... L’île semble n’être habitée que d’animaux, je n’ai pas senti la présence humaine.Il va falloir me débrouiller par moi-même. Il faut que je pense à me rationner… C’est ce qu’on appelle la survie ! Ma vie ne tient qu’à ces maigres réserves.';
    this.itemWaters = false;
    this.itemwWood = false;
    this.itemAxe = false;
    this.itemBoat = false;
    this.win = false;
  }
  addExpedition(expedition) {
    this.expeditions.push(expedition);
    //console.log(this.expeditions);
  }
  // addItems(expedition) {
  //   for (expedition in data.events) {
  //     this.items.push(data.events[expedition].item);
  //   }
  // }
  removeExpedition(expedition) {
    this.expeditions.splice(this.expeditions.indexOf(expedition), 1);
  }
  list() {
    return this.expeditions;
  }
  listItems() {
    return this.items;
  }
  activeExpedition(expedition) {
    this.expedition = expedition;

    this.resultExpedition();
    //this.addItems(expedition);
    console.log('items :' + this.items);
  }
  itemAxeGet() {
    return this.itemAxe;
  }
  itemWoodGet() {
    return this.itemWood;
  }
  itemWatersGet() {
    return this.itemWaters;
  }
  itemBoatGet() {
    return this.itemBoat;
  }
  winValue() {
    this.checkWin();
    return this.win;
  }
  checkWin() {
    if (this.itemWood !== false && this.itemAxe !== false && this.itemWaters !== false && this.itemBoat !== false) {
      this.win = true;
    }
    else {
      this.win = false;
    }
  }
  resultExpedition(expedition) {
    this.expeditionResultOne = expedition;
    if (this.expeditionResultOne === 'Explorer le sommet de lil') {
      this.expeditionResult = 'Mon expédition au sommet de l’île s’est avérée très intéressante. Malgré ma difficulté à pénétrer la forêt dense, le sommet ne culmine pas si haut. En quelques heures j’ai eu une vision panoramique de mon exil. Et j’ai pu repérer un objet que la mer a dû déposer pendant la nuit sur une plage voisine de la mienne. J’ai maintenant une hache un peu émoussée ! + HACHE';
      this.itemAxe = true;
    }
    else if (this.expeditionResultOne === 'Explorer le tour de l\'île') {
      this.expeditionResult = 'Mon exploration autour de l’île a presque été un plaisir. J’ai rapporté du petit bois et j’ai fais rouler de plus grosses bûches jusqu’au campement. Ce bois rique d’être necessaire si je veux survivre ici. + BOIS !';

      this.itemWood = true;
      //this.items.push('wood');
    }
    else if (this.expeditionResultOne === "Aller Chercher de l'eau") {
      this.expeditioneResult = "Je suis allé chercher de l'eau j'éspère en avoir assez  pour les jours prochains";
      healthService.newWater();
    }
    else if (this.expeditionResultOne === "Aller pêcher") {
      this.expeditioneResult = "Je suis allé pêcher, l'océan était gelé, et les poissons plus rare que ma chance de survie";
      healthService.newFood();
    }
    else if (this.expeditionResultOne === "Explorer le centre de l'île") {
      this.expeditionResult = 'Mon expédition au centre de l’île m’a conduit à une source d’eau fraîche ! J’ai rempli mes gourdes de réserves, je devrais tenir quelques jours de plus. + POINT d\'EAU';
      this.itemWaters = true;
      //this.items.push('point d\'eau');
    }
    else if (this.expeditionResultOne === "Fouiller l'épave du bateau") {
      this.expeditionResult = 'Mon exploration de l’épave du bateau a été fructueuse ! Malgré la difficulté d’accès du site, j’ai trouvé du tissu et de la ficelle en bon état. J’ai aussi rapporté des fruits sauvages cueillis sur le chemin retour. + FICELLES et Pièces de TISSU';
      this.itemBoat = true;
      //this.items.push('string & fabric');
    }
    else {
      this.expeditionResult = 'En me réveillant ce matin, le visage dans le sable, j’ai constaté le pétrain dans lequel je suis. J’ai des courbatures mais rien de cassé. Quelques réserves d’eau se sont échouées près de moi. J’ai avalé des baies exotiques dont j’ignore le nom. Ce régime ne va pas longtemps me convenir... L’île semble n’être habitée que d’animaux, je n’ai pas senti la présence humaine.Il va falloir me débrouiller par moi-même. Il faut que je pense à me rationner… C’est ce qu’on appelle la survie ! Ma vie ne tient qu’à ces maigres réserves.';
    }
  }
  resultExpeditionValue() {
    return this.expeditionResult;
  }
}
module.exports = new ExpeditionsService();
