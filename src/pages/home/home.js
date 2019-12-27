import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/home'
import { AtNoticebar } from 'taro-ui'

import './home.less'


@connect(state => state.home, { ...actions })
export default class Home extends Component {
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: '首页'
  }
  
  state = {
    page: 1,
    size: 10
  }

  componentDidMount () {
    this.handleGetList()
  }

  handleGetList() {
    this.props.dispatchRecommendList({
      orderType: 4,
      size: this.state.size,
      page: this.state.page
    })
  }

  handleGoDetail(id) {
    Taro.navigateTo({
      url: `/pages/detail/detail?id=1497001&egid=${id}`
    })
  }

  onReachBottom() {
    this.setState((prevState) => ({
      page: prevState.page + 1
    }), () => {
      this.handleGetList()
    })
  }

  render () {
    return (
      <View className='container'>
        <AtNoticebar>双十一大酬宾啦~</AtNoticebar>
        <View className='recommend-list'>
        {
          this.props.list.map((item, index) => (
            <View className='recommend-item flex-row' key={index} onClick={this.handleGoDetail.bind(this, item.id)}>
              <View className='picture'>
                <Image mode='scaleToFill' src={item.picUrl} />
              </View>
              <View className='info flex1'>
                <View className='title'>{item.title}</View>
                <View className='desc'>{item.description}</View>
              </View>
            </View>
          ))
        }
        </View>
      </View>
    )
  }
}
