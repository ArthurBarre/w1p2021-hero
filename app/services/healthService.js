class HealthService {
  constructor() {
    this.health = null;
    this.hunger = 3;
    this.thirst = 3;
  }
  healthValue() {
    if (this.hunger > this.thirst) {
      this.health = this.thirst;
      return this.health;
    } else if (this.hunger <= this.thirst) {
      this.health = this.hunger;
      return this.health;
    }
  }
  hungerValue() {
    return this.hunger;
  }
  thirstValue() {
    return this.thirst;
  }
  meal() {
    this.hunger -= 1;
    this.thirst -= 1;
  }
}
module.exports = new HealthService();
