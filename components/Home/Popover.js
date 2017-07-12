/* eslint global-require: 0 */
/*svg bad*/
// import { Popover, NavBar, Icon ,Grid} from 'antd-mobile';
import React from 'react'

import Popover from 'antd-mobile/lib/popover';
import Icon from 'antd-mobile/lib/icon';
import NavBar from 'antd-mobile/lib/nav-bar';
import Grid from 'antd-mobile/lib/grid';
import {View,Text,StyleSheet,Image} from 'react-native'

const Item = Popover.Item;

export default class PopoverMe extends React.Component {
  state = {
    visible: true,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }
    return (<View><Text>p</Text>
      <NavBar iconName={false}
        mode="light"
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan"  data-seed="logId">扫一扫</Item>),
              (<Item key="5" value="special" style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
              (<Item key="6" value="button ct">
                <span style={{ marginRight: 5 }}>帮助</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [offsetX, 15],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 0.3rem',
              marginRight: '-0.3rem',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
        NavBar
      </NavBar>
    </View>);
  }
}
