import data from '../json/user.json';
class FoodQuantity {
  constructor() {
    this.foodQuantity = data.user.ressources.foodQuantity;
  }
  eat() {
    this.foodQuantity--;
  }
  bonus() {
    this.foodQuantity++;
  }
  value() {
    return this.foodQuantity;
  }
}

module.exports = new FoodQuantity();