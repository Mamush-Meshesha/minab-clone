import { createRouter, createWebHistory } from "vue-router";
import Service from "../views/Service.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/service",
      name: "service",
      component: () => import("../views/Service.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router;
