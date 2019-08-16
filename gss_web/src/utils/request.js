
import {Notify ,Toast} from 'vant'
import lodash from 'lodash'
import axios from 'axios'
// import qs from 'qs'
// import { Notify } from 'vant';////192.168.1.25



axios.interceptors.request.use(function (config) {
  console.log("请求开始")
  showFullScreenLoading()
  // if (sessionStorage.getItem('openId')) {
    
  // }
  console.log(config)
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
  console.log("请求结束 ")
  tryHideFullScreenLoading()
  return res;
}, (error) => {
  Toast.clear();//关闭loading
  return Promise.reject(error);
});
function startLoading() {
  Toast.loading({//打开loading
    duration:0,
    message:'加载中',
    mask:true
  });
}

let needLoadingRequestCount = 0

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) {
    return;
  }
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    lodash.debounce(tryCloseLoading, 50)()
  }
}
var tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    Toast.clear();
  }
}
axios.defaults.timeout = 20000;
//https://47.99.215.6:8003 https://wt.itertk.com
axios.defaults.baseURL = 'http://testapp.guoss.cn/gssapi/server/api.do?';
//axios.defaults.baseURL = 'https://wt.itertk.com';
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/json'
// const service = axios.create({
//   baseURL: 'http://192.168.1.25:8003', // api 的 base_url http://47.99.215.6:8003
//   timeout: 8000, // 请求超时时间
//   headers: {//application/x-www-form-urlencoded;
//     'Content-Type': 'application/json;charset=utf-8'
//   }
// })


// 输出方法
export default function request( params ) {
//   let url = params.url,
//     method = params.method,
  //   data = params.data || {};
  // console.log(data)
  // console.log(JSON.stringify(data))
  // console.log(qs.stringify(Object.assign(data)))
  return new Promise((resolve, reject) => {
    
    // let httpDefaultOpts = { //http默认配置
    //   method: method,
    //   url: url,
    //   timeout: 600000,
    //   data: data,
    // }
    // if (method.toLowerCase() == 'post') {
    //   delete httpDefaultOpts.params;
    // } else {
      
    // }
    // if (method.toLowerCase() == 'get') { //判断是get请求还是post请求
    //   delete httpDefaultOpts.data
    // } else {
    //   delete httpDefaultOpts.params
    // }
    // service.interceptors.request.use(
    //   config => {
    //     if ( sessionStorage.getItem("openId") ) {
    //       config.headers['openId'] = sessionStorage.getItem("openId");
    //     }
    //     return config
    //   },
    //   error => {
    //     window.console.log(error) // for console
    //     reject(error)
    // )
    console.log(params)
    axios(params)
      .then(response => { //then 请求成功之后进行什么
        
        if (response.data.statusCode != 100000 ) {
          let res = response.data;
          Notify({
            message: res.statusStr,
            duration: 1000,
            background: '#1989fa'
          });
          // console.log((res.msg == '用户不存在，请登录' || res.msg == "无法找到该用户"))
          // if (res.code == '500' && (res.msg == '用户不存在，请登录' || res.msg == "无法找到该用户")) {
          //   console.log(window)
          //   console.log(this.$route)
            
          // }
          reject(response.data) 
        }
        resolve(response.data) //把请求到的数据发到引用请求的地方
      })
      .catch(error => { 
        reject(error)
      })
  })
  
}
