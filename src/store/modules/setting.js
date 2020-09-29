import config from '@/config';
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
    ...config,
    ...localSetting
  },
  getters: {},
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  }
};
