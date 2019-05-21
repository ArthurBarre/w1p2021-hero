<template>
  <div>
    <p class="expeditionResult__boatWreck">{{expeditionOne}}</p>
  </div>
</template>
<script>
import data from "../json/expeditions.json";
export default {
  name: "Boatwreck",
  data() {
    return {
      expeditionOne: data.events.exploreBoatWreck.expeditionResult
    };
  }
};
</script>

