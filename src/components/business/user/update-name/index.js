import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import {
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
} from 'taro-ui'

import './index.scss'

export default class UpdateJob extends Component {
  static options = {
    addGlobalClass: true
  }
  static defaultProps = {
    isOpened: false,
    name: '',
    onCancel: () => {},
    onConfirm: () => {},
  }
  state = {
    value: this.props.name,
  }
  handleChange = (event) => {
    this.setState({
      value: event.detail.value,
    })
  }
  handleConfirm = () => {
    const name = this.state.value.trim()
    let bool = true
    if (name.length <= 2) {
      Taro.showToast({
        title: '昵称不能少于3个字',
        icon: 'none',
      })
      bool = false
    }
    if (bool) {
      this.props.onConfirm(name)
    }
  }
  render () {
    return (
      <AtModal
        closeOnClickOverlay={false}
        isOpened={this.props.isOpened}
      >
        <AtModalHeader>请输入新的昵称</AtModalHeader>
        <AtModalContent>
          <Input
            className="input"
            placeholder={this.props.name}
            maxLength={20}
            value={this.state.value}
            onInput={this.handleChange}
          ></Input>
        </AtModalContent>
        <AtModalAction>
          <Button onClick={this.props.onCancel}>取消</Button>
          <Button onClick={this.handleConfirm}>确定</Button>
        </AtModalAction>
      </AtModal>
    )
  }
}