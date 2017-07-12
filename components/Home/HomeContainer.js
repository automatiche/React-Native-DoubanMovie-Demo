import React,{Component} from 'react'

import {View,Text,StyleSheet,Image} from 'react-native'

import Swiper from 'react-native-swiper';

import {Actions} from 'react-native-router-flux'
//定义轮播图的样式
var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

 
export default class HomeContainer extends Component{
     render(){
        return (
    <View>
      <Swiper style={styles.wrapper} showsButtons={true} height={170} autoplay={true}>
        <View style={styles.slide1}>
          <Image source={{uri:'http://bpic.588ku.com/back_pic/00/08/99/63562c762a5b262.jpg!ww800'}} resizeMode="stretch" style={{width:'100%',height:'100%'}}></Image>
        </View>
        <View style={styles.slide2}>
          <Image source={{uri:'http://bpic.588ku.com/back_pic/00/12/05/38563a1c3083e01.jpg!ww800'}} resizeMode="stretch" style={{width:'100%',height:'100%'}}></Image>
        </View>
        <View style={styles.slide3}>
          <Image source={{uri:'http://bpic.588ku.com/back_pic/03/60/91/9957a6ddc3ae3aa.jpg!ww800'}} resizeMode="stretch" style={{width:'100%',height:'100%'}}></Image>
        </View>
        <View style={styles.slide3}>
          <Image source={{uri:'http://bpic.588ku.com/back_pic/03/70/29/6657b5d72888a56.jpg!ww800'}} resizeMode="stretch" style={{width:'100%',height:'100%'}}></Image>
        </View>
        <View style={styles.slide3}>
          <Image source={{uri:'http://bpic.588ku.com/back_pic/03/71/11/6057b71c085e1b0.jpg!ww800'}} resizeMode="stretch" style={{width:'100%',height:'100%'}}></Image>
        </View>
      </Swiper>
      <View style={{flexDirection:'row',justifyContent:'space-around',height:50,backgroundColor:'orange',alignItems:'center'}}>
        <Text onPress={Actions.main}>主页</Text>
        <Text onPress={Actions.movie}>电影</Text>
        <Text onPress={Actions.about}>关于</Text>
      </View>  
    </View> 
        )           
    }
}