<template>
  <div class="game__container">
    <div class="game__content">
      <div class="game__main"></div>
      <div class="game__button">
        <Choice v-for="post in posts" v-bind:key="post.id" v-bind:title="post.answer"></Choice>
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
