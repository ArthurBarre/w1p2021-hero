import hungerService from '../services/hungerService.js';
import thirstService from '../services/thirstService.js';

class HealthService {
  constructor() {
    this.hungerLevel = hungerService.test();
    this.thirstLevel = thirstService.test();
  }
  testHealth() {
    if (this.hungerLevel > this.thirstLevel) {
      this.health = this.thirstLevel;
      return this.health;
    } else if (this.hungerLevel < this.thirstLevel) {
      this.health = this.hungerLevel;
      return this.health;
    } else if (this.hungerLevel === this.thirstLevel) {
      this.health = this.hungerLevel;
      return this.health;
    }
  }
}
module.exports = new HealthService();