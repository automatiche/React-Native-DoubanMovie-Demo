import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default class AboutContainer extends Component{
    render(){
        return <View style={{marginTop:50}}>
            <Image source={require('../../images/aboutbak.jpg')} style={{width:'100%',height:'100%'}}>
            <Text style={styles.welcome}>        豆瓣在去年八月决定成立影业公司，开始电影创作。豆瓣一直是最大的文化社区平台，影业将会延续豆瓣的一些传统。在这里我们准备公布一些影业公司的计划，发布我们的第一个项目——“青年导演短片计划”。</Text>
            <Text style={styles.instructions}>       豆瓣影业的缘起是因为写作平台“豆瓣阅读”的实践——2万多作者在这里写作，大量原创小说在这里发表。最近一年十部小说售出了影视改编权，2部舞台剧改编上演，三百多名编剧申请加入“改编计划”。豆瓣的故事在广泛地成为影视行业的素材。</Text>
            <Text style={styles.instructions}>        现在豆瓣自己做影业，可以更专注地在原创小说中找到那些既有豆瓣的风格特点、又突破了现有影视行业内容短板的作品，更专心地把它们拍出来。我们希望自己的“更专心”能让“豆瓣故事”走得更快更远。</Text>
            </Image>
        </View>
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    opacity:0.7
  },
  welcome: {
    fontSize: 16,
    textAlign: 'left',
    margin: 5,
    marginTop:10,
    marginBottom:10
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
});