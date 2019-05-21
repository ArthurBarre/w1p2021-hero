import data from '../json/test.json';
class ExpeditionsChoices {
  constructor() {
    //Island Summit var
    this.exploreIslandSummitOk = data.islandSummit.stateOk;
    this.exploreIslandSummitAction = data.islandSummit.stateAction;
    //Boat Wreck var
    this.exploreBoatWreckOk = data.exploreBoatWreck.stateOk;
    this.exploreBoatWreckAction = data.exploreBoatWreck.stateAction;
    //Island center var
    this.exploreIslandCenterOk = data.exploreIslandCenter.stateOk;
    this.exploreIslandCenterAction = data.exploreIslandCenter.stateAction;
    //Around the island var
    this.exploreAroundAction = data.exploreAround.stateAction;
    this.exploreAroundOk = data.exploreAround.stateOk;
    //fish var
    this.fishAction = data.fish.stateAction;
    this.fishOk = data.fish.stateOk;
    //water var
    this.waterOk = data.water.stateOk;
    this.waterAction = data.water.state;
  }

  //ISLAND SUMMIT

  //change Values
  islandSummitOkChange() {
    this.exploreIslandSummitOk = false;
  }
  islandSummitActionChange() {
    this.exploreIslandSummitAction = true;
  }
  //change the value of okData
  newIslandSummitOkData() {
    this.islandSummitOkChange();
    return this.exploreIslandSummitOk;
  }
  //return the value changed
  islandSummitOkData() {
    return this.exploreIslandSummitOk;
  }
  newIslandSummitActionData() {
    this.islandSummitActionChange();
    return this.exploreIslandSummitAction;
  }
  islandSummitActionData() {
    return this.islandSummitAction;
  }

  //BOAT

  boatWreckOkChange() {
    this.exploreBoatWreckOk = false;
  }
  boatWreckActionChange() {
    this.exploreBoatWreckAction = true;
  }
  newBoatWreckOkData() {
    this.boatWreckOkChange();
    return this.exploreBoatWreckOk;
  }
  boatWreckOkData() {
    return this.exploreBoatWreckOk;
  }
  newBoatWreckActionData() {
    this.boatWreckActionChange();
    return this.exploreBoatWreckAction;
  }
  boatWreckActionData() {
    return this.exploreBoatWreckAction;
  }

  //AROUND the Île

  exploreAroundOkChange() {
    this.exploreAroundOk = false;
  }
  exploreAroundActionChange() {
    this.exploreAroundAction = true;
  }
  newExploreAroundOkData() {
    this.exploreAroundOkChange();
    return this.exploreAroundOk;
  }
  exploreAroundOkData() {
    return this.exploreAroundOk;
  }
  newExploreAroundActionData() {
    this.exploreAroundActionChange();
    return this.exploreAroundAction;
  }
  exploreAroundActionData() {
    return this.exploreAroundAction;
  }

  //explore ISLAND CENTER

  exploreIslandCenterOkChange() {
    this.exploreIslandCenterOk = false;
  }
  exploreIslandCenterActionChange() {
    this.exploreIslandCenterOk = true;
  }
  newExploreIslandCenterOkData() {
    this.exploreIslandCenterOkChange();
    return this.exploreIslandCenterOk;
  }
  exploreIslandCenterOkData() {
    return this.exploreIslandCenterOk;
  }
  newExploreIslandCenterActionData() {
    this.exploreIslandCenterActionChange();
    return this.exploreIslandCenterAction;
  }
  exploreIslandCenterActionData() {
    return this.exploreIslandCenterAction;
  }

}
module.exports = new ExpeditionsChoices();