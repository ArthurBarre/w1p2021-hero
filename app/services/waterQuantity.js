import data from '../json/user.json';
class WaterQuantity {
  constructor() {
    this.waterQuantity = data.user.ressources.waterQuantity;
  }
  drink() {
    this.waterQuantity--;
  }
  bonus() {
    this.waterQuantity++;
  }
  value() {
    return this.waterQuantity;
  }
}

module.exports = new WaterQuantity();