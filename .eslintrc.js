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
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
