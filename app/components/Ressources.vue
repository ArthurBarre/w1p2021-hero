<template>
  <div class="ressources">
    <h2 class="ressources__title">Ressources</h2>
    <div class="ressources__food template">
      <Foods/>
    </div>
    <div class="ressources__water template">
      <Waters/>
    </div>
    <div class="ressources__buttons">
      <div class="ressources__buttons--food">
        <Food/>
      </div>
      <div class="ressources__buttons--water">
        <Water/>
      </div>
    </div>
    <div class="ressources__directions template">
      <span class="ressources__directions--prev">prev</span>
      <span class="ressources__directions--next">next</span>
    </div>
  </div>
</template>

<style  lang="scss" scoped>
.size {
  width: 100px;
  height: 100px;
}
.ressources {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
}
.template {
  width: 100%;
}
.ressources__title {
  float: left;
  font-size: 20px;
  margin: 60px 0 30px 15px;
}
.ressources__directions {
  height: 90px;
  .ressources__directions--next {
    float: right;
    margin-top: 60px;

    margin-right: 20px;
  }
  .ressources__directions--prev {
    float: left;
    bottom: 0;
    margin-top: 60px;
    margin-left: 20px;
  }
}
.ressources__food {
  height: 120px;
  background-color: grey;
}
.ressources__water {
  height: 100px;
  background-color: blue;
}
.ressources__buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 0 auto;
}

.ressources__buttons--food {
  margin-right: 30px;
}
.ressources__buttons > * {
  transform: scale(1.5);
}
</style>

<script>
import Foods from "./Foods.vue";
import Waters from "./Waters.vue";

import Food from "./Food.vue";
import Water from "./Water.vue";
export default {
  components: {
    Foods,
    Waters,
    Water,
    Food
  }
};
</script>