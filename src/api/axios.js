import axios from "axios";
import router from "../router";

const Service = {
  baseURL: "",
  headers: {},
  timeout: 5000,
  service: null,
  getService() {
    this.createAxios();
    this.defineRequest();
    this.defineResponse();
    return this.service;
  },
  createAxios() {
    this.service = axios.create({
      // baseURL: process.env.BASE_API, // api 的 base_url
      baseURL: this.baseURL,
      // request timeout
      timeout: this.timeout,
      // 默认表单提交的方式
      headers: this.headers
    });
  },
  async defineRequestConfig(config) {
    // console.info('请求 拦截器！！！！！')
    // console.info('config before set', config)

    // 设置原生获取的头参数
    let headers = {};

    /* let headers = Object.assign(
      {
        "X-HEAD-PLATFORM": "wap",
        "X-HEAD-DEVICE-ID": customIMEI
      },
      store.getters.headers
    ); */

    // 设置请求 token
    // 设置请求  requestId
    let token = "";
    if (token) {
      Object.assign(headers, {
        "X-HEAD-AUTH-TOKEN": token
      });
    }
    config.headers = headers;
    return config;
  },
  defineRequest() {
    this.service.interceptors.request.use(this.defineRequestConfig, error => {
      // Do something with request error
      console.log(error); // for debug
      Promise.reject(error);
    });
  },
  defineResponseConfig(response) {
    const res = response.data;
    const config = response.config;
    if (res.code === 0) {
      return Promise.resolve(res);
    } else {
      return Promise.reject({ err: res, config });
    }
  },
  defineErrorResponseConfig({ err, config }) {
    console.log(config);
    if (err && err.code) {
      switch (true) {
        // 登录失效
        case [401, "401"].includes(err.code):
          // 判断接口是否因为续订而导致token错误
          // 转到登录页面
          router.replace("/login");
          break;
        // 无网络
        case err.message === "Network Error":
          console.warn("Network Error", err);
          // Toast.error(err.message);
          break;
        // 全局错误提示
        default:
          // Toast.error(err.msg || "Network Error, Please Try Again Latter!");
          break;
      }
    }
    return Promise.reject(err);
  },
  defineResponse() {
    // 拦截器
    this.service.interceptors.response.use(
      this.defineResponseConfig.bind(this)
    );
    this.service.interceptors.response.use(
      res => Promise.resolve(res),
      this.defineErrorResponseConfig.bind(this)
    );
  }
};

export default Object.create(Service).getService();
