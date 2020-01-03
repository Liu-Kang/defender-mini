import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'
import { AtSearchBar, AtFab } from 'taro-ui'
import types from '@enums/bad-types'

import '@styles/theme.scss'
import './vote.scss'

@connect(state => state.home, { ...actions })
export default class Home extends Component {
  static options = {
    addGlobalClass: true,
  }
  config = {
    navigationBarTitleText: '投票',
    navigationBarBackgroundColor: '#FFFCF2',
  }
  state = {
    search: '',
    init: true,
  }
  componentDidMount () {
  }
  handleChangeSearch = (value) => {
    this.setState({
      search: value,
    })
  }
  handleSearchCompany = () => {
    this.setState({
      init: false,
    })
  }
  handleAddCompany = () => {

  }
  handleVote = () => {

  }
  render () {
    return (
      <View className="container">
        <View className="add-company">
          <AtFab onClick={this.handleAddCompany}>
            <Text className='at-fab__icon at-icon at-icon-add'></Text>
          </AtFab>
        </View>
        <AtSearchBar
          placeholder="搜索公司"
          actionName="搜索"
          value={this.state.search}
          onChange={this.handleChangeSearch}
          onActionClick={this.handleSearchCompany}
        ></AtSearchBar>
        <View className="content">
          <View className="search-list">
            {/* {this.renderCompany()} */}
            {this.renderEmpty()}
          </View>
          <View className="recommend-list">
          </View>
        </View>
      </View>
    )
  }
  renderCompany = () => {
    const voteTypes = Object.keys(types).map((item) => ({ title: item }))
    return (
      <View className="vote-item">
        <View className="vote-body">
          <View className="logo">
            <Image src="https://zhengxin-pub.bj.bcebos.com/logopic/71071e73a15c072e0955938dceab03ef_fullsize.jpg?x-bce-process=image/resize,m_lfit,w_200"></Image>
          </View>
          <View className="info">
            <View className="name">阿里巴巴(中国)有限公司</View>
            <View className="address">杭州市西湖区西斗门路3号天堂软件园A幢10楼G座</View>
            <View className="industry">互联网/IT</View>
          </View>
        </View>
        <View className="vote-area">
          {
            voteTypes.map((type) => (
              <View class="type-item flex1">
                <View className="type-desc">
                  {type.title}
                </View>
                <View className="type-vote">
                  <View className="circle-btn" onClick={this.handleVote.bind(this, 33)}></View>
                </View>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
  renderEmpty = () => {
    const { init } = this.state
    return (
      <View className="search-empty">
        <View className="empty-img"></View>
        <View className="mt40">{init ? '请输入公司名称进行搜索' : '没有匹配的公司，你可以尝试自己添加公司'}</View>
      </View>
    )
  }
}
