// src/index.js
// 导入组件，组件必须声明 name
import App from "../App";

// 为组件提供 install 安装方法，供按需引入
App.install = function(Vue) {
  Vue.component(App.name, App);
};

// 默认导出组件
export default App;
