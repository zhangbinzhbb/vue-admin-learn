/* Layout */
import Layout from "@/layout";

const constantRoutes = [{
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [{
      path: "/redirect/:path(.*)",
      component: () =>
        import( /* webpackChunkName: "redirect" */ "@/views/redirect"),
    }],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [{
      path: "home",
      component: () =>
        import( /* webpackChunkName: "home" */ "@/views/Home.vue"),
      name: "Home",
      meta: {
        title: "总览",
        icon: "home",
        needLogin: true
      }
    }],
  },
  {
    path: "/home",
    component: Layout,
    nav: true,
    children: [{
      path: "index",
      component: () =>
        import( /* webpackChunkName: "home" */ "@/views/Home.vue"),
      name: "Home",
      meta: {
        title: "所有功能",
        icon: "allFun",
        needLogin: true
      }
    }],
  }
];
export default constantRoutes;
