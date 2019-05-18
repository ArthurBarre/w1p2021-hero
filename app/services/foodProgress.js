import data from '../json/user.json';
class FoodProgress {
  constructor() {
    this.foodProgress = data.user.ressources.foodProgress;
  }
  change() {
    this.foodProgress--;
  }
  value() {
    return this.foodProgress;
  }
}

module.exports = new FoodProgress();