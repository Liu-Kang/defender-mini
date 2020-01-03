import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'
import { AtSearchBar } from 'taro-ui'
import { doLogin } from '@utils'

import '@styles/theme.scss'
import './vote.scss'


@connect(state => state.home, { ...actions })
export default class Home extends Component {
  static options = {
    addGlobalClass: true,
  }
  config = {
    navigationBarTitleText: '劣迹榜单',
    navigationBarBackgroundColor: '#FFFCF2',
  }
  state = {
    search: '',
  }
  componentDidMount () {
  }
  handleChangeSearch = (event) => {
    this.setState({
      search: event.detail.value,
    })
  }
  handleSearchCompany = () => {
  }
  render () {
    return (
      <View className="container">
        <AtSearchBar
          placeholder="搜索公司"
          actionName="搜索"
          fixed
          value={this.state.search}
          onChange={this.handleChangeSearch}
          onActionClick={this.handleSearchCompany}
        ></AtSearchBar>
      </View>
    )
  }
}
