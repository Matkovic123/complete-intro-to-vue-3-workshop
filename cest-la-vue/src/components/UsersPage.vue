<script>
export default {
  created() {
    this.fetchData();
  },
  data: () => ({
    users: [],
  }),
  methods: {
    async fetchData() {
      const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await rawData.json();
      this.users = jsonData.slice(0, 10);
    },
  },
};
</script>
<template>
  <pre>{{ this.users }}</pre>
</template>
