import data from '../json/expeditions.json';
class ExpeditionsChoices {
  constructor() {
    //Island Summit var
    this.exploreIslandSummitOk = data.events.exploreIslandSummit.stateOk;
    this.exploreIslandSummitAction = data.events.exploreIslandSummit.stateAction;
    this.islandSummitItemSave = null;
    //Boat Wreck var
    this.exploreBoatWreckOk = data.events.exploreAround.stateOk;
    this.exploreBoatWreckAction = data.events.exploreAround.stateAction;
    //Island center var
    this.exploreIslandCenterOk = data.events.exploreIslandCenter.stateOk;
    this.exploreIslandCenterAction = data.events.exploreIslandCenter.stateAction;
    //Around the island var
    this.exploreAroundAction = data.events.exploreAround.stateAction;
    this.exploreAroundOk = data.events.exploreAround.stateOk;
    //fish var
    this.fishAction = null;
    this.fishOk = null;
    //water var
    this.waterOk = null;
    this.waterAction = null;
    // Save Expedition var
    this.saveNumber = Number;
  }

  //ISLAND SUMMIT

  //change Values
  islandSummitChange() {
    this.exploreIslandSummitOk = false;
    this.exploreIslandSummitAction = true;
    this.saveNumber = 1;
  }
  islandSummitOkData() {
    this.islandSummitChange();
    return this.exploreIslandSummitOk;
  }
  islandSummitActionData() {
    this.islandSummitChange();
    return this.exploreIslandSummitAction;
  }

  //BOAT

  exploreBoatWreckChange() {
    this.exploreBoatWreckOk = false;
    this.exploreBoatWreckAction = true;
    this.saveNumber = 4;
  }
  exploreBoatWreckOkData() {
    this.exploreBoatWreckChange();
    return this.exploreBoatWreckOk;
  }
  exploreBoatWreckActionData() {
    this.exploreBoatWreckChange();
    return this.exploreBoatWreckAction;
  }

  //AROUND the Île

  exploreAroundChange() {
    this.exploreAroundOk = false;
    this.exploreAroundAction = true;
    this.saveNumber = 2;
  }
  exploreAroundOkData() {
    this.exploreAroundChange();
    return this.exploreAroundOk;
  }
  exploreAroundActionData() {
    this.exploreAroundChange();
    return this.exploreAroundAction;
  }

  //explore ISLAND CENTER

  exploreIslandCenterChange() {
    this.exploreIslandCenterAction = true;
    this.exploreIslandCenterOk = false;
    this.saveNumber = 3;
  }
  exploreIslandCenterOkData() {
    this.exploreIslandCenterChange();
    return this.exploreIslandCenterOk;
  }
  exploreIslandCenterActionData() {
    this.exploreIslandCenterChange();
    return this.exploreIslandCenterAction;
  }
  expeditionSave() {
    return this.saveNumber;
  }

}
module.exports = new ExpeditionsChoices();