import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,ActivityIndicator,ScrollView} from 'react-native'

import MovieServices from '../../services/MovieServices'
const styles = StyleSheet.create({
    title:{
        fontSize:16,
        fontWeight:'bold',
        marginTop:5,
        marginLeft:5
    },
    vice_title:{
        fontSize:14,
        fontStyle:'italic'
    },
});
export default class MovieDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            movieInfo:{}  
        }
    }
    render(){
        return <View style={{marginTop:50}}>
            {this.createMovieInfo()}
        </View>
    }
    createMovieInfo = ()=>{
        if(this.state.isLoading){
            return <ActivityIndicator size="large"></ActivityIndicator>
        }else{
            return <ScrollView>
                {/*<View> ScrollView包起来 view不要了*/}
                    <Text style={styles.title}>{this.state.movieInfo.title}</Text>
                    <Image source={{uri:this.state.movieInfo.images.large}} style={{width:200,height:270,margin:5}}></Image>
                    <Text style={styles.vice_title}>电影简介：</Text>
                    <Text style={{lineHeight:30}}>{this.state.movieInfo.summary}</Text>
                {/*</View>*/}
            </ScrollView>
            
        }
    }
    //组件加载完毕后，获取电影详细数据
    //willMount获取数据怎么样？
    componentDidMount(){
        var id = this.props.id;
        MovieServices.getMovieInfo(id).then((data)=>{
            this.setState({
                movieInfo:data,
                isLoading:false
            })
        })   
    }
}