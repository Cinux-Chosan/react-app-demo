import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '@components/Header';
import Sider from '@components/Sider';
import Content from '@components/Content';

export default class extends Component {
  render() {
    return (
      <Layout className="h100p">
        <Header />
        <Layout>
          <Sider />
          <Layout>{this.props.children}</Layout>
        </Layout>
      </Layout>
    );
  }
}
