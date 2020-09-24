<template>
  <div class="app-wrapper">
    <Navbar @mouseenter.native="mouseenterEvent" />
    <div class="main-container">
      <Sidebar ref="sidebar"
               class="sidebar-container"
               @dialog-show="maskShow = true" />

      <AppMain @mouseenter.native="mouseenterEvent"
               :class="maskShow?'sider-class-active':''" />
    </div>
    <div class="drawer-section"
         :class="visible?'drawer-section-open':''"
         @click="showDrawer">
      <a-drawer title="设置主题"
                width="276px"
                placement="right"
                :closable="false"
                :mask="false"
                :after-visible-change="afterVisibleChange"
                :visible="visible"
                @close="onClose">
        <Setting />
      </a-drawer>
      <a-icon :type="visible?'close':'setting'" />
    </div>

    <div v-if="maskShow"
         class="yu-drawer-mask"
         @mouseenter="mouseenterEvent"></div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from "./components";
import Setting from "../components/Setting";

export default {
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Setting,
  },
  data() {
    return {
      maskShow: false,
      showSetting: false,
      visible: false,
    };
  },
  methods: {
    mouseenterEvent() {
      this.$refs.sidebar.dialogShow = false;
      this.$refs.sidebar.isCollapse = false;
      this.maskShow = false;
    },
    afterVisibleChange(val) {
      console.log("visible", val);
    },
    showDrawer() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin/index.less";
.app-wrapper {
  .clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.sider-class-active {
  padding-left: 240px !important;
}

.drawer-section {
  right: 0;
  top: 34%;
  position: fixed;
  z-index: 100;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fa541c;
  border-radius: 4px 0 0 4px;
  color: #fff;
  cursor: pointer;
  i {
    font-size: 26px;
  }
}

.drawer-section-open {
  right: 276px !important;
}

.yu-drawer-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: rgba(0, 0, 0, 0.45);
  filter: alpha(opacity=45);
  transition: opacity 0.3s linear, height 0s ease 0.3s;
  width: 100%;
  height: 100%;
}
</style>
