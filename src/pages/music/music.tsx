import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './music.scss'
export default class Index extends Component {

    config: Config = {
        navigationBarTitleText: '音乐'
    }
    constructor() {
        super(...arguments)
        this.state = {
            firstMv: [],
            baseUrl: 'http://47.100.49.193:3000',
            recomMusicList:'',
            recomNewMusicList:''
        }
    }

    componentDidMount() {
        let self = this 
        Taro.request({ url: this.state.baseUrl + '/mv/first' }).then(res => {
            self.setState({ firstMv: res.data.data.slice(0, 8) })
        })

        Taro.request({ url: this.state.baseUrl + '/personalized' }).then(res => {
            self.setState({ recomMusicList: res.data.result.slice(0, 6) })
        })

        Taro.request({ url: this.state.baseUrl + '/personalized/newsong' }).then(res => {
            self.setState({ recomNewMusicList: res.data.result.slice(0, 6) })
        })
    }

    toListPage(e){
        console.log(e.target)
    }

    render() {
        return (
            <View id="music">
                <View>
                    <Swiper
                        className='swiper'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        autoplay>
                        {this.state.firstMv.map(item => {
                            return (
                                <SwiperItem>
                                    <View>
                                        <Image src={item.cover} />
                                    </View>
                                </SwiperItem>
                            )
                        })}
                    </Swiper>
                </View>

                <View class="iconGroup">
                    <View>
                        <Text class="iconfont icon-calendar"></Text>
                        <Text class="iconTitle">每日推荐</Text>
                    </View>
                    <View>
                        <Text class="iconfont icon-yinleliebiao"></Text>
                        <Text class="iconTitle">歌单</Text>
                    </View>
                    <View>
                        <Text class="iconfont icon-paixingbang"></Text>
                        <Text class="iconTitle">排行榜</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text>推荐歌单</Text>
                        <View class="listMain" onClick={this.toListPage}>
                            {this.state.recomMusicList.map(item=>{
                                return (
                                    <View class="listView" key={item.id}>
                                        <View><Image data-id={item.id} class="listImage" src={item.picUrl}/></View>
                                        <Text class="listTitle">{item.name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                    <View>
                        <Text>最新音乐</Text>
                        <View class="listMain">
                            {this.state.recomNewMusicList.map(item=>{
                                return (
                                    <View class="listView" key={item.id}>
                                        <View><Image data-id={item.id} class="listImage" src={item.song.album.blurPicUrl}/></View>
                                        <Text class="listTitleNoWrap">{item.name}</Text>
                                        <Text class="listTitle">{item.song.artists[0].name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </View >
        )
    }
}

