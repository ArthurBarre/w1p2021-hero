
class waterQuantity {
  constructor() {
    this.waterQuantity = 100;
  }
  change() {
    this.waterQuantity--;
  }
  value() {
    return this.waterQuantity;
  }
}

module.exports = new waterQuantity();