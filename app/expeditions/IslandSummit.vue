<template>
  <div>
    <p class="expeditionResult__islandSummit">{{expeditionOne}}</p>
  </div>
</template>
<script>
import data from "../json/expeditions.json";
export default {
  name: "IslandSummit",
  data() {
    return {
      expeditionOne: data.events.exploreIslandSummit.expeditionResult
    };
  }
};
</script>

