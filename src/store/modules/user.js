import * as user from "@/api/user";
import * as menu from "@/api/menu";
import * as types from "../action-types";
import {
  setLocal,
} from "@/utils/local";
// removeToken
import {
  getToken,
  setToken,
} from "@/utils/auth";
import router from "@/router/index";
import per from "@/router/permission";

// 过滤的当前用户支持的路由
const filterRouter = authList => {
  let auths = authList.map(item => item.auth);
  const filter = authRoutes => {
    let result = authRoutes.filter(route => {
      if (auths.includes(route.meta.auth, )) {
        if (route.children) {
          route.children = filter(route.children);
        }
        return route;
      }
    }, );
    return result;
  };
  return filter(per);
};

export default {
  state: {
    userInfo: {}, // 用户信息
    hasPermission: false, // 代表用户权限
    menuPermission: false,
    token: getToken(),
    menuList: [], // 左侧菜单权限
    menuLeftList: []
  },
  mutations: {
    [types.SET_USER](state, payload) {
      state.userInfo = payload;
      if (payload && payload.token) {
        setLocal("token", payload.token);
      } else {
        localStorage.clear("token");
      }
    },
    [types.SET_PERMISSION](state, has) {
      state.hasPermission = has;
    },
    [types.SET_MENU_PERMISSION](state, has) {
      state.menuPermission = has;
    },
    [types.UPDATE_MENU_LIST](state, data) {
      state.menuList = data;
    },
    [types.SET_MENU_LIST](state, data) {
      state.menuLeftList = data;
    }
  },
  actions: {
    async [types.SET_MENU_LIST]({
      commit
    }, data) {
      console.log('data==:', data);
      // 后端返回的用户的权限
      let authList = data;

      let str = "";
      authList.forEach((value) => {
        str += value.code + ",";
      });

      const newMenu = [];
      const routes = router.options.routes;
      const arr = [];
      let LIST = [];
      routes.forEach((value) => {
        if (value.children) {
          value.children.forEach((v) => {
            const children = [];
            if (v.meta && v.meta.permission && str.includes(v.meta.permission)) {
              children.push(v);
              const row = {
                path: value.path,
                component: value.component,
                name: value.name,
                meta: value.meta,
                children: children,
              };
              newMenu.push(row);
            }
          });
          if (value.path === '/' || value.path === '/home') {
            arr.push(value);
          }
          LIST = [...arr, ...newMenu];
        }
      });
      commit(types.SET_MENU_LIST, LIST);
    },
    async [types.UPDATE_MENU_LIST]({
      commit,
      dispatch
    }, code) {
      const result = await menu.updateMenu({
        code
      });
      commit(types.UPDATE_MENU_LIST, result.data);
      dispatch(types.SET_MENU_LIST, result.data);
    },
    async [types.MENU_LIST]({
      commit
    }) {
      const result = await menu.getMenu();
      commit(types.UPDATE_MENU_LIST, result.data);
      return result.data;
    },
    // dispatch
    async [types.SET_USER]({
      commit,
    }, {
      payload,
      hasPermission,
    }, ) {
      commit(types.SET_USER, payload, );
      commit(types.SET_PERMISSION, hasPermission, );
      //设置token
      const token = "token";
      setToken(token);
    },
    // 登录
    async [types.USER_LOGIN]({
      dispatch,
    }, userInfo) {
      let result = await user.login(userInfo);
      dispatch(types.SET_USER, {
        payload: result.data,
        hasPermission: true,
      });
      return result;
    },
    // 验证是否登录
    async [types.USER_VALIDATE]({
      dispatch,
    }, ) {
      if (!getToken()) return false;
      try {
        let result = await user.validate();
        dispatch(types.SET_USER, {
          payload: result.data,
          hasPermission: true,
        }, );
        return true;
      } catch (e) {
        dispatch(types.SET_USER, {
          payload: {},
          hasPermission: false,
        });
      }
    },
    async [types.ADD_ROUTE]({
      commit,
      state,
    }, ) {
      // 后端返回的用户的权限
      let authList = state.userInfo.authList;
      if (authList) {
        // 开始 规划路由
        let routes = filterRouter(authList);
        let route = router.options.routes.find(
          item => item.path === "/manager",
        );
        route.children = routes;
        router.addRoutes([route]);
        commit(types.SET_MENU_PERMISSION, true, );
      }
    },
  },
};
