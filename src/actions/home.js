import dispatcher from '@http/dispatch'
import { apiHome } from '@http/urls'
import { GET_COMPANY_LIST_BY_TAG } from '@constants/home'

// eslint-disable-next-line import/prefer-default-export
export const dispatchGetList = (params) => dispatcher({
  type: GET_COMPANY_LIST_BY_TAG,
  url: apiHome.API_GET_COMPANY_LIST,
  data: params,
})

