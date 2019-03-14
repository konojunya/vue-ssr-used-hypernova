export const routes = [{
    path: "/",
    load: "App",
    component: () => import("./App.vue")
  },
  {
    path: "/hoge",
    load: "Hoge",
    component: () => import("./Hoge/index.vue")
  }
];