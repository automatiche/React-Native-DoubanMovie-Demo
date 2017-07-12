import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,ActivityIndicator,ListView,TouchableOpacity} from 'react-native'

import {Actions} from 'react-native-router-flux'
import MovieServices from '../../services/MovieServices'
export default class MovieContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            movielist:[]
        }
    }
    render(){
        return <View style={{marginTop:50}}>
            {this.createMovieList()}
        </View>
    }
    createMovieList = ()=>{
        if(this.state.isLoading){
            return <ActivityIndicator size="large"></ActivityIndicator>
        }else{
             return <ListView 
                dataSource={this.state.movielist}
                renderRow={(item)=><View style={{flexDirection:'row',padding:5,borderBottomColor:'#eee',borderBottomWidth:1}}>
                    {/*//点击事件跳转到moviedetail组件，同时把数据的id传给moviedetail组件，它就有了props.id*/}
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{Actions.moviedetail({id:item.id})}}>
                        <Image source={{uri:item.images.medium}} style={{width:100,height:140,marginRight:10}}></Image>
                    </TouchableOpacity>
                    <View style={{justifyContent:'space-around'}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>{item.title}</Text>
                        <Text>电影类型:{item.genres.join(',')}</Text>
                        <Text>上映年份:{item.year}</Text>
                        <Text>豆瓣评分 {item.rating.average}</Text>
                    </View>                        
                </View>}
            />
        }
    }

////根据电影数据 渲染电影列表  手动渲染  不如直接veiwlist渲染
/*    renderMovieList = ()=>{
        return this.state.movielist.map((item,i)=>{

            console.warn(item.title)
            // return <Text>{item.title}</Text>
        })
    }*/
    //获取数据，为的是把他更新到this.state.movielist里面.  然后createMovielist方法再使用movielist渲染页面
    getMovieList= ()=>{
        // 创建一个空的数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        //引入的模块不加this
        // 调用MovieServices.getMovieList方法，它返回一个promise对象
        MovieServices.getMovieList().then((data)=>{
            this.setState({
                //同时做了两件事情 我的理解  先把数据"克隆"给vlewlist专属数据源ds  也把这个ds数据源对象赋值给state.movielist
                // 感觉有点多余？不太理解cloneWithRows
                movielist:ds.cloneWithRows(data.subjects),
                isLoading:false
            })
        })
    }

    componentDidMount(){
        this.getMovieList();
    }

}
/*class ListView1 extends Component{
        constructor(props){
            super(props);
            var ds  = new ListView.DataSource({rowHasChanged:(r1,r2)=>{r1!==r2}});
            this.state = {
                movielist:ds.cloneWithRows(['斯慕吉','戚风','贝克慕斯','卡彭贝吉','斯慕吉','戚风','贝克慕斯','卡彭贝吉','斯慕吉','戚风'])
            }
        }
        render(){
            return (
                <View>
                    <ListView dataSource={this.state.movielist} 
                            renderRow={(rowDate)=>{<Text>{rowDate}</Text>}}
                    />
                </View>
            )
        }
    }*/