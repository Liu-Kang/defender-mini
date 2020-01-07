import Taro, { Component } from '@tarojs/taro'
import { View, Input, Image, Textarea } from '@tarojs/components'
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
      address: '',
      intro: '',
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
  handleChooseLocation = () => {
    Taro.chooseLocation().then((res) => {
      this.setState((prevState) => ({
        info: {
          ...prevState.info,
          address: res.address,
        }
      }))
    })
  }
  handleChooseLogo = () => {
    Taro.chooseImage({
      count: 1,
    }).then((res) => {
      this.setState((prevState) => ({
        info: {
          ...prevState.info,
          logo: res.tempFilePaths[0],
        }
      }))
    })
  }
  handleChangeIntro = (event) => {
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        intro: event.detail.value,
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
                  className="name-input"
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
            <View className="field" onClick={this.handleChooseLocation}>
              <View className="field-name">公司地址</View>
              <View className="field-value">
                <View className="address">
                  {info.address || '选择地址'}
                </View>
              </View>
            </View>
            <View className="field" onClick={this.handleChooseLogo}>
              <View className="field-name">公司logo</View>
              <View className="field-value">
                <Image className="logo" mode="aspectFill" src={info.logo}></Image>
              </View>
            </View>
            <View className="field big-field">
              <View className="field-name">公司简介</View>
              <View className="field-value">
                <Textarea
                  className="intro-input"
                  border={false}
                  placeholder="请输入公司简介"
                  placeholderStyle="color: #999;"
                  value={info.intro}
                  onInput={this.handleChangeIntro}
                ></Textarea>
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
