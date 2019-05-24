class HealthService {
  constructor() {
    this.health = null;
    this.hunger = 2;
    this.thirst = 3;
    this.waterQuantity = 3;
    this.foodQuantity = 2;
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
  foodValue() {
    return this.foodQuantity;
  }
  waterValue() {
    return this.waterQuantity;
  }
  aFunction() {
    this.foodQuantity = 1;
    this.waterQuantity = 4;
  }

  meal() {
    this.hunger -= 1;
    this.thirst -= 1;
  }
  eat() {
    this.hunger = 5;
    this.foodQuantity--;
  }
  drink() {
    this.thirst = 5;
    this.waterQuantity--;
  }
  bonusOne() {
    this.hunger += 1;
  }
  bonusTwo() {
    this.thirst += 1;
  }
  bonusThree() {
    this.thirst += 1;
  }
  malusOne() {
    this.hunger -= 1;
  }
  malusTwo() {
    this.thirst -= 1;
  }
}
module.exports = new HealthService();
