class foodProgress {
  constructor() {
    this.foodProgress = 100;
  }
  change() {
    this.foodProgress--;
  }
  value() {
    return this.foodProgress;
  }
}

module.exports = new foodProgress();