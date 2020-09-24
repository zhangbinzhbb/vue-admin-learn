import Vue from "vue";
import VueRouter from "vue-router";
import hooks from "./hooks";

Vue.use(VueRouter);

// 像前端的读写文件 路径 读取的子目录
const files = require.context("./", false, /\.router.js$/);
const routes = [];
files.keys().forEach(key => {
  routes.push(...files(key, ).default);
});

console.log('routes:', routes);

// 解决router版本过高 重复点击路由控制台报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

// 入口文件
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 遍历hook文件添加钩子方法
Object.values(hooks).forEach(hook => {
  router.beforeEach(hook.bind(router)); // 将this绑定成router
});

export default router;
