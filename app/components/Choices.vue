<template>
  <div class="famousButtons">
    <Choice class="famousButton" v-for="choice in choices" v-bind:choice="choice" :key="choice.id"></Choice>
  </div>
</template>

<style lang="scss" scoped>
.famousButtons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 40px 0 40px;
}
.famousButton {
  display: flex;
  border-radius: 7px;
  width: 100px;
  height: 40px;
  align-items: center;
  margin-left: 0 auto;
  margin-bottom: 30px;
  background-color: #2196f3;
}
.famousButton:hover {
  background-color: white;
  .famousButton > p {
    color: #000;
  }
}
</style>

<script>
import Choice from "./Choice.vue";
export default {
  name: "Choices",
  data() {
    return {
      choices: [
        { id: 1, content: "answerOne" },
        { id: 2, content: "answerTwo" },
        { id: 3, content: "answerThree" }
      ]
    };
  },
  components: {
    Choice
  }
};
</script>
