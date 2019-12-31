import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import BackHeader from '@components/common/back-header'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { checkAuthorize } from '@utils'
import '@styles/theme.scss'
import './login.scss'


export default class Update extends Component {
  config = {
    navigationBarTitleText: '用户信息',
    navigationBarBackgroundColor: '#FFFCF2',
  }
  state = {
    isOpened: false,
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
      isOpened: true,
    })
  }
  changeNameCancel = () => {
    this.setState({
      isOpened: false,
    })
  }
  changeNameConfirm = () => {
    
  }
  render () {
    const { userInfo } = this.state
    return (
      <View className="container">
        <AtModal
          closeOnClickOverlay={false}
          isOpened
          onCancel={this.changeNameCancel}
          onConfirm={this.changeNameConfirm}
        >
          <AtModalContent>
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
          </AtModalContent>
          <AtModalAction>
            <Button>取消</Button>
            <Button>确定</Button>
          </AtModalAction>
        </AtModal>
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
          </View>
        </View>
      </View>
    )
  }
}
