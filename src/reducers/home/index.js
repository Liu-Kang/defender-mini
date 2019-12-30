import { GET_COMPANY_LIST_BY_TAG } from '@constants/home'

const INITIAL_STATE = {
  companyList: {}
}

export default function home (state = INITIAL_STATE, action) {
  const data = action.payload ? action.payload.data : {};
  switch (action.type) {
    case GET_COMPANY_LIST_BY_TAG:
      return {
        ...state,
        companyList: state.companyList.concat(data.list)
      }
    default:
      return state
  }
}
