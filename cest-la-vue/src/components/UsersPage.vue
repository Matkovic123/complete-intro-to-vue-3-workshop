<script>
import { reactive } from "vue";

export default {
  async setup() {
    const state = reactive({
      userList: [],
    });

    const fetchData = async () => {
      const rawData = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await rawData.json();
      const result = jsonData.slice(0, 10);
      return result;
    };
    state.userList = await fetchData();

    return { state };
  },
};
</script>
<template>
  <pre>{{ this.state.userList }}</pre>
</template>
