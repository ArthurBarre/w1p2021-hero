class FoodService {
  constructor() {
    this.value = 3;
  }
  decrement() {
    this.value--;
  }
  eat() {
    this.value = 4;
  }
  test() {
    return this.value;
  }
}
module.exports = new FoodService();