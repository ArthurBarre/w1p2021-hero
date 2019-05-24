<template>
  <div class="inventoryChild">
    <h2>
      {{item}}
    </h2>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inventoryChild {
  background-color: cornflowerblue;
  color: #fff;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inventoryChild:hover {
  transform: scale(1.1);
  transition: ease-in-out 0.2s;
}
.small {
  width: 100px;
  height: 100px;
}
.medium {
  width: 200px;
  height: 200px;
}
.large {
  width: 300px;
  height: 300px;
}
</style>


<script>
export default {
  name: "inventoryChild",
  props: ['item'],
  name:'item'
};
</script>
