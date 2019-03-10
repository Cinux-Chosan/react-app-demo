import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';

export default class extends Component {
  render() {
    return (
      <Layout className="h100p">
        <Header />
        <Layout>
          <Sider />
          <Layout id="content-layout">
            <Content>{this.props.children}</Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
