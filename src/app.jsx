import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'
import Home from './pages/home'

import './app.scss'

const store = configStore()

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/home/home',
      'pages/user/user',
      'pages/user/update/update',
      'pages/vote/vote',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Defender',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#C3C2C1',
      selectedColor: '#FF8C00',
      borderStyle: 'white',
      list: [{
        iconPath: './assets/images/rank.png',
        selectedIconPath: './assets/images/rank_on.png',
        pagePath: 'pages/home/home',
        text: '劣迹榜'
      }, {
        iconPath: './assets/images/vote.png',
        selectedIconPath: './assets/images/vote_on.png',
        pagePath: 'pages/vote/vote',
        text: '去投票'
      }, {
        iconPath: './assets/images/user.png',
        selectedIconPath: './assets/images/user_on.png',
        pagePath: 'pages/user/user',
        text: '个人中心'
      }]
    },
    networkTimeout: {
      request: 15000
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
