import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtForm, AtButton, AtInput } from 'taro-ui'

import '@styles/theme.scss'
import './add.scss'


export default class Update extends Component {
  static options = {
    addGlobalClass: true,
  }
  config = {
    navigationBarTitleText: '新增公司',
    navigationBarBackgroundColor: '#FFF',
  }
  state = {
    info: {
      logo: '',
      name: '',
      industry: '',
    },
  }
  componentDidMount () {
    
  }
  handleUploadLogo = () => {
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
  handleSubmit = () => {

  }
  handleBack = () => {

  }
  render () {
    const { info } = this.state
    return (
      <View className="container">
        <View className="content">
          <AtForm>
            <AtInput
              title="公司名称"
              type="text"
              placeholder="请输入公司名称"
              value={info.name}
              onChange={this.handleChange}
            />
            <AtInput
              title="公司行业"
              type="text"
              placeholder="请输入行业"
              value={info.industry}
              onChange={this.handleChange}
            />
          </AtForm>
          <View className="form-btn">
            <AtButton type="secondary" size="small" onClick={this.handleBack}>返回</AtButton>
            <AtButton className="ml40" type="primary" size="small" onClick={this.handleSubmit}>提交</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
