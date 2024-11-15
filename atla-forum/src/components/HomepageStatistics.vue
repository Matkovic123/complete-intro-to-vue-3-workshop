<script>
export default {
  props: {
    characterListProp: {
      type: Array,
      required: true,
    },
  },
  data: () => {
    return {};
  },
  computed: {
    benderStatistics() {
      const elements = ["Air", "Earth", "Fire", "Water"];
      const statistics = {
        Air: 0,
        Earth: 0,
        Water: 0,
        Fire: 0,
      };
      console.log(this.characterListProp);
      this.characterListProp.forEach((character) => {
        elements.forEach((element) => {
          if (character.element.indexOf(element) > -1) {
            statistics[element] += 1;
          }
        });
      });

      return statistics;
    },
  },
};
</script>

<template>
  <h2>Statistics</h2>
  <ul>
    <li v-for="(stat, type) in benderStatistics" :key="type">
      {{ type }}: {{ stat }}
    </li>
  </ul>
</template>
