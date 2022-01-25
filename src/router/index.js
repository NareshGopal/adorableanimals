import Vue from "vue";
import VueRouter from "vue-router";
import Doggie from "../Views/Doggie.vue";
import Kitten from "../Views/Kitten.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/doggie",
  },
  {
    path: "/doggie",
    name: "Doggie",
    component: Doggie,
  },
  {
    path: "/kitten",
    name: "Kitten",
    component: Kitten,
  },
];

export default new VueRouter({
  base: process.env.BASE_URL,
  routes,
});
