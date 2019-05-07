<template>
  <p class="button">{{choice}}</p>
</template>

<script>
export default {
  name: "Choice",
  data() {
    return {
      props: "choice",
      answers: [
        { id: 1, content: "Mon initiation avec Vue" },
        { id: 2, content: "Blogger avec Vue" },
        { id: 3, content: "Pourquoi Vue est tellement cool" }
      ]
    };
  }
};
</script>
