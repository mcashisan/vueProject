// 引入axios
import axios from "axios";
axios.defaults.withCredentials = true;
export default {
  /*
      封装axios的get请求
      @param url 请求的地址
      @param response 请求成功的一种回调
      @param exception 请求异常的回调
   */
  get(url, response, exception) {
    axios({
      method: "get",
      url: "https://elm.cangdu.org" + url,
      header: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).then((reslute) => {
      response(reslute);
    }).catch((error) => {
      if (exception) {
        exception(error);
      } else {
        console.log(error);
      }
    });
  },
  // 封装post数据请求方式
  post(url, data, response, exception) {
    axios({
      method: "post",
      url: "https://elm.cangdu.org" + url,
      data: data,
      header: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).then((reslute) => {
      response(reslute);
    }).catch((error) => {
      if (exception) {
        exception(error);
      } else {
        console.log(error);
      }
    });
  }
}

