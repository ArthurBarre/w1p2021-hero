<template>
  <div>
    <p class="expeditionResult__islandCenter">{{expeditionOne}}</p>
  </div>
</template>
<script>
import data from "../json/expeditions.json";
export default {
  name: "IslandCenter",
  data() {
    return {
      expeditionOne: data.events.exploreIslandCenter.expeditionResult
    };
  }
};
</script>

