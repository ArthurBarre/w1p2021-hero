import healthService from "../services/healthService";
class WaterService {
  constructor() {
    this.value = 1;
    this.newHealth = null;
  }
  decrement() {
    this.value--;
  }
  drink() {
    this.value = 4;
  }
  valueThirst() {
    return this.value;
  }
}

module.exports = new WaterService();
