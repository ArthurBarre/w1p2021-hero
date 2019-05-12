<template>
<body>
  <div v-on:click="moreDay" class="test"></div>
</body>
</template>


<style>
.test {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>

<script>
export default {
  data() {
    return {
      game: {
        day: 1
      }
    };
  },
  methods: {
    moreDay: function() {
      this.game.day++;
      console.log(this.game.day);
    },
    day: function() {
      this.game.day++;
      console.log(this.game.day);
    }
  }
};
</script>




