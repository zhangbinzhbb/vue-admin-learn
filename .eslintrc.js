module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint", // 使用babel进行编译,解决import报错：error  Parsing error: Unexpected token import
    sourceType: "module"
  },
  env: {
    browser: true, // 浏览器全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域
    es6: true // 启用 ES6 语法支持以及新的 ES6 全局变量或类型
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-v-html": 0, // v-html：会有xss风险、会覆盖子组件
    "complexity": [0, 11], //循环复杂度
    "consistent-this": [2, "_that"], //this别名
    "eqeqeq": 2, //必须使用全等
    "func-names": 0, //函数表达式必须有名字
    "semi": [2, "always"], //语句强制分号结尾
    "semi-spacing": [
      0,
      {
        before: false,
        after: true
      }
    ], //分号前后空格
    "no-useless-escape": 0, // 模板文字和正则表达式中的非特殊字符关闭
    "max-len": [0, 80, 4], //字符串最大长度
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: true
        }
      }
    ],
    "vue/name-property-casing": [2, "PascalCase"], // 组件必须设置name：PascalCase命名
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/v-bind-style": ["error", "shorthand"], // v-bind指令样式，您应该使用简写形式
    "vue/singleline-html-element-content-newline": 0, //单行元素换行符
    "vue/multiline-html-element-content-newline": 0, //多行元素换行符
    "vue/name-property-casing": [2, "PascalCase"], // vue组件name强制使用驼峰命名
    "vue/html-closing-bracket-spacing": ["error", { // 标签的右括号之前需要或不允许使用空格
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always"
    }],
    "vue/html-closing-bracket-newline": ["error", { // 在标签的右括号之前要求或禁止换行
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/html-indent": 0
  }
};
