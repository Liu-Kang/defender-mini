import Taro, { Component } from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import industries from '@enums/industry'

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
      industry: {},
    },
    industryColumn: [],
  }
  componentDidMount () {
    const column =  industries.map((item) => ({
      label: item.label,
      pid: item.pid,
    }))
    this.setState({
      industryColumn: [column, industries[0].children],
    })
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
  handleBack = () => {
    Taro.navigateBack();
  }
  handleChangeName = (event) => {
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        name: event.detail.value,
      }
    }))
  }
  handleIndustryColumeChange = (event) => {
    if (event.detail.column === 0) {
      this.setState((prevState) => ({
        industryColumn: [
          prevState.industryColumn[0],
          industries[event.detail.value].children,
        ],
      }))
    }
  }
  handleIndustryChange = (event) => {
    const value = event.detail.value
    const industrytgt = industries[value[0]].children[value[1]]
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        industry: industrytgt,
      }
    }))
  }
  handleSubmit = () => {

  }
  render () {
    const { info, industryColumn } = this.state
    return (
      <View className="container">
        <View className="content">
          <View className="form">
            <View className="field">
              <View className="field-name">公司名称</View>
              <View className="field-value">
                <Input
                  border={false}
                  type="text"
                  placeholder="请输入公司名称"
                  placeholderStyle="color: #999;"
                  value={info.name}
                  onInput={this.handleChangeName}
                ></Input>
              </View>
            </View>
            <View className="field">
              <View className="field-name">公司行业</View>
              <View className={`field-value ${info.industry.label ? '' : 'empty'}`}>
                <Picker
                  mode="multiSelector"
                  range={industryColumn}
                  rangeKey="label"
                  onColumnChange={this.handleIndustryColumeChange}
                  onChange={this.handleIndustryChange}
                >
                  {info.industry.label || '请选择'}
                </Picker>
              </View>
            </View>
          </View>
          <View className="form-btn">
            <AtButton type="secondary" size="small" onClick={this.handleBack}>返回</AtButton>
            <AtButton className="ml40" type="primary" size="small" onClick={this.handleSubmit}>提交</AtButton>
          </View>
        </View>
      </View>
    )
  }
}
