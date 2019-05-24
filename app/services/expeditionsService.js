import data from '../json/expeditions.json';
class ExpeditionsService {
  constructor() {
    this.expeditions = [];
    this.items = [];
    this.expeditionResult = 'En me réveillant ce matin, le visage dans le sable, j’ai constaté le pétrain dans lequel je suis. J’ai des courbatures mais rien de cassé. Quelques réserves d’eau se sont échouées près de moi. J’ai avalé des baies exotiques dont j’ignore le nom. Ce régime ne va pas longtemps me convenir... L’île semble n’être habitée que d’animaux, je n’ai pas senti la présence humaine.Il va falloir me débrouiller par moi-même. Il faut que je pense à me rationner… C’est ce qu’on appelle la survie ! Ma vie ne tient qu’à ces maigres réserves.';
  }
  addExpedition(expedition) {
    this.expeditions.push(expedition);
    //console.log(this.expeditions);
  }
  addItems(expedition) {
    for (expedition in data.events) {
      this.items.push(data.events[expedition].item);
    }
  }
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
    this.addItems(expedition);
    console.log('items :' + this.items);
  }

  resultExpedition(expedition) {
    this.expeditionResultOne = expedition;
    if (this.expeditionResultOne === "En me réveillant ce matin, le visage dans le sable, j’ai constaté le pétrain dans lequel je suis. J’ai des courbatures mais rien de cassé. Quelques réserves d’eau se sont échouées près de moi. J’ai avalé des baies exotiques dont j’ignore le nom. Ce régime ne va pas longtemps me convenir... L’île semble n’être habitée que d’animaux, je n’ai pas senti la présence humaine.Il va falloir me débrouiller par moi-même. Il faut que je pense à me rationner… C’est ce qu’on appelle la survie ! Ma vie ne tient qu’à ces maigres réserves.") {
      this.expeditionResult = "En me réveillant ce matin, le visage dans le sable, j’ai constaté le pétrain dans lequel je suis. J’ai des courbatures mais rien de cassé. Quelques réserves d’eau se sont échouées près de moi. J’ai avalé des baies exotiques dont j’ignore le nom. Ce régime ne va pas longtemps me convenir... L’île semble n’être habitée que d’animaux, je n’ai pas senti la présence humaine.Il va falloir me débrouiller par moi-même. Il faut que je pense à me rationner… C’est ce qu’on appelle la survie ! Ma vie ne tient qu’à ces maigres réserves.";
    }
    if (this.expeditionResultOne === "Explorer le sommet de lil") {
      this.expeditionResult = 'Mon expédition au sommet de l’île s’est avérée très intéressante. Malgré ma difficulté à pénétrer la forêt dense, le sommet ne culmine pas si haut. En quelques heures j’ai eu une vision panoramique de mon exil. Et j’ai pu repérer un objet que la mer a dû déposer pendant la nuit sur une plage voisine de la mienne. J’ai maintenant une hache un peu émoussée !';
      //this.items.push('hache');
    }
    else if (this.expeditionResultOne === "Explorer le tour de l'île") {
      this.expeditionResult = 'Mon exploration autour de l’île a presque été un plaisir. J’ai rapporté du petit bois et j’ai fais rouler de plus grosses bûches jusqu’au campement. Ce bois rique d’être necessaire si je veux survivre ici. + BOIS !';
      //this.items.push('wood');
    }
    else if (this.expeditionResultOne === "Explorer le centre de l'île") {
      this.expeditionResult = 'Mon expédition au centre de l’île m’a conduit à une source d’eau fraîche ! J’ai rempli mes gourdes de réserves, je devrais tenir quelques jours de plus. + Point d\'EAU';
      this.addExpedition(expedition);
      //this.items.push('point d\'eau');
    }
    else {
      this.expeditionResult = 'Mon exploration de l’épave du bateau a été fructueuse ! Malgré la difficulté d’accès du site, j’ai trouvé du tissu et de la ficelle en bon état. J’ai aussi rapporté des fruits sauvages cueillis sur le chemin retour. + FICELLES et Pièces de TISSUS';
      //this.items.push('string & fabric');
    }
  }
  resultExpeditionValue() {
    return this.expeditionResult;
  }
}
module.exports = new ExpeditionsService();
