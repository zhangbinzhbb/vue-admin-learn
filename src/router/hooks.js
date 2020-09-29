import store from "../store";

// import NProgress from "nprogress"; // progress bar
// NProgress.configure({ showSpinner: false }); // NProgress Configuration

const loginPermission = async function (to, from, next, ) {
  console.log("===loginPermission===");
  const data = await store.dispatch("user/menuList");
  console.log('data--1:', data);
  store.dispatch("user/setMenuList", data);
  // 先判断是否需要登录
  const needLogin = to.matched.some(item => item.meta.needLogin);
  // let flag = await store.dispatch("user/userValidate");

  const flag = true;
  if (!store.state.user.hasPermission) {
    if (needLogin) { // 没权限需要登录,那就校验是否登陆过
      if (!flag) { // 没登陆过
        next("/login");
      } else {
        next();
      }
    } else { // 没权限不需要登录
      next();
    }
  } else { // 有权限
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  }
};

// 路由权限动态添加
export const menuPermission = async function (to, from, next) {
  console.log("===menuPermission===");
  if (store.state.user.hasPermission) { // 添加路由这里需要判断是否添加过路由了
    if (!store.state.user.menuPermission) {
      store.dispatch("user/addRoute");
      next({
        ...to,
        replace: true,
      }, );
    } else {
      next();
    }
  } else {
    next();
  }
};

export default {
  loginPermission,
  menuPermission,
};
