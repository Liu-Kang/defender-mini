import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { doLogin } from '@utils'
import types from '@enums/bad-types'

import '@styles/theme.scss'
import './home.scss'


export default class Home extends Component {
  static options = {
    addGlobalClass: true,
  }
  config = {
    navigationBarTitleText: '劣迹榜单',
    navigationBarBackgroundColor: '#FFFCF2',
  }
  state = {
    current: 0,
    noComensationList: [],
    overTimeList: [],
    unPaidWageList: [],
    neverRaiseList: [],
  }
  componentDidMount () {
    doLogin().then(() => {
      // this.handleGetUserInfo()
    })
  }
  handleSwitchTab = (value) => {
    this.setState({
      current: value
    })
  }
  handleVote = (id, e) => {
    e.stopPropagation()
  }
  render () {
    const tabList = Object.keys(types).map((item) => ({ title: item }))
    return (
      <View className="container">
        <AtTabs scroll={true} current={this.state.current} tabList={tabList} onClick={this.handleSwitchTab.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View className="content">
              <View className="comp-list">
                <View className="comp-item">
                  <View className="logo">
                    <Image src="https://zhengxin-pub.bj.bcebos.com/logopic/71071e73a15c072e0955938dceab03ef_fullsize.jpg?x-bce-process=image/resize,m_lfit,w_200"></Image>
                  </View>
                  <View className="info">
                    <View className="name">阿里巴巴(中国)有限公司</View>
                    <View className="address">杭州市西湖区西斗门路3号天堂软件园A幢10楼G座</View>
                    <View className="industry">互联网/IT</View>
                  </View>
                  <View className="comp-vote">
                    <View className="vote-num">135</View>
                    <View className="vote-btn" onClick={this.handleVote.bind(this, 33)}>投票</View>
                  </View>
                </View>
              </View>
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View className="content"></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className="content"></View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View className="content"></View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
