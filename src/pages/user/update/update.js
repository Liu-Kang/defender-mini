import Taro, { Component } from '@tarojs/taro'
import { View, Image, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { checkAuthorize } from '@utils'
import UpdateJob from '@components/business/user/update-job'
import UpdateName from '@components/business/user/update-name'

import '@styles/theme.scss'
import './update.scss'


export default class Update extends Component {
  static options = {
    addGlobalClass: true,
  }
  config = {
    navigationBarTitleText: '用户信息',
    navigationBarBackgroundColor: '#FFFCF2',
  }
  state = {
    openUpdateName: false,
    openUpdateJob: false,
    userInfo: {},
  }
  componentDidMount () {
    checkAuthorize('scope.userInfo').then((bool) => {
      if (bool) {
        Taro.getUserInfo().then((res) => {
          this.setState({
            userInfo: res.userInfo,
          })
        })
      }
    })
  }
  handleChangeAvatar = () => {
    Taro.chooseImage({
      count: 1,
    }).then((res) => {
      this.setState((prevState) => ({
        userInfo: {
          ...prevState.userInfo,
          avatarUrl: res.tempFilePaths[0],
        }
      }))
    })
  }
  handleGoUpdateName = () => {
    this.setState({
      openUpdateName: true,
    })
  }
  changeNameCancel = () => {
    this.setState({
      openUpdateName: false,
    })
  }
  changeNameConfirm = (name) => {
    if (name) {
      this.setState({
        openUpdateName: false,
      })
    }
  }
  handleGoUpdateJob = () => {
    this.setState({
      openUpdateJob: true,
    })
  }
  changeJobCancel = () => {
    this.setState({
      openUpdateJob: false,
    })
  }
  changeJobConfirm = (job) => {
    if (job) {
      this.setState({
        openUpdateJob: false,
      })
    }
  }
  render () {
    const { userInfo, openUpdateJob, openUpdateName } = this.state
    return (
      <View className="container">
        <UpdateJob
          isOpened={openUpdateJob}
          job={userInfo.job}
          onCancel={this.changeJobCancel}
          onConfirm={this.changeJobConfirm}
        ></UpdateJob>
        <UpdateName
          isOpened={openUpdateName}
          name={userInfo.nickName}
          onCancel={this.changeNameCancel}
          onConfirm={this.changeNameConfirm}
        >
        </UpdateName>
        <View className="content">
          <View className="info-list">
            <View className="info-item" onClick={this.handleChangeAvatar}>
              <View className="item-value">
                <View className="item-text">用户头像</View>
                <Image class="avatar" mode="aspectFill" src={userInfo.avatarUrl}></Image>
              </View>
              <View className="iconfont icondd_arrow"></View>
            </View>
            <View className="info-item" onClick={this.handleGoUpdateName}>
              <View className="item-value">
                <View className="item-text">用户昵称</View>
                <View>{userInfo.nickName}</View>
              </View>
              <View className="iconfont icondd_arrow"></View>
            </View>
            <View className="info-item" onClick={this.handleGoUpdateJob}>
              <View className="item-value">
                <View className="item-text">您的职业</View>
                <View>{userInfo.job || '请填写'}</View>
              </View>
              <View className="iconfont icondd_arrow"></View>
            </View>
          </View>
          <AtButton type="primary" className="mt40" circle>确认登录</AtButton>
        </View>
      </View>
    )
  }
}
