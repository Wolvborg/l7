import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/matches",
      name: "matches",
      component: () => import("../views/Matches.vue"),
    },
    {
      path: "/teams",
      name: "teams",
      component: () => import("../views/Teams.vue"),
    },
    {
      path: "/players",
      name: "players",
      component: () => import("../views/Players.vue"),
    },
    {
      path: "/stadiums",
      name: "stadiums",
      component: () => import("../views/Stadiums.vue"),
    },
  ],
});

export default router;
