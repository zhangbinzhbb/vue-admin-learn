import {
  ADMIN
} from '@/config/default';

import {
  getLocalSetting
} from '@/utils/themeUtil';

const localSetting = getLocalSetting(true);
export default {
  namespaced: true,
  state: {
    palettes: ADMIN.palettes,
    ...localSetting
  },
  getters: {},
  mutations: {
    setTheme(state, theme) {
      const theme1 = {
        color: "#1890ff",
        mode: "dark",
        success: "#52c41a",
        warning: "#faad14",
        error: "#f5222d"
      };
      state.theme = theme1;
    },
  }
};
