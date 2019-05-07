<template>
  <div class="game__container">
    <div class="game__content">
      <div class="game__main"></div>
      <div class="game__button">
        <div
          v-for="content in answers"
          v-bind:key="content.id"
          v-bind:content="answers.content"
          class="button"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Choice from "./Choice";
export default {
  name: "Home",
  components: {
    Choice
  }
};
</script>
