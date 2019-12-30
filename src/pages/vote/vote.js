import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'

import './vote.scss'


@connect(state => state.home, { ...actions })
export default class Vote extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '劣迹榜单'
  }
  state = {
    noComensationList: [],
    overTimeList: [],
    unPaidWageList: [],
    neverRaiseList: [],
  }
  componentDidMount () {
  }
  onReachBottom() {}
  render () {
    return (
      <View className="container">
        hello world
      </View>
    )
  }
}
