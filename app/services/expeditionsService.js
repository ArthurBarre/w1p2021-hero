class ExpeditionsService {
  constructor() {
    this.expeditions = [];
  }
  addExpedition(expedition) {
    this.expeditions.push(expedition);
  }
  removeExpedition(expedition) {
    this.expeditions.splice(this.expeditions.indexOf(expedition), 1);
  }
  list() {
    return this.expeditions;
  }
  activeExpedition(expedition) {
    this.expedition = expedition;
  }
}
module.exports = new ExpeditionsService();
