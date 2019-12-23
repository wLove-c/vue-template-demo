import axios from "./axios";

export function get(params) {
  return axios({
    url: "/api/xxx",
    method: "get",
    params: { ...params }
  });
}

export function post(data) {
  return axios({
    url: "/api/xxx",
    method: "post",
    data: { ...data }
  });
}
