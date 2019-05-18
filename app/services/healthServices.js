import data from '../json/user.json';
import foodProgress from '../services/foodProgress';
class HealthService {
  constructor() {
    this.health = data.user.health;
    this.foodProgress = foodProgress.value();
  }
  check() {
    console.log(this.foodProgress);
    if (this.foodProgress === 0) {
      this.health = 0;
      console.log(this.health);
    }

  }
  value() {
    return this.health;
  }
}

module.exports = new HealthService();