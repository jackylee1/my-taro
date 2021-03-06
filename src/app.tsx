import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'
import './icon.scss'
class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/GitHub/Trending/trending',
      'pages/index/index',
      'pages/music/music',
      'pages/MovieDetail/movieDetail',
      'pages/MovieType/MovieType',
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list : [
        {text:'GitHub', pagePath:'pages/GitHub/Trending/trending',iconPath:'./img/github.png',selectedIconPath:'./img/github.png'},
        {text:'Music', pagePath:'pages/music/music',iconPath:'./img/music.png',selectedIconPath:'./img/music.png'},
        {text:'Movie', pagePath:'pages/index/index',iconPath:'./img/movie.png',selectedIconPath:'./img/movie.png'},
      ]
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
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
