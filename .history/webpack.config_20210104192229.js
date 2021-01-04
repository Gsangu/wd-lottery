// webpack.config.js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
console.log(process.env);
module.exports = {
  devServer: {
    open: false,
    // host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    index: 'debug.html',
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {
    }
  },
  entry: {
    index: path.join(__dirname, "/src/index.js") // 入口文件（就是刚才用于暴露组件的index.js）
  },
  output: {
    path: path.join(__dirname, "/dist"), // 打包后的文件存放在dist文件夹
    publicPath: '/dist/', // 设置公共路径
    filename: "wd-lottery.js", // 打包后输出文件的文件设置
    libraryTarget: 'umd' // 这个选项会尝试把库暴露给前使用的模块定义系统，这使其和CommonJS、AMD兼容或者暴露为全局变量
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['url-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}