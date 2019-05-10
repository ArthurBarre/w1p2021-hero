<template>
  <div class="game__container">
    <div class="game__main">
      <h1 class="day">{{day}}</h1>
      <Recap><Recap/>
      <div class="game__buttons">
        <Choices><Choices/>
      </div>
      
      <!-- <Ressources/> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game__container {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/img/plage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  margin: auto auto;
}
.game__main {
  display: flex;
  width: 50%;
  height: 85%;
  margin: auto auto;
  background-color: white;
  opacity: 0.9;
}
.game__buttons {
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin: 0 auto;
}
.day {
  position: absolute;
  font-size: 15px;
  text-align: center;
  margin: 0 auto;
}
</style>


<script>
import Choices from "../components/Choices.vue";
import Recap from "../components/Recap.vue";
import Ressources from "../components/Ressources.vue";
export default {
  data: function() {
    return {
      day: "Day 1"
    };
  },
  components: {
    Choices,
    Recap,
    Ressources
  }
};
</script>
