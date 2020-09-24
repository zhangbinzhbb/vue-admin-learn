<template>
  <section class="app-main">
    <div class="app-main-view">
      <transition name="fade-transform"
                  mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style lang="less" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  margin-top: @headerHeight;
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 72px;
  .app-main-view {
    padding: 16px 24px 16px;
    background: #fff;
  }
}

.fixed-header + .app-main {
  padding-top: 50px;
}
</style>
