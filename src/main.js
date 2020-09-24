import Vue from "vue";
import Antd from 'ant-design-vue';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./icons"; // icon
import myComponents from './utils'; /* 按需引入UI组件及全局方法 */

//Less 主题
import './theme/index.less';

// css
import "@/styles/index.less"; // global css
import 'animate.css/source/animate.css';
import "normalize.css/normalize.css"; // a modern alternative to CSS resets

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(myComponents);

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */

// 通过环境变量来判断是否需要加载启用
if (process.env.NODE_ENV === "production") {
  const {
    mockXHR,
  } = require("../mock");
  mockXHR();
}

// ant-design-vue 按需组件引入，导致主题色失效
// import {
//   Button,
//   Icon,
//   Input,
//   Select,
//   AutoComplete,
//   Drawer,
//   Modal
// } from "ant-design-vue";

// Vue.component(Button.name, Button);
// Vue.component(Icon.name, Icon);
// Vue.component(Input.name, Input);
// Vue.component(Select.name, Select);
// Vue.component(Select.Option.name, Select.Option);
// Vue.component(Select.OptGroup.name, Select.OptGroup);
// Vue.component(AutoComplete.name, AutoComplete);
// Vue.component(AutoComplete.Option.name, AutoComplete.Option);
// Vue.component(AutoComplete.OptGroup.name, AutoComplete.OptGroup);
// // Vue.component(Drawer.name, Drawer);
// // Vue.component(Modal.name, Modal);

// // Vue 2.x使用ant-design-vue 1.6.2版本,jsx写法下弹出组件报ant-portal指令异常解决姿势
// // 来源:https://blog.csdn.net/crper/article/details/106672400
// Vue.use(Drawer);
// Vue.use(Modal);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
