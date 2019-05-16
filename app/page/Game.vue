<template>
  <div>
    <h1>{{ step.content }}</h1>
    <ul>
      <li v-on:click="doEffects(action)" v-for="action in step.actions" :key="action.path">
        <div>{{ action.label }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import countService from "../services/countService";
import game from "../data.json";

console.log(game);

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
