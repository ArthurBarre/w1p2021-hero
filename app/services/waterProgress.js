
class waterProgress {
  constructor() {

    this.waterProgress = 100;
  }
  change() {
    this.waterProgress--;
  }
  value() {
    return this.waterProgress;
  }
}

module.exports = new waterProgress();