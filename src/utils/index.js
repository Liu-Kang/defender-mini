import http from '@http/http'
import Taro from '@tarojs/taro'
import { apiCommon } from '@http/urls'
import { CACHE_LOGIN_CODE } from '@enums/storage'


export function doLogin() {
  return new Promise((resolve, reject) => {
    Taro.login().then((loginRes) => {
      // return http({
      //   url: apiCommon.API_LOGIN,
      //   data: {
      //     code: loginRes.code
      //   }
      // }).then((data) => {
      //   Taro.setStorageSync(CACHE_LOGIN_CODE, data.content.skey)
      //   resolve(data)
      // })
    }).catch((err) => {
      reject(err)
    })
  })
}