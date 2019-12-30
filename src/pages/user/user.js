import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import BackHeader from '@components/common/back-header'
import { AtList, AtListItem, AtButton } from 'taro-ui'
import '@styles/theme.scss'
import './user.scss'


export default class User extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '个人中心',
    navigationBarBackgroundColor: '#73BFFF',
  }
  state = {
  }
  componentDidMount () {
  }
  onReachBottom() {}
  render () {
    return (
      <View className="container">
        <BackHeader></BackHeader>
        <View className="body">
          <View className="user-info">
            <View className="avatar">
              <Image src="http://n.sinaimg.cn/sinacn14/409/w640h569/20180821/6d8a-hhzsnea2320821.jpg"></Image>
            </View>
            {/* <View className="info">
              <View className="user-name">捍卫者</View>
              <View className="user-job">Java开发工程师</View>
            </View> */}
            <View className="login">
              <AtButton
                circle
                type="primary"
                size="small"
                open-type="getPhoneNumber"
              >点击登录</AtButton>
            </View>
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
}
