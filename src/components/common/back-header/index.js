import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class BackHeader extends Component {
  static defaultProps = {
    color: '#73BFFF',
  }
  render () {
    return (
      <View className="back-header" style={{
        'background-color': this.props.color
      }}>
        <View className="back-radius" style={{
          'background-color': this.props.color
        }}></View>
      </View>
    )
  }
}