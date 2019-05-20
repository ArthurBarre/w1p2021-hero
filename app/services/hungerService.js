class FoodService {
  constructor() {
    this.value = 1;
  }
  decrement() {
    this.value--;
  }
  eat() {
    this.value = 4;
  }
  valueHunger() {
    return this.value;
  }
}
module.exports = new FoodService();