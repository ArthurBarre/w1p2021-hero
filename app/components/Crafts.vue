<template>
  <div class="game__container">
    <div class="game__main">
      <div class="craft__box">
        <h3>Construction</h3>
        <p
          class="craft__explications"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi sapiente. Expedita sequi quisquam, repudiandae vel deserunt cum similique iste eaque animi, eos ipsum at qui reprehenderit pariatur architecto accusantium.</p>
        <br>

        <p>{{count}}</p>
        <p class="craft__questions">Voulez vous faire un craft ?</p>
        <div class="craft__wrapper">
          <div class="firstEl element"></div>
          <span class="more">+</span>
          <div class="secondEl element"></div>
          <span class="equal">=</span>
          <div class="resultEl element"></div>
        </div>
        <div class="directions template">
          <router-link class="directions--prev" to="/dev/Expedition">prev</router-link>
          <button @click="dayPassed">day+1</button>
          <div></div>
          <router-link class="directions--next" to="/dev/Recap">next</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
button {
  transform: translateX(250px);
}
.game__container {
  font-family: sans-serif;
  display: flex;
  width: 1366px;
  height: 750px;
  background-image: url("../assets/img/test.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
}
.game__main {
  display: flex;
  width: 680px;
  height: 640px;
  background-color: white;
  opacity: 0.9;
}
.craft__box {
  margin-top: 90px;
}
.craft__questions {
  margin-left: 40px;
  margin-top: 10px;
}
.craft__explications {
  margin-left: 10px;
  padding: 2%;
  margin-top: 10px;
}
h3 {
  margin-left: 10px;
}
.element {
  width: 80px;
  height: 80px;
  background-color: red;
  border-radius: 1000px;
}
.craft__wrapper {
  width: 60%;
  margin: 0 auto;
  transform: translateX(55px) translateY(60px);
}
.craft__wrapper > * {
  display: inline-block;
  vertical-align: middle;
}
.directions {
  transform: translateY(245px);
  .directions--next {
    float: right;
    margin-right: 20px;
  }
  .directions--prev {
    float: left;
    margin-left: 20px;
  }
}
</style>



<script>
import data from "../json/Ressources.json";
import countService from "../services/countService.js";
export default {
  data() {
    return {
      count: countService.value()
    };
  },
  methods: {
    dayPassed() {
      countService.increment();
    }
  }
};
</script>
