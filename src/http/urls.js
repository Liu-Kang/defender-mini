export const apiCommon = {
  // 登录接口
  API_LOGIN: '/daidai/api/user/login',
  API_REGISTE_COUNT: '/daidai/api/user/getUserCount',
  API_USER_INFO: '/daidai/api/user/get',
  API_GET_QINIU_TOKEN: '/qiniu/getToken',
  API_UPLOAD_QINIU: 'https://upload.qiniup.com/qiniu/uploadFile',
  CDN_DOMAIN: 'https://ykz-cdn1-https.jinxidao.com',
}

export const apiHome = {
  API_LESSON_TODAY: '/daidai/api/classroom/classroom',
  API_UNLOCK_FREE_LESSON: '/daidai/api/classroom/unlockFreeCourse',
}

export const apiLessonList = {
  API_LESSON_LIST: '/daidai/api/classroom/courseList',
}

export const apiLessonDetail = {
  API_LESSON_DETAIL: '/daidai/api/classroom/learn',
  API_LESSON_STEP_DONE: '/daidai/api/classroom/finish',
  API_GET_REPORT: '/daidai/api/classroom/getReport',
}

export const apiUserCenter = {
  API_USER_UPDATE: '/daidai/api/user/update',
  API_REPORT_LIST: '/daidai/api/classroom/reportList',
  API_CHECK_CDKEY: '/daidai/api/order/validateCdKey',
}

export const apiVipCenter = {
  API_PAY_ORDER: '/daidai/api/pay/order',
}

