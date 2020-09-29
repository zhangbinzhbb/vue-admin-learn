<template>
  <div class="dialog-menu-contanier">
    <div class="header-search">
      <a-input placeholder="搜索关键字">
        <a-icon slot="prefix"
                type="search" />
      </a-input>
    </div>
    <div class="search-record">
      <span class="label">最近访问：</span>
      <div class="value">
        <span class="tag">服务管理</span>
        <span class="tag">VDC管理</span>
        <span class="tag">资源入云</span>
      </div>
    </div>
    <div class="menu-content">
      <div v-for="(item,index) in subMenu"
           :key="index"
           class="menu-item">
        <h2 v-if="item.meta"
            class="title">{{ item.meta.title }}</h2>
        <div class="sub-menu-content">
          <div v-for="(sitem,sindex) in item.children"
               :key="sindex"
               :class="menuListStr.includes(sitem.meta.permission)?'sub-menu-item-active':''"
               class="sub-menu-item">
            <div class="sub-menu-item-left">
              <item v-if="sitem.meta"
                    :icon="sitem.meta && sitem.meta.icon" />
              <span class="sub-menu-name">{{ sitem.meta.title }}</span>
            </div>
            <div class="star"
                 @click="toLighten(sitem.meta.permission)">
              <img v-if="!menuListStr.includes(sitem.meta.permission)"
                   src="@/assets/images/star.png" />
              <img v-else
                   src="@/assets/images/starActive.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import componentsRouter from "@/router/components.router.js";
import Item from "./Item";

import { mapState } from "vuex";
export default {
  name: "DialogMenu",
  components: { Item },
  data() {
    return {
      subMenu: [],
    };
  },
  computed: {
    ...mapState("user", ["menuList"]),
    menuListStr() {
      const data = this.menuList;
      let str = "";
      data.forEach((value) => {
        str += value.code + ",";
      });
      return str;
    },
  },
  created() {
    this.subMenu = componentsRouter;
  },
  methods: {
    toLighten(code) {
      this.$store.dispatch("user/updateMenuList", code);
    },
  },
};
</script>

<style lang="less">
@import "~@/styles/mixin/index.less";
.dialog-menu-contanier {
  .header-search {
    display: flex;
    padding-left: 8px;
    .ant-input-affix-wrapper {
      width: 360px;
      height: 32px;
      .ant-input {
        background: #f7f8fa;
        border: none;
        color: #454852;
      }
    }
  }
  .search-record {
    display: flex;
    padding-top: 16px;
    padding-left: 8px;
    .label {
      font-weight: 400;
      color: #83878f;
    }
    .value {
      font-weight: 400;
      color: #454852;
      .tag {
        padding-right: 16px;
      }
    }
  }
  .menu-content {
    padding-top: 24px;
    display: flex;
    flex-wrap: wrap;
    .menu-item {
      width: 160px;
      padding-bottom: 41px;
      margin-right: 48px;
      .clearfix;
      .title {
        height: 32px;
        font-weight: 500;
        text-align: left;
        color: #1f2229;
        line-height: 32px;
        margin: 0;
        padding-left: 12px;
        font-size: 14px;
      }
      .sub-menu-content {
        .sub-menu-item {
          height: 32px;
          line-height: 32px;
          padding: 0 12px;
          font-weight: 400;
          color: #454852;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          cursor: pointer;
          &:hover {
            color: #d93934;
            img {
              display: inline-block;
            }
            svg {
              color: #d93934 !important;
            }
          }
          .sub-menu-item-left {
            display: flex;
            align-items: center;
            svg {
              font-size: 16px;
            }
            .sub-menu-name {
              padding-left: 8px;
            }
          }
          img {
            width: 16px;
            height: 16px;
            display: none;
          }
        }
        .sub-menu-item-active {
          img {
            display: inline-block !important;
          }
        }
      }
    }
  }
}
</style>
