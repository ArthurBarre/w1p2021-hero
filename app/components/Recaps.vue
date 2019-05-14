<template>
  <div class="recap">
    <div>
      <VitalSituation class="recap__vs"></VitalSituation>
    </div>
    <div>
      <ExpeditionResult class="recap__er"></ExpeditionResult>
    </div>
    <div>
      <VitalSituation class="recap__vs"></VitalSituation>
    </div>
    <div>
      <ExpeditionResult class="recap__er"></ExpeditionResult>
    </div>
  </div>
</template>

<style scoped>
.recap {
  display: flex;
  height: 640px;
  width: 680px;
  flex-direction: column;
  transform: translateY(100px);
  margin: 0 auto;
}
.recap > div {
  align-items: space-around;
  height: 120px;
}
</style>

<script>
import VitalSituation from "../components/VitalSituation.vue";
import ExpeditionResult from "../components/ExpeditionResult.vue";

export default {
  components: {
    VitalSituation,
    ExpeditionResult
  }
};
</script>