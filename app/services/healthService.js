import hungerService from '../services/hungerService.js';
import thirstService from '../services/thirstService.js';

class HealthService {
  constructor() {
    this.hungerLevel = hungerService.valueHunger();
    this.thirstLevel = thirstService.valueThirst();
  }
  testHealth() {
    if (this.hungerLevel > this.thirstLevel) {
      this.health = null;
      this.health = this.thirstLevel;
      return this.health;
    } else if (this.hungerLevel < this.thirstLevel) {
      this.health = null;
      this.health = this.hungerLevel;
      return this.health;
    } else if (this.hungerLevel === this.thirstLevel) {
      this.health = null;
      this.health = this.hungerLevel;
    }
  }
  getHealth() {

  }
  checkHealth() {
    this.testHealth();
    return this.health;

  }
}
module.exports = new HealthService();