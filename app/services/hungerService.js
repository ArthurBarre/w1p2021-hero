class FoodService {
  constructor() {
    this.value = 2;
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