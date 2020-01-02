import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import BackHeader from '@components/common/back-header'
import { AtList, AtListItem, AtButton } from 'taro-ui'
import { checkAuthorize } from '@utils'
import '@styles/theme.scss'
import './user.scss'


export default class User extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '个人中心',
    navigationBarBackgroundColor: '#73BFFF',
  }
  state = {
    isAuthed: false,
    showRegist: false,
    defaultAvatar: 'http://img.zcool.cn/community/01460b57e4a6fa0000012e7ed75e83.png@1280w_1l_2o_100sh.png',
    userInfo: {},
  }
  componentDidMount () {
    // checkAuthorize('scope.userInfo').then((bool) => {
    //   if (bool) {
    //     Taro.getUserInfo().then((res) => {
    //       this.setUserInfo(res.userInfo)
    //     })
    //   }
    // })
  }
  onAuthCallback = (res) => {
    Taro.navigateTo({
      url: '/pages/user/update/update',
    })
    // this.setUserInfo(res.detail.userInfo)
  }
  setUserInfo = (userInfo) => {
    this.setState({
      isAuthed: true,
      userInfo,
    })
  }
  render () {
    const { userInfo, defaultAvatar } = this.state
    return (
      <View className="container">
        <BackHeader></BackHeader>
        <View className="body">
          <View className="user-info">
            <View className="avatar">
              <Image src={userInfo.avatarUrl || defaultAvatar}></Image>
            </View>
            {this.renderUserInfo()}
          </View>
          <View className="user-line">
            <AtList hasBorder={false}>
              <AtListItem title='我的消息' arrow='right' />
              <AtListItem title='投票历史' arrow='right' />
              <AtListItem hasBorder={false} title="去投票" arrow='right' />
            </AtList>
          </View>
        </View>
      </View>
    )
  }
  renderUserInfo = () => {
    const { userInfo, isAuthed } = this.state
    let view
    if (isAuthed) {
      view =
        <View className="info">
          <View className="user-name">{userInfo.nickName}</View>
          <View className="user-job">Java开发工程师</View>
        </View>
    } else {
      view =
        <View className="login">
          <Button className="auth-btn" open-type="getUserInfo" onGetuserinfo={this.onAuthCallback}>点击登录</Button>
          <AtButton
            circle
            className="login-btn"
            type="primary"
            size="small"
            onClick={this.handleLogin}
          >点击登录</AtButton>
        </View>
    }
    return view
  }
}
