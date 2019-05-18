import data from '../json/user.json';
import foodProgress from '../services/foodProgress';
import waterProgress from '../services/waterProgress';

class HealthService {
  constructor() {
    this.health = data.user.health;
    this.foodProgress = foodProgress.value();
    this.waterProgress = waterProgress.value();
  }
  check() {
    if (this.foodProgress > this.waterProgress) {
      this.health = this.waterProgress;
    } else {
      this.health = this.foodProgress;
    }
    console.log('health from js : ' + this.health);
    if (this.foodProgress || this.waterProgress === 0) {
      this.health = 0;
      console.log(this.health);
    }

  }
  value() {
    return this.health;
  }
}

module.exports = new HealthService();