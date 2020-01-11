import dispatcher from '@http/dispatch'
import { apiCompany } from '@http/urls'
import {
  ADD_COMPANY,
  GET_COMPANY_DETAIL,
  VOTE_COMPANY,
} from '@constants/company'

export const apiAddCompany = (params) => dispatcher({
  type: ADD_COMPANY,
  url: apiCompany.API_ADD_COMPANY,
  data: params,
})

export const apiGetCompanyDetail = (params) => dispatcher({
  type: GET_COMPANY_DETAIL,
  url: apiCompany.API_GET_COMPANY_DETAIL,
  data: params,
})

export const apiVoteCompany = (params) => dispatcher({
  type: VOTE_COMPANY,
  url: apiCompany.API_VOTE_COMPANY,
  data: params,
})

