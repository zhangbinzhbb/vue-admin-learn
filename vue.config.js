"use strict";
const path = require("path");

// 实现web项目 全局修改主题颜色
const ThemeColorReplacer = require('webpack-theme-color-replacer');
const {
  getThemeColors,
  modifyVars
} = require('./src/utils/themeUtil');
const {
  resolveCss
} = require('./src/utils/theme-color-replacer-extend');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = "Vue Antd Admin"; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527; // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // 将构建好的文件输出到哪里
  outputDir: "dist",
  // //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  // 是否在保存的时候检查
  lintOnSave: process.env.NODE_ENV === "development",
  // 生产环境是否生成 SourceMap
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require("./mock/mock-server.js"),
  },
  pluginOptions: {
    //引入全局less变量的方式
    'style-resources-loader': {
      preProcessor: 'less',
      //这个是加上自己的路径，
      //注意：试过不能使用别名路径
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less'),
        path.resolve(__dirname, './src/theme/theme.less')
      ]
    },
  },
  // 解决ant-design-vue 按需引入组件 less 版本冲突问题
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // important extra layer for less-loader^6.0.0
          // 使用 modifyVars 的方式来进行覆盖antd变量
          modifyVars: modifyVars(),
          javascriptEnabled: true,
        },
      },
    },
  },
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "whatwg-fetch", "./src/main.js"];
    config.plugins.push(
      new ThemeColorReplacer({
        fileName: 'css/theme-colors-[contenthash:8].css',
        matchColors: getThemeColors(),
        injectCss: true,
        resolveCss
      })
    );
  },
  chainWebpack(config) {
    // 别名配置
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@views', path.resolve(__dirname, './src/views'))
      .set('@images', path.resolve(__dirname, 'src/assets/images'));

    // 生产环境下关闭css压缩的 colormin 项，因为此项优化与主题色替换功能冲突
    if (process.env.NODE_ENV === 'production') {
      config.plugin('optimize-css')
        .tap(args => {
          args[0].cssnanoOptions.preset[1].colormin = false;
          return args;
        });
    }
    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      }, )
      .end();

    config.when(process.env.NODE_ENV !== "development", config => {
      config
        .plugin("ScriptExtHtmlWebpackPlugin")
        .after("html")
        .use("script-ext-html-webpack-plugin", [{
          // `runtime` must same as runtimeChunk name. default is `runtime`
          inline: /runtime\..*\.js$/,
        }])
        .end();
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          // elementUI: {
          //   name: "chunk-elementUI", // split elementUI into a single package
          //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          // },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk("single");
    });
  },
};
