<template>
  <div>
    <el-dropdown trigger="click">
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <div class="dropdown-item dropdown-item-is-disabled"
             v-for="item in arr"
             :key="item.value">

          <el-popover placement="right-end"
                      width="200"
                      trigger="hover"
                      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <span slot="reference"> {{ item.label }}</span>
          </el-popover>
        </div>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown trigger="click">
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item in arr"
                          :key="item.value"
                          :disabled="item.disabled"
                          :class="[item.disabled ? 'el-dropdown-menu__item_class_disabled' : 'el-dropdown-menu__item_class']">
          <el-popover placement="right-end"
                      width="200"
                      trigger="hover"
                      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <span slot="reference"> {{ item.label }}</span>
          </el-popover>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          value: 1,
          label: "黄金糕",
          disabled: false,
        },
        {
          value: 2,
          label: "狮子头",
          disabled: true,
        },
        {
          value: 3,
          label: "螺蛳粉",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.el-dropdown-menu__item_class {
  pointer-events: none;
}

.el-dropdown-menu__item_class_disabled.is-disabled {
  cursor: default;
  color: #bbb;
  pointer-events: auto !important;
}
</style>
