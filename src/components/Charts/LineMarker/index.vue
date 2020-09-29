<template>
  <div :id="id"
       :class="className"
       :style="{height:height,width:width}"></div>
</template>

<script>
// 引入highCharts模块
import HighCharts from "highcharts";
// 引入这个图表的外部资源数据
import data from "./data.js";
export default {
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
  },
  data() {
    // 将引入的数据写在自己的组件中
    let dataObj = data.bar;
    return {
      dataObj: dataObj,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // chart(参数1,参数2);第一个参数挂载组件的容器，第二个参数为图表所需要的数据对象
      HighCharts.chart(this.id, this.dataObj);
    },
  },
};
</script>
