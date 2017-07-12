//expected a component class ,got [object object] hehe
import React, { Component } from 'react'

import { View, Text, Image, Button } from 'react-native'

// import { Tabs, WhiteSpace } from 'antd-mobile';
import Tabs,{TabPane} from 'antd-mobile/lib/tabs'
import  WhiteSpace  from 'antd-mobile/lib/white-space'
 
export default class TabExample extends Component{
    
    constructor(props){
        super(props);

    }
    componentDidMount(){
      

    }

    render() {
        return <Tabs defaultActiveKey="2">
      <TabPane tab="选项卡一" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          <Text>选项卡一内容</Text>
        </div>
      </TabPane>
      <TabPane tab="选项卡二" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          <Text>2</Text>
        </div>
      </TabPane>
      <TabPane tab="选项卡三" key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
          <Text>3</Text>
        </div>
      </TabPane>
    </Tabs>

    }

}

