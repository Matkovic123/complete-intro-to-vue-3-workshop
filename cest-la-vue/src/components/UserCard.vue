<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    bkgColour: "black",
  }),
};
</script>

<template>
  <input type="color" v-model="bkgColour" />
  <li :class="$style.userCard">{{ user.name }}: {{ user.website }}</li>
</template>

<style module>
.userCard {
  border: 2px solid #222;
  padding: 10px;
  background-color: v-bind(bkgColour);
}
</style>
