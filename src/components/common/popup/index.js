import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Popup extends Component {
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    title: '',
    showHead: true,
    closeOnClickMask: false,
    onConfirm: () => {},
    onCancel: () => {}
  }
  state = {
    duration: 300,
    animContentData: [],
    animMaskData: [],
  }
  componentDidMount () {
    this.createMaskShowAnim()
    this.createContentShowAnim()
  }
  handlePopupCancel = () => {
    this.createMaskHideAnim()
    this.createContentHideAnim()
    setTimeout(() => {
      this.props.onCancel()
    }, this.state.duration)
  }
  handlePopupConfirm = () => {
    this.createMaskHideAnim()
    this.createContentHideAnim()
    setTimeout(() => {
      this.props.onConfirm()
    }, this.state.duration)
  }
  handleClickMask = () => {
    if (this.props.closeOnClickMask) {
      this.handlePopupCancel()
    }
  }
  createContentShowAnim () {
    const animation = Taro.createAnimation({
      duration: this.state.duration,
      timingFunction: 'ease-out'
    })
    this.contentAnim = animation
    animation.translateY(0).step()
    this.setState({
      animContentData: animation.export()
    })
  }
  createContentHideAnim () {
    this.contentAnim.translateY('100%').step()
    this.setState({
      animContentData: this.contentAnim.export()
    })
  }
  createMaskShowAnim () {
    const animation = Taro.createAnimation({
      duration: this.state.duration,
      timingFunction: 'ease-out'
    })
    this.maskAnim = animation
    animation.opacity(0.3).step()
    this.setState({
      animMaskData: animation.export()
    })
  }
  createMaskHideAnim () {
    this.maskAnim.opacity(0).step()
    this.setState({
      animMaskData: this.maskAnim.export()
    })
  }
  render () {
    return (
      <View className="popup">
        <View className="popup-mask" animation={animMaskData} onClick={this.handleClickMask}></View>
        <View className="popup-main" animation={animContentData}>
          {
            this.state.showHead && (
              <View className="popup-header">
                <Text className="gray" onClick={this.handlePopupCancel}>取消</Text>
                <Text>{this.props.title || ''}</Text>
                <Text className="blue" onClick={this.handlePopupConfirm}>确定</Text>
              </View>
            )
          }
          <View className="popup-content">
            {this.props.children}
          </View>
        </View>
      </View>
    )
  }
}