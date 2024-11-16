<script>
export default {
  created() {
    this.fetchData();
  },
  data: () => ({
    todos: [],
  }),
  methods: {
    async fetchData() {
      const rawData = await fetch("https://jsonplaceholder.typicode.com/todos");
      const jsonData = await rawData.json();
      this.todos = jsonData.slice(0, 10);
    },
  },
};
</script>
<template>
  <pre>{{ this.todos }}</pre>
</template>
