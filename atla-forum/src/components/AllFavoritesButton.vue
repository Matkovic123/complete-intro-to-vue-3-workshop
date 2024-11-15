<script>
export default {
  emits: ["favoriteEveryone"],
  methods: {
    makeEveryoneFavorite() {
      this.$emit("favoriteEveryone");
    },
  },
};
</script>

<template>
  <button @click="makeEveryoneFavorite">FavoriteEveryone!</button>
</template>
