import React , {Component} from 'react'
//导入路由组件
import {Scene,Router} from 'react-native-router-flux'
import HomeContainer from './Home/HomeContainer'
import MainContainer from  './Home/MainContainer'
import MovieContainer from  './Movie/MovieContainer'
import AboutContainer from  './About/AboutContainer'
import MovieDetail from './Movie/MovieDetail'
//app中只放 路由规则 具体的页面通过路由规则进行相关的访问
export default class  App extends Component{
    render(){
        return <Router>
        <Scene key="root">
            <Scene key="home" component={HomeContainer}  hideNavBar={true}/>
            <Scene key="main" component={MainContainer} title="主页" hideNavBar={false}/>
            <Scene key="movie" component={MovieContainer} title="电影列表" hideNavBar={false}/>
            <Scene key="about" component={AboutContainer} title="关于" hideNavBar={false}/>
            <Scene key="moviedetail" component={MovieDetail} title="电影详细" hideNavBar={false}/>
        </Scene>
        
    </Router>
    }
}
