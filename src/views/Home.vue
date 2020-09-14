<template>
  <div>
    <el-form ref="dynamicValidateForm"
             :model="dynamicValidateForm"
             label-width="100px"
             class="demo-dynamic">
      <el-form-item v-for="(domain, index) in dynamicValidateForm.domains"
                    :key="domain.key"
                    :label="'域名' + index"
                    :prop="'domains.' + index + '.value'">
        <el-select v-model="domain.value"
                   placeholder="请选择"
                   @change="changeEvent(domain.value, index)">
          <el-option v-for="item in listArr"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value"
                     :disabled="item.disabled" />
        </el-select>
        <div v-if="defaultList.length && defaultList[index]">
          <div v-for="tag in defaultList[index]['v' + index]"
               :key="tag.label"
               class="tag-button"
               @click="closetTag(tag, index)">
            <div class="tag-button-index">
              <span>{{ tag.label }}</span>
              <span>x</span>
            </div>
          </div>
        </div>
        <el-button @click.prevent="removeDomain(domain, index)">
          删除
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('dynamicValidateForm')">
          提交
        </el-button>
        <el-button @click="addDomain">
          新增域名
        </el-button>
        <el-button @click="resetForm('dynamicValidateForm')">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [{ value: "" }, { value: "" }, { value: "" }],
      },
      listArr: [],
      value: "1",
      defaultList: [],
    };
  },
  created() {
    this.getInit();
  },
  methods: {
    getInit() {
      const list = [
        {
          value: "1",
          label: "物理机001",
        },
        {
          value: "2",
          label: "物理机002",
        },
        {
          value: "3",
          label: "物理机003",
        },
        {
          value: "4",
          label: "物理机004",
        },
        {
          value: "5",
          label: "物理机005",
        },
        {
          value: "6",
          label: "物理机006",
        },
        {
          value: "7",
          label: "物理机007",
        },
        {
          value: "8",
          label: "物理机008",
        },
        {
          value: "9",
          label: "物理机009",
        },
        {
          value: "10",
          label: "物理机0010",
        },
        {
          value: "11",
          label: "物理机0011",
        },
        {
          value: "12",
          label: "物理机0012",
        },
      ];

      this.listArr = list;
      // 默认初始化 defaultList 数组
      this.dynamicValidateForm.domains.forEach((v, i) => {
        const v1 = "v" + i;
        const obj = {
          [v1]: [],
        };
        this.defaultList.push(obj);
      });
    },
    changeEvent(value, index) {
      console.log("value:", value);
      console.log(
        "this.dynamicValidateForm.domains:",
        this.dynamicValidateForm.domains
      );
      let items = null;
      this.listArr.forEach((v, i) => {
        if (v.value === value) {
          items = this.listArr[i];
          items.disabled = true;
          this.$set(this.listArr, i, items);
        }
      });

      const v = "v" + index;

      const obj = {
        [v]: [],
      };
      obj[v].push(items);

      let flag = true;
      let iFlag = 0;
      let i1Flag = false;
      this.defaultList.forEach((v1, i1) => {
        // 同一个key 下 存放 array
        if (Object.keys(v1)[0] === v && v1[v]) {
          if (v1[v].length === 0) {
            this.defaultList[i1][v].push(items);
          }
          v1[v].forEach((v2) => {
            iFlag = i1;
            if (v2.value !== value) {
              i1Flag = true;
            }
          });
        }

        if (v1[v]) {
          flag = false;
        }
      });

      if (i1Flag) {
        this.defaultList[iFlag][v].push(items);
      }

      if (flag) {
        this.defaultList.push(obj);
      }
      console.log("this.defaultList:", this.defaultList);
      // 初始化
      this.dynamicValidateForm.domains.forEach((v3) => {
        v3.value = "";
      });
    },
    closetTag(tag, index) {
      const { value } = tag;
      let items = null;
      const v = "v" + index;
      // 重置选中状态
      this.listArr.forEach((v1, i1) => {
        if (v1.value === value) {
          items = this.listArr[i1];
          items.disabled = false;
          this.$set(this.listArr, i1, items);
        }
      });

      this.defaultList.forEach((v2) => {
        if (v2[v]) {
          v2[v].forEach((v3, i3) => {
            if (v3.value === value) {
              v2[v].splice(i3, 1);
            }
          });
        }
      });
      console.log(this.listArr);
      console.log(this.defaultList);
    },
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
    removeDomain(item, i) {
      const v = "v" + i;
      this.defaultList[i][v].forEach((v1) => {
        v1.disabled = false;
      });
      this.defaultList[i][v] = [];
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
      const len = this.dynamicValidateForm.domains.length;
      const v = `v${len - 1}`;
      const obj = {
        [v]: [],
      };
      this.defaultList.push(obj);
    },
  },
};
</script>
