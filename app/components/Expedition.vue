<template>
  <div class="event">
    <div class="event_els">
      <div class="event__picture"></div>
      <h3 class="event__title">{{event}}</h3>
    </div>
  </div>
</template>
<style scoped>
.event {
  width: 100%;
  height: 100%;
}
.event__els {
  display: flex;
  justify-content: center;
  width: 40%;
}
.event__picture {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-image: url(../assets/img/event.png);
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 25px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
}
.event__title {
  display: flex;
  justify-content: center;
  width: max-content;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
</style>

<script>
export default {
  data() {
    return {
      event: "Expéditions de demain"
    };
  }
};
</script>
