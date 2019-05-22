class WaterService {
  constructor() {
    this.value = 4;
  }
  decrement() {
    this.value--;
  }
  drink() {
    this.value = 4;
  }
  test() {
    return this.value;
  }
}

module.exports = new WaterService();
