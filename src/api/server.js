import config from './config';
import Vue from 'vue'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import qs from 'qs'
import store from '../store'


// Vue.http.defaults.baseURL = config.baseUrl();
const fetch = (options) =>{
    let {method = 'get',data,url} = options;
    const cloneData = lodash.cloneDeep(data);
    try{
      let domin = '';
      if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
        domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
        url = url.slice(domin.length)
      }
      const match = pathToRegexp.parse(url)
      url = pathToRegexp.compile(url)(data)
      for (let item of match) {
        if (item instanceof Object && item.name in cloneData) {
          delete cloneData[item.name]
        }
      }
      url = domin + url
    }catch(ex){
      console.error(ex.message);
    }
    switch ( method.toLowerCase()){
      case 'get':
        return Vue.http.get(url, {
          params: cloneData,
        });
      case 'post':
        return Vue.http.post(url,qs.stringify(cloneData));
      default:
        return Vue.http(options);
    }
}

// ajax 请求方法
const request = (options,showLoading=true) =>{
    // if(showLoading){
    //   Vue.$vux.loading.show({
    //     width: '300',
    //     text: 'Loading'
    //   });
    // }
    return fetch(options).then((response)=>{
    //   Vue.$vux.loading.hide();
      const { statusText, status, data } = response;
      // if( data && !data.success && data.message === 'login_timeout'){
      //   Vue.$vux.toast.show({
      //     text:'登录已过期，请重新登录',
      //     onHide () {
      //       window.location=window.location.origin +window.location.pathname+ '#/login';
      //     }
      //   });
      // }
      return {
        success: data.success,
        message: data.message || statusText,
        status,
        ...data,
      }
    }).catch((error)=>{
    //   Vue.$vux.loading.hide();
      const { response } = error
      let msg,
          status,
          otherData = {};
      if (response) {
        const { data, statusText } = response
        otherData = data
        status = response.status
        msg = data.message || statusText
      } else {
        status = 600
        msg = 'Network Error'
      }
      return { success: false, status, message: msg, ...otherData }
    })
}

// 查找申购单
export const getList=(payload)=>{
    return request({
      url:config.api.read,
      method:'get',
      data:payload,
    });
}
