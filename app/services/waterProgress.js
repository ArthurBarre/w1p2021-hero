import data from '../json/user.json';
class WaterProgress {
  constructor() {
    this.waterProgress = data.user.ressources.waterProgress;
  }
  change() {
    this.waterProgress--;
  }
  value() {
    return this.waterProgress;
  }
}

module.exports = new WaterProgress();