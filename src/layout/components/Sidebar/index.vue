<template lang="html">
	<div class="scrollbar-wrapper" :class="!isCollapse?'scrollbar-wrapper-hide':''">
    <div v-if="isCollapse">
      <div v-for="(item,index) in menuLeftList" :key="index" class="yu-menu">
        <div v-for="(subItem,sindex) in item.children"
          :key="sindex"
          :class="activeTitle === (`${item.path}/${subItem.path}`) || (item.path==='/home'&& dialogShow)?'yu-menu-item-active':''"
          class="yu-menu-item">
          <div class="yu-menu-item-left" @mouseover="mouseOverChange(item)">
            <div class="yu-icon">
              <item v-if="subItem.meta" :icon="subItem.meta && subItem.meta.icon" />
            </div>
            <span class="yu-name" @click="toRouterPath(item)">{{ subItem.meta.title }}</span>
            <a-icon v-if="subItem.meta.permission" type="close" class="yu-close" @click="delMenuItem(subItem.meta.permission)" />
          </div>
          <div v-if="item.path !== '/'">
            <img v-if="!item.nav" class="l-drop-img" src="@/assets/images/menu.png" />
            <img v-else class="l-drop-img" src="@/assets/images/linkRight.png" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="scrollbar-wrapper-collapse" @mouseover="isCollapse = true">
     <div v-for="(item,index) in menuLeftList" :key="index" class="yu-collapse-menu">
       <div v-for="(subItem,sindex) in item.children"
          :key="sindex">
            <div class="yu-collapse-icon">
              <item v-if="subItem.meta" :icon="subItem.meta && subItem.meta.icon" />
            </div>
          </div>
     </div>
    </div>
    <transition>
      <div v-if="dialogShow" class="yu-dialog-menu">
        <DialogMenu />
      </div>
    </transition>
	</div>
</template>

<script>
import Item from "./Item";
import DialogMenu from "./DialogMenu";
import { mapState } from "vuex";
export default {
  name: "Sidebar",
  components: { Item, DialogMenu },
  props: {},
  data() {
    return {
      isCollapse: false,
      dialogShow: false,
      activeTitle: "//home",
    };
  },
  computed: {
    ...mapState("user", ["menuLeftList"]),
  },
  methods: {
    toRouterPath(item) {
      console.log("item,", item);
      const { path, children, nav } = item;
      let PATH = `${path}/${children[0].path}`;
      if (path === "/") {
        PATH = "/";
      }

      this.activeTitle = PATH;
      if (nav) {
        this.dialogShow = false;
        return;
      }

      this.$router.push({ path: PATH });
    },
    mouseOverChange(item) {
      const { nav } = item;
      if (nav) {
        this.dialogShow = true;
        this.$emit("dialog-show");
      } else {
        this.$emit("dialog-show-a");
      }
    },
    delMenuItem(code) {
      this.$store.dispatch("user/updateMenuList", code);
    },
  },
};
</script>

<style lang="less" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}
.scrollbar-wrapper-hide {
  width: 48px !important;
  .scrollbar-wrapper-collapse {
    width: 100%;
    height: 100%;
    .yu-collapse-menu {
      & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 44px;
      }
    }
    .yu-collapse-icon {
      font-size: 16px;
    }
  }
}
.scrollbar-wrapper-dialog {
  :hover {
    .yu-dialog-menu {
      display: inline-block !important;
    }
  }
}
.scrollbar-wrapper {
  .yu-menu {
    .yu-menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      padding: 0 16px;
      &:hover {
        background: @menuHover;
        .l-drop-img {
          display: inline-block !important;
        }
        .yu-close {
          display: inline-block !important;
        }
      }

      .l-drop-img {
        cursor: pointer;
        display: none;
      }
      .yu-menu-item-left {
        display: flex;
        font-size: 14px;
        .yu-close {
          padding-top: 4px;
          cursor: pointer;
          display: none;
        }
        .yu-icon {
          font-size: 16px;
          color: #333;
        }
        .yu-name {
          font-weight: 400;
          padding-left: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 120px;
          text-align: left;
          cursor: pointer;
          color: @menuText;
        }
      }
    }
    .yu-menu-item-active {
      background: @menuActive !important;
      margin-bottom: 4px;
      .l-drop-img {
        display: inline-block !important;
      }
      .yu-name {
        pointer-events: none;
        color: @menuActiveText !important;
        font-weight: 500 !important;
      }
      .yu-close {
        display: inline-block !important;
      }
    }
  }
  .yu-dialog-menu {
    width: @menuDialogWidth;
    background: @menuDialogBg;
    box-shadow: @menuDialogBoxShadow;
    position: absolute;
    top: 0;
    left: @sideBarWidth;
    height: 100%;
    color: @menuDialogColor;
    font-size: 14px;
    padding: 24px 0 0 48px;
    text-align: left;
  }
}
</style>
