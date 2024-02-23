import "./style.css";
import App from "./App.vue";
import { createApp } from "vue";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
