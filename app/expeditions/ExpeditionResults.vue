<template>
  <div>
    <div v-if="expeditionSave === 3">
      <IslandCenter/>
    </div>
    <div v-if="expeditionSave === 2">
      <ExploreAround/>
    </div>
    <div v-if="expeditionSave === 4">
      <BoatWreck/>
    </div>
    <div v-if="expeditionSave === 1">
      <IslandSummit/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import expeditionsService from "../services/expeditionsChoicesService.js";
import IslandCenter from "../expeditions/IslandCenter.vue";
import BoatWreck from "../expeditions/BoatWreck.vue";
import IslandSummit from "../expeditions/IslandSummit.vue";
import ExploreAround from "../expeditions/ExploreAround.vue";
export default {
  data: function() {
    return {
      expeditionSave: Number
    };
  },
  components: {
    IslandCenter,
    BoatWreck,
    IslandSummit,
    ExploreAround
  },
  mounted() {
    this.expeditionSave = expeditionsService.expeditionSave();
    console.log("expe save" + this.expeditionSave);
  }
};
</script>

