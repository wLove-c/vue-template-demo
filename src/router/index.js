import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const constantRouters = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home")
  },
  {
    path: "/statistic",
    name: "Statistic",
    component: () => import("@/views/statistic")
  }
];
const router = new Router({
  mode: "history",
  routes: constantRouters
});

export default router;
