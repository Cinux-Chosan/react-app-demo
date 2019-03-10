import React, { Component } from 'react';
import { Layout } from 'antd';
import SiderContent from './sider';

const { Sider } = Layout;
export default class extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => this.setState({ collapsed });

  render() {
    return (
      <Sider
        // collapsible={true}
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <SiderContent />
      </Sider>
    );
  }
}
