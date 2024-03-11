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
    {
      path: "/team",
      name: "team",
      component: () => import("../views/team.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/project.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/contact.vue"),
    },
  ],
});

export default router;
