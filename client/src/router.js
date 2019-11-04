import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Auth from "./views/Auth.vue";
import Account from "./views/Account.vue";
import store from "./store";

Vue.use(Router);

let AuthRoutes = {
  path: "/auth",
  component: Auth,
  name: "Auth",
  redirect: "/auth/login",
  meta: {
    requiresGuest: true
  },
  children: [
    {
      path: "login",
      name: "Login",
      component: () => import("@/components/Auth/Login.vue")
    },
    {
      path: "register",
      name: "Register",
      component: () => import("@/components/Auth/Register.vue")
    }
  ]
};

const AccountRoutes = {
  path: "/accounts",
  component: Account,
  name: "Accounts",
  redirect: "/accounts/products",
  meta: {
    requiresAuth: true
  },
  children: [
    {
      path: "products",
      name: "Products",
      component: () => import("@/components/Dashboard/Products.vue")
    },
    {
      path: "profile",
      name: "Profile",
      component: () => import("@/components/Dashboard/Profile.vue")
    },
    {
      path: "test",
      name: "Test",
      component: () => import("@/components/Dashboard/Test.vue")
    }
  ]
};

/**
 * Main Router object to contain all the rotues
 */
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    AuthRoutes,
    AccountRoutes
  ]
});

/**
 * Route Authentication Function to validate the authenticated routes
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["Auth/isLoggedIn"]) {
      next("/auth/login");
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters["Auth/isLoggedIn"]) {
      next("/accounts/products");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
