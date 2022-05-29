import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      guest: true,
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { getAuth, onAuthStateChanged, User } from "firebase/auth";
const auth = getAuth();

function getUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async (to, from, next) => {
  const user = await getUser();

  if (!to.meta.guest && !user) {
    next({ path: "/login" });
    return;
  }

  next();
});
