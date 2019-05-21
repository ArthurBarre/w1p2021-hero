import data from '../json/test.json';
class ExpeditionsService {
  constructor() {
    this.exploreIslandSummitOk = true;
    this.exploreIslandSummitAction = false;
    // this.visitBoatWrecAction = data.islandSummit.state;
    // this.exploreIslandCenter = data.exploreIslandCenterAction;
    // this.exploreAroundAction = data.exploreAround.state;
    // this.fishAction = data.fish.state;
    // this.waterAction = data.water.state;
  }
  islandSummitFunction() {
    this.exploreIslandSummitOk = true;
    this.exploreIslandSummitAction = true;
  }
  islandSummitOkData() {
    this.islandSummitFunction();
    return this.exploreIslandSummitOk;
  }

  islandSummitActionData() {
    this.islandSummitFunction();
    return this.islandSummitAction;
  }
}
module.exports = new ExpeditionsService();