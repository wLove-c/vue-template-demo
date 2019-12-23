// vue.config.js
module.exports = {
  pages: {
    index: {
      entry: "src/lib/index.js",
      template: "public/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  filenameHashing: false,
  // 修改的配置
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://www.example.org",
        changeOrigin: true,
        ws: true
        //  pathRewrite: {
        //   "^/api": ""
        // }
      }
    }
  }
};
// .env.development
// VUE_APP_BASE_API=/api
