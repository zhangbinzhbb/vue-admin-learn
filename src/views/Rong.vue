<template>
  <div class="lan">
    <p class="lan-title">
      分布式存储LUN通过ISCS协议提供存储能力,详细操作指引可下载
      <a href="javascript:;">LUN 使用手册</a>查看
    </p>
    <div class="operate-layout">
      <el-button type="primary"
                 @click="dialogVisible = true">
        创建
      </el-button>
      <div class="select-type">
        <span>所属存储池：</span>
        <el-select v-model="value"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value" />
        </el-select>
      </div>
    </div>
    <div class="lan-table-layout">
      <el-table :data="tableData"
                border
                style="width: 100%">
        <el-table-column label="LUN ID"
                         type="index"
                         align="center"
                         width="68" />
        <el-table-column prop="date"
                         label="所属存储池"
                         align="center"
                         width="120" />
        <el-table-column prop="name"
                         label="所属资源池"
                         align="center"
                         width="100" />
        <el-table-column prop="address"
                         label="总空间"
                         align="center"
                         width="90" />
        <el-table-column prop="num"
                         label="客户端数量"
                         align="center"
                         width="100" />
        <el-table-column prop="num"
                         label="快照数量"
                         align="center"
                         width="80" />
        <el-table-column prop="status"
                         label="状态"
                         align="center"
                         width="80" />
        <el-table-column label="操作"
                         align="center">
          <template>
            <el-button size="mini"
                       type="text">
              扩容
            </el-button>
            <el-button size="mini"
                       type="text">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="page-layout">
        <el-pagination :current-page="currentPage4"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange" />
      </div>
    </div>

    <el-dialog title="创建LUN"
               :visible.sync="dialogVisible"
               width="40%"
               :before-close="handleClose">
      <div>
        <el-form ref="ruleForm"
                 :model="ruleForm"
                 :rules="rules"
                 label-width="96px"
                 class="demo-ruleForm">
          <el-form-item label="资源池："
                        prop="region">
            <el-select v-model="ruleForm.region"
                       placeholder="请选择资源池">
              <el-option label="区域一"
                         value="shanghai" />
              <el-option label="区域二"
                         value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="存储池："
                        prop="region1">
            <el-select v-model="ruleForm.region1"
                       placeholder="请选择存储池">
              <el-option label="区域一"
                         value="shanghai" />
              <el-option label="区域二"
                         value="beijing" />
            </el-select>
          </el-form-item>

          <el-form-item label="LUN ID："
                        prop="desc">
            <el-input v-model="desc"
                      placeholder="请输入1-254的数字作为LUN ID" />
          </el-form-item>

          <el-form-item label="LUN 容量："
                        prop="desc1"
                        class="form-item-capacity">
            <el-input v-model="desc1"
                      placeholder="请输入" />
            <el-select v-model="desctType"
                       placeholder="请选择">
              <el-option label="GB"
                         value="1" />
              <el-option label="MB"
                         value="2" />
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button @click="resetForm('ruleForm')">
              取消
            </el-button>
            <el-button type="primary"
                       @click="submitForm('ruleForm')">
              确认
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

    <el-dialog title="调整LUN容量"
               :visible.sync="dialogVisible1"
               width="40%"
               :before-close="handleClose">
      <div>
        <el-form ref="ruleForm1"
                 :model="ruleForm1"
                 :rules="rules1"
                 label-width="96px"
                 class="demo-ruleForm">
          <el-form-item label="LUN ID："
                        prop="desc">
            <el-input v-model="desc"
                      disabled />
          </el-form-item>

          <el-form-item label="当前容量："
                        prop="desc1">
            <el-input v-model="desc"
                      disabled />
          </el-form-item>

          <el-form-item label="调整后容量："
                        prop="desc2"
                        class="form-item-capacity">
            <el-input v-model="desc2"
                      placeholder="请输入" />
            <el-select v-model="desctType"
                       placeholder="请选择">
              <el-option label="GB"
                         value="1" />
              <el-option label="MB"
                         value="2" />
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button @click="resetForm('ruleForm')">
              取消
            </el-button>
            <el-button type="primary"
                       @click="submitForm('ruleForm')">
              确认
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Lan",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      tableData: [
        {
          date: "SDSOO1",
          name: "资源池一",
          address: "500GB",
          num: "1",
          status: "正常",
        },
        {
          date: "SDSOO2",
          name: "资源池二",
          address: "500GB",
          num: "1",
          status: "正常",
        },
        {
          date: "SDSOO3",
          name: "资源池三",
          address: "500GB",
          num: "1",
          status: "正常",
        },
        {
          date: "SDSOO4",
          name: "资源池四",
          address: "500GB",
          num: "1",
          status: "正常",
        },
      ],
      urrentPage4: 4,
      dialogVisible: false,
      dialogVisible1: true,
      desctType: "1",
      ruleForm: {
        region: "",
        region1: "",
        desc: "",
        desc1: "",
      },
      ruleForm1: {
        desc: "",
        desc1: "",
      },
      rules: {
        region: [
          { required: true, message: "请选择资源池", trigger: "change" },
        ],
        region1: [
          { required: true, message: "请选择存储池", trigger: "change" },
        ],
        desc: [
          {
            required: true,
            message: "请输入1-254的数字作为LUN ID",
            trigger: "blur",
          },
        ],
        desc1: [{ required: true, message: "请输入", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="scss">
.lan {
  .lan-title {
    text-align: left;
  }
  .operate-layout {
    display: flex;
    justify-content: space-between;
    padding-bottom: 14px;
  }
  .page-layout {
    padding-top: 10px;
  }
  .el-dialog__header {
    border-bottom: 1px solid #ccc;
  }
  .el-form-item__content {
    display: flex;
  }
  .form-item-capacity {
    .el-select {
      width: 140px;
      margin-left: 14px;
    }
  }
}
</style>
