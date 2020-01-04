import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export default class DaiButton extends Component {
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    width: 156,
    height: 64,
    fontSize: 28,
    type: 'primary',
    round: false,
    disabled: false,
    onClick: () => {}
  }
  componentDidMount () {
  }
  handleClick = () => {
    if (!this.props.disabled) {
      this.props.onClick()
    }
  }
  render () {
    const props = this.props;
    const width = Taro.pxTransform(props.width)
    const height = Taro.pxTransform(props.height)
    const fontSize = Taro.pxTransform(props.fontSize)
    const classes = [
      'button',
      props.type,
      props.round ? 'round' : '',
      props.disabled ? 'disabled' : '',
      props.className,
    ]
    return (
      <View
        onClick={this.handleClick}
        className={classes.join(' ')}
        style={`width:${width};height:${height};font-size:${fontSize}`}
      >
        {props.children}
      </View>
    )
  }
}