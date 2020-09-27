<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import themeUtil from "@/utils/themeUtil";
export default {
  name: "App",
  watch: {
    "theme.mode": function (val) {
      let closeMessage = this.$message.loading(
        `您选择了主题模式 ${val}, 正在切换...`
      );
      themeUtil.changeThemeColor(this.theme.color, val).then(closeMessage);
    },
    "theme.color": function (val) {
      let closeMessage = this.$message.loading(
        `您选择了主题色 ${val}, 正在切换...`
      );
      themeUtil.changeThemeColor(val, this.theme.mode).then(closeMessage);
    },
  },
  created() {
    console.log("===app===");
  },
  mounted() {},
  computed: {
    ...mapState("setting", ["theme"]),
  },
  methods: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: @globalBg;
}
</style>
