<script>
import BenderStatistics from "./components/BenderStatistics.vue";
import AllFavoritesButton from "./components/AllFavoritesButton.vue";
import BaseLayout from "./components/BaseLayout.vue";

export default {
  components: {
    BaseLayout,
    BenderStatistics,
    AllFavoritesButton,
  },
  data: () => ({
    newCharacter: {
      name: "",
      element: [],
    },
    characterList: [
      {
        name: "Aang",
        element: ["Air", "Earth", "Water", "Fire"],
      },
      {
        name: "Zuko",
        element: ["Fire"],
      },
      {
        name: "Toph",
        element: ["Earth"],
      },
      {
        name: "Katara",
        element: ["Water"],
      },
    ],
    favoriteList: [],
  }),
  methods: {
    addNewCharacter() {
      this.characterList.push(this.newCharacter);
      this.newCharacter = { name: "" };
    },
    favoriteCharacter(character) {
      this.favoriteList.push(character);
    },
    favoriseEveryone() {
      this.characterList.forEach((character) => {
        this.favoriteList.push(character);
      });
    },
  },
};
</script>

<template>
  <BaseLayout>
    <template v-slot:first>My random slot shit 1</template>
    <template v-slot:second>My random slot shit 2</template>
  </BaseLayout>
  <BenderStatistics :characters="characterList" />
  <h2>Characters</h2>
  <p v-if="characterList.length === 0">There are no characters</p>
  <ul v-else-if="characterList.length % 2 === 0">
    <li
      v-for="(character, index) in characterList"
      :key="`even-character-${index}`"
    >
      <p>{{ character.name }}</p>
      <button @click="favoriteCharacter(character)">⭐ Favorite</button>
    </li>
  </ul>
  <p v-else>There are odd characters!</p>
  <h2>Favorite Characters</h2>
  <AllFavoritesButton @favoriteEveryone="favoriseEveryone" />
  <ul v-if="favoriteList.length > 0">
    <li
      v-for="(character, index) in favoriteList"
      :key="`odd-character-${index}`"
    >
      {{ character }}
    </li>
  </ul>
  <p v-else>No favorite characters yet!</p>
  <h2>New Character</h2>
  <pre>{{ newCharacter }}</pre>
  <label for="character-name">Name</label>
  <input
    type="text"
    v-model="newCharacter.name"
    @keyup.enter="addNewCharacter"
  />
  <p>
    <span
      v-for="(character, index) in characterList"
      :key="`comma-list-character-${index}`"
      >{{ character.name }}{{ index === characterList.length - 1 ? "" : ", " }}
    </span>
  </p>
</template>
