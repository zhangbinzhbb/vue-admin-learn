<template>
  <div class="navbar">
    <div class="navber-left">
      <div class="logo">
        <img src="@images/logo.png"
             alt="" />
      </div>
      <div class="select-content">
        <a-select v-model="value">
          <a-select-option v-for="item in optionsList"
                           :key="item.value"
                           :value="item.value">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </div>
    </div>
    <div class="navber-right">
      <HeaderSearch class="header-item" />
      <div class="r-name">
        <span>大屏展示</span>
        <span>资源编排</span>
        <span>
          WinCloud云管理平台
          <a-icon type="caret-down" />
        </span>
      </div>
      <span class="b"></span>
      <div class="icon-group">
        <a-icon type="user" />
        <a-icon type="message" />
        <a-icon type="history" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch";
export default {
  name: "Navbar",
  components: {
    HeaderSearch,
  },
  data() {
    return {
      value: "1",
      optionsList: [
        {
          value: "1",
          label: "WinStore存储集群名称1",
        },
        {
          value: "2",
          label: "WinStore存储集群名称2",
        },
        {
          value: "3",
          label: "WinStore存储集群名称3",
        },
      ],
      searchActive: false,
    };
  },
};
</script>

<style lang="less">
@import "index";
</style>
