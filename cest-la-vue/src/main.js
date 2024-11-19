import { createApp } from "vue";
import { createWebHashHistory, createRouter } from "vue-router";

import App from "./App.vue";

const routes = [
  { path: "/", component: () => import("./views/HomeView.vue") },
  { path: "/custom", component: () => import("./views/CustomView.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
