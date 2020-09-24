<template lang="html">
  <div class="home">
    <a-row type="flex" justify="start">
      <a-col :span="24">
        <a-button type="primary">
          Primary
        </a-button>
        <a-button>Default</a-button>
        <a-button type="dashed">
          Dashed
        </a-button>
        <a-button type="danger">
          Danger
        </a-button>
        <a-button type="primary">
          按钮
        </a-button>
        <a-button type="link">
          Link
        </a-button>
      </a-col>
    </a-row>

    <div style="background-color: #ececec; padding: 20px;margin-top:10px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <a-table
      style="margin-top:10px;"
      :columns="columns"
      :data-source="data"
      :scroll="{ x: 1500, y: 300 }"
    >
      <a slot="action" slot-scope="text">action</a>
    </a-table>

    <a-list style="margin-top:10px;" :grid="{ gutter: 16, column: 4 }" :data-source="data1">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.title">
          Card content
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  { title: "Age", width: 100, dataIndex: "age", key: "age", fixed: "left" },
  { title: "Column 1", dataIndex: "address", key: "1", width: 150 },
  { title: "Column 2", dataIndex: "address", key: "2", width: 150 },
  { title: "Column 3", dataIndex: "address", key: "3", width: 150 },
  { title: "Column 4", dataIndex: "address", key: "4", width: 150 },
  { title: "Column 5", dataIndex: "address", key: "5", width: 150 },
  { title: "Column 6", dataIndex: "address", key: "6", width: 150 },
  { title: "Column 7", dataIndex: "address", key: "7", width: 150 },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    scopedSlots: { customRender: "action" },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const data1 = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];
export default {
  name: "Home",
  data() {
    return {
      data,
      data1,
      columns,
    };
  },
  created() {
    console.log("===Home===");
  },
};
</script>

<style lang="less">
.home {
  text-align: left;
}
</style>
