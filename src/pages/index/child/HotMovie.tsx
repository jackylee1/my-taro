import Taro, { Component } from '@tarojs/taro'
import { Commen } from './commen'
export class HotMovie extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      hotMovie: []
    }
  }


  componentWillMount() {
    let self = this
    Taro.request({
      url: 'https://www.easy-mock.com/mock/5bf27ef5700af43dcbc9c7bb/dban/movie/in_theaters',
    }).then(res => {
      self.setState({ hotMovie: res.data.subjects })
    })
  }

  render() {
    return (
      <Commen movies={this.state.hotMovie} />
    )
  }
}
