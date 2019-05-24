<template >
  <div>
    <p>
    {{expeditionResult}}
    </p>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import expeditionsService from "../services/expeditionsService.js";

export default {
  data: function() {
    return {
      expedition: null,
      expeditionResult: null,
    };
  },
  methods:{
  },
  mounted() {
    this.expeditionResult = expeditionsService.resultExpeditionValue();
  }
};
</script>

