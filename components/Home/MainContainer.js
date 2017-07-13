import React, { Component } from 'react'

import { View, Text, Image, Button } from 'react-native'

//ant design 移动版的组件都无法使用，无法可想，暂时不踩坑了，回头再看
// import MenuExample from './MenuExample'  fvck

//气泡 失败
// import PopoverMe from './Popover'

//navbar
// import NavbarMe from './Navbar'

//teb
// import TabExample from './Tabs'
// 1. 导入拍照组件  拍照功能无法实现，可能是由于安卓构建工具版本问题，以及证书缺失，导致无法调用设备的一些功能，一一解决，应该不是证书的原因，
// 是sdk platform版本问题
import ImagePicker from 'react-native-image-picker'

// 2. 拍照时候的一些参数
var photoOptions = {
  //底部弹出框选项
  title: '请选择',
  cancelButtonTitle: '取消',
  takePhotoButtonTitle: '拍照',
  chooseFromLibraryButtonTitle: '选择相册',
  quality: 0.75,
  allowsEditing: true,
  noData: false,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class MainContainer extends Component {
  // 3. 
  constructor(props) {
    super(props);
    this.state = {
      imgURL: ''
    }
  }
// https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg
  render() {
    return <View style={{ marginTop: 50 }}>
        <Button title="上传头像" onPress={this.cameraAction}></Button>
        {/*<TabExample></TabExample>*/}
        {/*<NavbarMe></NavbarMe>*/}
        {/*<PopoverMe></PopoverMe>        */}
        <Image source={require('../../src/images/mainbak.jpg')} style={{marginTop:60}}>
              
              <Image source={{ uri: this.state.imgURL }} style={{ width: 200, height: 200, borderRadius: 100,marginLeft:10}}></Image>
        </Image>
      {/*4. */}
    </View>
  }

  // 5. 点击按钮，进行拍照的方法
  cameraAction = () => {
    ImagePicker.showImagePicker(photoOptions, (response) => {
      console.log('response' + response);
      // 判断用户是否点击了取消按钮
      if (response.didCancel) {
        return
      }

      this.setState({
        imgURL: response.uri
      });
    })
  }
}