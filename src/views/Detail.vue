<template>
  <div class="detail">
    <el-button size="mini" type="text" @click="btnClick">
      弹出
    </el-button>
    <div class="top-section">
      <p class="title"><a href="javascript;:">LUN管理</a>--LUN1详情</p>
      <el-row class="row">
        <el-col :span="8">
          <div class="row-item">
            <span class="label">所属存储池：</span>
            <span class="value">asds001</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="row-item">
            <span class="label">所属资源池：</span>
            <span class="value">资源池一</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="row-item">
            <span class="label">状态：</span>
            <span class="value">正常</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="row">
        <el-col :span="8">
          <div class="row-item">
            <span class="label">客户端数量：</span>
            <span class="value">1个</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="row-item">
            <span class="label">快照数量：</span>
            <span class="value">3个</span>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="main">
      <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="客户端连接管理" name="first"></el-tab-pane>
        <el-tab-pane label="LUN快照管理" name="second"></el-tab-pane>
      </el-tabs>
      <div class="tab-first-section" v-show="activeName === 'first'">
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column
            prop="date"
            label="发起程序名"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="name" label="IP" width="180" align="center">
          </el-table-column>
          <el-table-column prop="address" label="授权状态" align="center">
          </el-table-column>
          <el-table-column prop="address" label="连接状态" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template>
              <el-button size="mini" type="text">
                授权
              </el-button>
              <el-button size="mini" type="text">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="tab-second-section" v-show="activeName === 'second'">
        LUN快照管理
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    btnClick() {
      this.$popup({
        // imgUrl: require("../assets/imgs/test_result.png"), // 顶部图片
        imgLoadTip: "图片加载中...",
        title: "我是标题",
        content: "我是内容",
        btnText: "我是按钮",
        click: () => {
          // 点击按钮事件
          //   this.$router.push('……')
          console.log(`点击按钮了！`);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.top-section {
  .title {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    text-align: left;
  }
  .row {
    padding-top: 14px;
    .row-item {
      display: flex;
      align-items: center;
      .label {
        width: 114px;
        text-align: right;
      }
    }
  }
}
.main {
  padding-top: 10px;
}
</style>
