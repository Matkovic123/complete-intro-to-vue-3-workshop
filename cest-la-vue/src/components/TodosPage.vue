<script setup>
import { ref } from "vue";
const todos = ref([]);
const alertText = "WOLOLO";

defineProps({ myProp: String, anotherProp: Number });
const emit = defineEmits(["myEmit"]);

const fetchData = async () => {
  const rawData = await fetch("https://jsonplaceholder.typicode.com/todos");
  const jsonData = await rawData.json();
  return jsonData.slice(0, 10);
};

const doEmit = (arg1) => {
  emit("myEmit", { text: arg1 });
};

todos.value = await fetchData();
</script>
<template>
  <h2>{{ this.myProp }}</h2>
  <button @click="doEmit(alertText)">Click me for emit</button>
  <h2>{{ this.anotherProp }}</h2>
  <pre>{{ this.todos }}</pre>
</template>
