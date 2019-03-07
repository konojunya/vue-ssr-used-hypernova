import Vue from "vue";
import VueRouter from "vue-router"

Vue.use(VueRouter);

import Hello from "./components/Sample/index.vue";

const routes = [{
  path: "/sample",
  component: Hello
}];

const router = new VueRouter({
  mode: "history",
  routes
});

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    router
  }).$mount("#app");
  window.router = app.$router
});