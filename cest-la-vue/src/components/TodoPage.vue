<script setup>
import { reactive } from "vue";
import { counter } from "../composable/useState";
const state = reactive({ todos: [] });
const fetchTodos = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((json) => json.splice(0, counter.value));
  return result;
};
state.todos = await fetchTodos();
</script>

<template>
  <div>
    <h2>Todos:</h2>
    <ul>
      <li v-for="todo in state.todos" :key="todo">
        <pre>{{ todo }}</pre>
      </li>
    </ul>
  </div>
</template>
