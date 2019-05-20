<template>
  <div>
    <h1>hey</h1>
  </div>
</template>

<script>
import dayService from "../services/dayService";

export default {
  data() {
    return {
      step: this.getStep()
    };
  },
  mounted() {
    console.log("Mounted");
  },
  watch: {
    "$route.params.id"(to, from) {
      this.step = this.getStep();
    }
  },
  methods: {
    getStep() {
      return game.steps.find(
        step => step.id === parseInt(this.$route.params.id)
      );
    },
    doEffects(action) {
      if (action.path) {
        this.$router.push({ params: { id: action.path } });
      }
    }
  }
};
</script>
