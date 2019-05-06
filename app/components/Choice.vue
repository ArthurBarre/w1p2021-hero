<template>
  <button class="button">{{answer}}</button>
</template>

<script>
export default {
  name: "Choice",
  data() {
    return {
      pops: ["answer"],
      data: {
        posts: [
          { id: 1, title: "Mon initiation avec Vue" },
          { id: 2, title: "Blogger avec Vue" },
          { id: 3, title: "Pourquoi Vue est tellement cool" }
        ]
      }
    };
  }
};
</script>
