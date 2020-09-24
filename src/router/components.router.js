/** When your routing table is too long, you can split it into small modules **/

import Layout from "@/layout";


// 根据是否需要登录增加校验
// meta:{
//   needLogin:true
// }

// {
//   path: "/business", // 菜单路由
//   component: Layout, // layout
//   name: "Business",
//   meta: {
//     title: "服务运营", // 菜单标题
//   },
//   children: [{
//     path: "serviceDirectory", // 子菜单路由
//     component: () =>
//       import(
//         /* webpackChunkName: "serviceDirectory" */
//         "@/views/business/ServiceDirectory.vue"
//       ), // 展示的组件
//     name: "ServiceDirectory", // 用于keep-alive页面缓存
//     meta: {
//       title: "服务目录", // 显示name
//       icon: "serviceDirectory", // icon: "el-icon-s-help" 'el-' 用i标签显示 否则 svg 显示
//       permission: "1fca91fe8ec2447fb2b6cbc31d1cba55", // 权限判断是否显示
//       needLogin: true, // 根据是否需要登录增加校验
//       noCache: true // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
//     },
//   }],
// }

const componentsRouter = [{
    path: "/business",
    component: Layout,
    name: "Business",
    meta: {
      title: "服务运营",
    },
    children: [{
        path: "serviceDirectory", // 跳转路径
        component: () =>
          import(
            /* webpackChunkName: "serviceDirectory" */
            "@/views/business/ServiceDirectory.vue"
          ), // 展示的组件
        name: "ServiceDirectory", // 用于keep-alive页面缓存
        meta: {
          title: "服务目录", // 显示name
          icon: "serviceDirectory", // icon: "el-icon-s-help" 'el-' 用i标签显示 否则 svg 显示
          permission: "1fca91fe8ec2447fb2b6cbc31d1cba55", // 权限判断是否显示
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "order",
        component: () =>
          import( /* webpackChunkName: "order" */ "@/views/business/Order.vue"),
        name: "Order",
        meta: {
          title: "订单审批",
          icon: "order",
          permission: "ca0634c5cd684df491f97d6d9e47b2b2",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "workflow",
        component: () =>
          import(
            /* webpackChunkName: "workflow" */
            "@/views/business/WorkFlow.vue"
          ),
        name: "WorkFlow",
        meta: {
          title: "流程管理",
          icon: "workflow",
          permission: "d96d6d970ab441d29fa34a3cfd97fa7e",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "billingManager",
        component: () =>
          import(
            /* webpackChunkName: "billingManager" */
            "@/views/business/BillingManager.vue"
          ),
        name: "BillingManager",
        meta: {
          title: "计费管理",
          icon: "billingManager",
          permission: "53f72fcc790c4a7a849d4c6f5089304d",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "reportManager",
        component: () =>
          import(
            /* webpackChunkName: "reportManager" */
            "@/views/business/ReportManager.vue"
          ),
        name: "ReportManager",
        meta: {
          title: "报表管理",
          icon: "reportManager",
          permission: "285473a6511540b9acece1fd7a541003",
          needLogin: true,
          noCache: true
        },
      },
    ],
  },
  {
    path: "/resource",
    component: Layout,
    name: "Resource",
    meta: {
      title: "资源管理",
    },
    children: [{
        path: "VDC",
        component: () =>
          import( /* webpackChunkName: "VDC" */ "@/views/resource/VDC.vue"),
        name: "VDC",
        meta: {
          title: "VDC管理",
          icon: "VDC",
          permission: "a759cfe62b3d4b6292d516c774654a05",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "bussinessSystem",
        component: () =>
          import(
            /* webpackChunkName: "bussinessSystem" */
            "@/views/resource/BussinessSystem.vue"
          ),
        name: "BussinessSystem",
        meta: {
          title: "业务系统",
          icon: "bussinessSystem",
          permission: "f43a7704f89a42c89af68cd0e0e7ea9b",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "VMS",
        component: () =>
          import( /* webpackChunkName: "VMS" */ "@/views/resource/VMS.vue"),
        name: "VMS",
        meta: {
          title: "资源实例",
          icon: "VMS",
          permission: "0e6ab27955e04f088e3d797fab85e0ef",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "vpcMain",
        component: () =>
          import(
            /* webpackChunkName: "vpcMain" */
            "@/views/resource/VpcMain.vue"
          ),
        name: "VpcMain",
        meta: {
          title: "VPC管理",
          icon: "vpcMain",
          permission: "d756fccbae4b47fdb7632d5e6f3ebcd5",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "orcManager",
        component: () =>
          import(
            /* webpackChunkName: "orcManager" */
            "@/views/resource/OrcManager.vue"
          ),
        name: "OrcManager",
        meta: {
          title: "资源编排",
          icon: "orcManager",
          permission: "12fd18b2424b4bbca132547704acc448",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "bussinesscutover",
        component: () =>
          import(
            /* webpackChunkName: "bussinesscutover" */
            "@/views/resource/BussinessCutover.vue"
          ),
        name: "BussinessCutover",
        meta: {
          title: "业务割接",
          icon: "bussinesscutover",
          permission: "ef2223fce21c4d8e8335643ece57de9d",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "recycleMain",
        component: () =>
          import(
            /* webpackChunkName: "recycleMain" */
            "@/views/resource/RecycleMain.vue"
          ),
        name: "RecycleMain",
        meta: {
          title: "回收站",
          icon: "recycleMain",
          permission: "f888347756f549299f501b24d3b5ba40",
          needLogin: true,
          noCache: true
        },
      },
    ],
  },
  {
    path: "/monitor",
    component: Layout,
    name: "Monitor",
    meta: {
      title: "运维监控",
    },
    children: [{
        path: "operationManager",
        component: () =>
          import(
            /* webpackChunkName: "operationManager" */
            "@/views/monitor/OperationManager.vue"
          ),
        name: "OperationManager",
        meta: {
          title: "监控告警",
          icon: "operationManager",
          permission: "527c06d3e35211ea995f0a580a2a03c6",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "capabilityManager",
        component: () =>
          import(
            /* webpackChunkName: "capabilityManager" */
            "@/views/monitor/CapabilityManager.vue"
          ),
        name: "CapabilityManager",
        meta: {
          title: "容量监控",
          icon: "capabilityManager",
          permission: "fde893aeca0346518b3a559753a3e542",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "installWork",
        component: () =>
          import(
            /* webpackChunkName: "installWork" */
            "@/views/monitor/InstallWork.vue"
          ),
        name: "InstallWork",
        meta: {
          title: "安装作业",
          icon: "installWork",
          permission: "841fabf6e35211ea995f0a580a2a03c6",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "tasklogManager",
        component: () =>
          import(
            /* webpackChunkName: "tasklogManager" */
            "@/views/monitor/TasklogManager.vue"
          ),
        name: "TasklogManager",
        meta: {
          title: "任务日志",
          icon: "tasklogManager",
          permission: "032725dfe35311ea995f0a580a2a03c6",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "notifyManager",
        component: () =>
          import(
            /* webpackChunkName: "notifyManager" */
            "@/views/monitor/NotifyManager.vue"
          ),
        name: "NotifyManager",
        meta: {
          title: "消息通知",
          icon: "notifyManager",
          permission: "ba7703d1a017431388d6dab69204e9d0",
          needLogin: true,
          noCache: true
        },
      },
    ],
  },
  {
    path: "/baseResource",
    component: Layout,
    name: "BaseResource",
    meta: {
      title: "基础设施",
    },
    children: [{
        path: "resourceaccess",
        component: () =>
          import(
            /* webpackChunkName: "resourceaccess" */
            "@/views/baseResource/Resourceaccess.vue"
          ),
        name: "Resourceaccess",
        meta: {
          title: "资源入云",
          icon: "resourceaccess",
          permission: "b5015d1b191a44b3b0ae60e15bb4638a",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "datacenter",
        component: () =>
          import(
            /* webpackChunkName: "datacenter" */
            "@/views/baseResource/DataCenter.vue"
          ),
        name: "DataCenter",
        meta: {
          title: "数据中心",
          icon: "datacenter",
          permission: "eebb0b2df9284a75be3d77efd83a304c",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "availpartitions",
        component: () =>
          import(
            /* webpackChunkName: "availpartitions" */
            "@/views/baseResource/Availpartitions.vue"
          ),
        name: "Availpartitions",
        meta: {
          title: "可用分区",
          icon: "availpartitions",
          permission: "b4293ab21c4540e79e281c82b0143bae",
          needLogin: true,
          noCache: true
        },
      },
      {
        path: "softwareAndScriptManager",
        component: () =>
          import(
            /* webpackChunkName: "softwareAndScriptManager" */
            "@/views/baseResource/SoftwareAndScriptManager.vue"
          ),
        name: "SoftwareAndScriptManager",
        meta: {
          title: "软件及脚本",
          icon: "softwareAndScriptManager",
          permission: "766ec1a1263a4594a59390f880de0c60",
          needLogin: true,
          noCache: true
        },
      },
    ],
  },
];

export default componentsRouter;
