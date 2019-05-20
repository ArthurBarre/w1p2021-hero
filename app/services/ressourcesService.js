import data from '../json/user.json';
class RessourcesService {
  constructor() {
    this.waterQuantity = data.user.ressources.waterQuantity;
    this.foodQuantity = data.user.ressources.foodQuantity;
  }
  decrementWater() {
    this.waterQuantity--;
  }
  decrementFood() {
    this.foodQuantity--;
  }
  valueWaterQuantity() {
    return this.waterQuantity;
  }
  valueFoodQuantity() {
    return this.foodQuantity;
  }
}
module.exports = new RessourcesService();
