<script setup>
import { userList } from "../composables/useUserStore";
import { computed } from "vue";
import { useItemTypeStore } from "../stores/itemTypeStore";

const shortUserList = computed(() => {
  return userList.value.splice(0, 5);
});
const itemTypeStore = useItemTypeStore();
</script>

<template>
  <main>
    <h1>Welcome to <br />C'est La Vue</h1>
    <p>
      This is a place to manage various things: todos, users, posts, etc.
      Whatever your mind desires!
    </p>
    <hr />
    <p>Pinia data: {{ itemTypeStore.name }}</p>
    <button @click="itemTypeStore.rename">Pinia button</button>
    <ul>
      <li v-for="user in shortUserList" :key="user.name">
        {{ user.name }}
      </li>
    </ul>
  </main>
</template>

<style></style>
