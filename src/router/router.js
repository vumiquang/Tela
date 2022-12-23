import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../layout/MainPage";
import HomePage from "../views/HomePage";
import PageNotFound from "../layout/PageNotFound";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainPage,
    name: "MainPage",
    children: [
      {
        path: "",
        component: HomePage,
        name: "Home",
      },
    ],
  },
  {
    path: "*",
    component: PageNotFound,
    name: "PageNotFound",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
