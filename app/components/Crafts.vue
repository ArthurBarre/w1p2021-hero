<template>
  <div class="craft__box">
    <h3>Construction</h3>
    <p
      class="craft__explications"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eligendi sapiente. Expedita sequi quisquam, repudiandae vel deserunt cum similique iste eaque animi, eos ipsum at qui reprehenderit pariatur architecto accusantium.</p>
    <br>
    <br>
    <p class="craft__questions">Voulez vous faure un craft ?</p>
    <div class="craft__wrapper">
      <div class="firstEl element"></div>
      <span class="more">+</span>
      <div class="secondEl element"></div>
      <span class="equal">=</span>
      <div class="resultEl element"></div>
    </div>
    <div class="craft__directions template">
      <span class="craft__directions--prev">prev</span>
      <span class="craft__directions--next">next</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
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
.craft__directions {
  transform: translateY(245px);
  .craft__directions--next {
    float: right;
    margin-right: 20px;
  }
  .craft__directions--prev {
    float: left;
    margin-left: 20px;
  }
}
</style>



<script>
import Craft from "./craft.vue";
export default {
  components: {
    Craft
  }
};
</script>
