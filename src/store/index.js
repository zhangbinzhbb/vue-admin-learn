import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const rootModule = {
  state: {},
  mutations: {},
  actions: {},
  modules: {},
};

const files = require.context("./modules/", false, /\.js$/, );
files.keys().forEach((key) => {
  let store = files(key).default;
  const moduleName = key.replace(/^\.\//, "").replace(/\.js$/, "");
  const modules = rootModule.modules || {};
  modules[moduleName] = store;
  modules[moduleName].namespaced = true;
  rootModule.modules = modules;
});
const store = new Vuex.Store(rootModule);
export default store;
