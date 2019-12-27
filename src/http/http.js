import Taro from '@tarojs/taro'
import { CACHE_LOGIN_CODE } from '@enums/storage'
import { doLogin } from '@utils'

const defaultOptions = {
  silent: false, // 是否静默失败
  loading: true, // 是否显示loading
}

const domain = process.env.DOMAIN

export default function http(params) {
  const { url, method = 'GET', data, specials = {} } = params
  const options = Object.assign({}, defaultOptions, specials)
  if (options.loading) {
    Taro.showLoading({
      title: '加载中...',
    })
  }
  return new Promise((resolve, reject) => {
    // 发起请求
    Taro.request({
      url: `${domain}${url}`,
      method,
      data,
      header: {
        skey: Taro.getStorageSync(CACHE_LOGIN_CODE) || ''
      },
      success: (res) => {
        if (res.data.code === 1000 && res.data.bcode == 100) {
          return resolve(res.data)
        }
        if (res.data.code === 1002) {
          // 登录过期
          doLogin()
        }
        if (!options.silent) {
          Taro.showToast({
            icon: 'none',
            duration: 3000,
            title: res.data.message || '请求失败',
          })
        }
        return reject(res.data)
      },
      fail: (err) => {
        const errMsg = err.errMsg.includes('timeout') ? '网络连接失败' : '请求失败'
        if (!options.silent) {
          Taro.showToast({
            icon: 'none',
            duration: 3000,
            title: errMsg,
          })
        }
        reject(err)
      },
      complete: (res) => {
        if (options.loading) {
          // hideLoading会关闭Toast，所以这里要做一层判断，防止toast展示时间过短
          if (
            res.errMsg === 'request:ok' &&
            res.data.code === 1000 &&
            res.data.bcode == 100 ||
            options.silent
          ) {
            Taro.hideLoading()
          } else {
            setTimeout(() => {
              Taro.hideLoading()
            }, 3000)
          }
        }
      }
    })
  })
}