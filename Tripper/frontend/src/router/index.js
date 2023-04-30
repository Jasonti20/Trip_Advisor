import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/mainpage",
    name: "mainpage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainPage.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/plan",
    name: "plan",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlanView.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/saved-plan",
    name: "saved-plan",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SavedPlanView.vue"),
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert("You've must been logged to access this area");
      router.push("/");
    }
  } else {
    next();
  }
});

export default router;