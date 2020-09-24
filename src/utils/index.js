/*
 * @Author: zhangbb
 * @Date: 2020-09-22 14:11:59
 * @Last Modified by: zhangbb
 * @Last Modified time: 2020-09-22 14:11:59
 */

import * as filters from "../filters"; // global filters
import Popup from "@/components/Popup/index";

export default {
  install: (Vue) => {
    // 绑定到vue实例的原型链上
    Vue.prototype.$popup = Popup.install;
    // register global utility filters
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key]);
    });
  }
};
