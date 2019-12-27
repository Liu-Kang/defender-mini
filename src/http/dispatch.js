import http from './http'

export default function dispatcher(options) {
  const { url, data, type, method, specials } = options
  return (dispatch) => {
    return http({
      url,
      data,
      method,
      specials
    }).then((res) => {
      dispatch({ type, payload: res || {} })
    })
  }
}
