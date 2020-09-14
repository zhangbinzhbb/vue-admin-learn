export default [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue")
  },
  {
    path: "/lan",
    name: "Lan",
    component: () => import(/* webpackChunkName: "lan" */ "@/views/Rong.vue")
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/views/Detail.vue")
  },
  {
    path: "/test",
    name: "Test",
    component: () => import(/* webpackChunkName: "test" */ "@/views/Test.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: () => import(/* webpackChunkName: "test" */ "@/views/Form.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404.vue")
  }
];
