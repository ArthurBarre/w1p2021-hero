import data from '../json/test.json';
class ExpeditionsService {
  constructor() {
    this.exploreIslandSummitAction = data.islandSummit.state;
    this.visitBoatWrecAction = data.islandSummit.state;
    this.exploreIslandCenter = data.exploreIslandCenterAction;
    this.exploreAroundAction = data.exploreAround.state;
    this.fishAction = data.fish.state;
    this.waterAction = data.water.state;
  }
  islandSummit() {
    this.islandsummitAction = 1;
    return this.islandsummit;
  }
}
module.exports = new ExpeditionsService();