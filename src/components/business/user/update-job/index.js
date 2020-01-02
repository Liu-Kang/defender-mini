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
    job: '',
    onCancel: () => {},
    onConfirm: () => {},
  }
  state = {
    value: this.props.job,
  }
  handleChange = (event) => {
    this.setState({
      value: event.detail.value,
    })
  }
  handleConfirm = () => {
    const job = this.state.value.trim()
    let bool = true
    if (job.length <= 0) {
      Taro.showToast({
        title: '请输入您的职业',
        icon: 'none',
      })
      bool = false
    }
    if (bool) {
      this.props.onConfirm(job)
    }
  }
  render () {
    return (
      <AtModal
        closeOnClickOverlay={false}
        isOpened={this.props.isOpened}
      >
        <AtModalHeader>请输入您的职业</AtModalHeader>
        <AtModalContent>
          <Input
            className="input"
            placeholder={this.props.job}
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