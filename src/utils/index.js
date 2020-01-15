import http from '@http/http'
import Taro from '@tarojs/taro'
import { apiUser } from '@http/urls'
import { CACHE_LOGIN_CODE } from '@enums/storage'


export function doLogin() {
  return new Promise((resolve, reject) => {
    Taro.login().then((loginRes) => {
      return http({
        url: apiUser.API_LOGIN,
        method: 'POST',
        data: {
          code: loginRes.code,
        },
      }).then((data) => {
        Taro.setStorageSync(CACHE_LOGIN_CODE, data.content.skey)
        resolve(data)
      })
    }).catch((err) => {
      reject(err)
    })
  })
}

export function checkAuthorize(type) {
  return new Promise((resolve) => {
    Taro.getSetting().then((res) => {
      if (!res.authSetting[type]) {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}
