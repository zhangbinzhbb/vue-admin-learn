<template>
  <div class="setting-form-contanier">
    <div class="section-first">
      <p>------存储管理IP设置</p>
      <el-row class="setting-item"
              :key="item.uuid"
              v-for="item in arr">
        <el-col :span="6">
          <div class="grid">
            <span class="label">资源池：</span>
            <span class="value">{{ item.resourcePoolName }}</span>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid">
            <span class="label">存储管理IP:</span>
            <el-input v-model="item.storagePoolIp"
                      size="small"></el-input>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="section-second">
      <p>------自动替换故障盘功能设置（请在集群内各物理机有空闲健康情况下开启该功能）</p>
      <el-row class="setting-item"
              :key="item.uuid"
              v-for="item in arr">
        <el-col :span="6">
          <div class="grid">
            <span class="label">资源池：</span>
            <span class="value">{{ item.resourcePoolName }}</span>
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid">
            <span class="label">自动替换故障盘:</span>
            <div class="content">
              <el-radio-group v-model="item.state">
                <el-radio label="1">开启</el-radio>
                <el-radio label="0">关闭</el-radio>
              </el-radio-group>
              <div class="time">
                <span class="time-label">自动替换时间：</span>
                <el-time-select v-model="item.switchTime"
                                size="small"
                                :picker-options="{
                                    start: '00:00',
                                    step: '00:15',
                                    end: '24:00'
                                  }"
                                placeholder="选择时间">
                </el-time-select>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="footer-button">
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      radio: 3,
      value: "",
      arr: [
        {
          uuid: "0c14b76a5a11c53c032b3cb2aca",
          storagePoolIpobj: "192.168.222.31",
          state: "1",
          switchTime: "04:00",
          resourcePoolName: "pool478327489374",
        },
        {
          uuid: "0c14b76a5a49acbc53c032b3cb2aca",
          storagePoolIp: "192.168.222.31",
          state: "1",
          switchTime: "05:00",
          resourcePoolName: "pool478327489374",
        },
        {
          uuid: "0c14b76a5a1149ac53c032b3cb2aca",
          storagePoolIp: "192.168.222.31",
          state: "1",
          switchTime: "06:00",
          resourcePoolName: "pool478327489374",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.setting-form-contanier {
  p {
    text-align: left;
  }
  .setting-item {
    .grid {
      display: flex;
      align-items: center;
      .label {
        width: 120px;
        text-align: right;
      }
      .value {
        padding-left: 2px;
      }
      .el-input {
        padding-left: 10px;
        width: 170px;
      }
      .content {
        display: flex;
        align-items: center;
        .el-radio-group {
          padding-left: 30px;
        }
        .time {
          padding-left: 40px;
        }
      }
    }
  }
  .footer-button {
    padding-top: 30px;
  }
}
</style>
