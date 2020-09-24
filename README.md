# Vue Antd admin 项目模板

基于 VUE CLI 工具生成的项目修改

## 文件结构

```bash
├── build # 构建相关
├── mock # 项目 mock 模拟数据
├── plop-templates # 基本模板
├── public # 静态资源
│ │── favicon.ico # favicon 图标
│ └── index.html # html 模板
├── src # 源代码
│ ├── api # 所有请求
│ ├── assets # 主题 字体等静态资源
│ ├── components # 全局公用组件
│ ├── directive # 全局指令
│ ├── filters # 全局 filter
│ ├── icons # 项目所有 svg icons
│ ├── lang # 国际化 language
│ ├── layout # 全局 layout
│ ├── router # 路由
│ ├── store # 全局 store 管理
│ ├── styles # 全局样式
│ ├── utils # 全局公用方法
│ ├── vendor # 公用 vendor
│ ├── views # views 所有页面
│ ├── App.vue # 入口页面
│ ├── main.js # 入口文件 加载组件 初始化等
│ └── permission.js # 权限管理
├── tests # 测试
├── .env.xxx # 环境变量配置
├── .eslintrc.js # eslint 配置项
├── ..eslintignore # eslint 忽视文件
├── .babelrc # babel-loader 配置
├── .travis.yml # 自动化 CI 配置
├── vue.config.js # vue-cli 配置
├── postcss.config.js # postcss 配置
└── package.json # package.json
```

## 环境变量

- ENV 环境模式
- BASE_URL 根路径
- VUE_APP_TITLE 应用标题
- VUE*APP*[...] 其他

### 项目安装

```bash
# 指定 npm 模块下载源
npm config set registry https://registry.npm.taobao.org

npm install
```

## 启动 Web 开发环境

```
npm run dev
```

## 打包

```
npm run build
```

## 测试

### 运行测试

```
npm run test
```

### 运行 Lints 和 修复文件

```
npm run lint
```

### 运行 e2e 测试

```
npm run test:e2e
```

### 运行单元测试

```bash
npm run test:unit
```

## 历史记录

### 文档地址

https://www.yuque.com/zo5bgs/kpmh1b/qgqn1g/edit#B2n1Q
