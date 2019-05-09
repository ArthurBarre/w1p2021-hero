<template>
  <div class="game__container">
    <div class="game__content">
      <div class="game__main">
        <div class="game__buttons">
          <Choices/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Choices from "../components/Choices.vue";
export default {
  name: "Home",
  components: {
    Choices
  }
};
</script>
