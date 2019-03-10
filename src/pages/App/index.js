import React, { Component, Suspense } from 'react';
import { Spin } from 'antd';
import BasicLayout from '@components/BasicLayout';
import styles from './App.module.scss';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    return (
      <>
        <Suspense
          fallback={
            <div className={styles.spin}>
              <Spin size="large" />
            </div>
          }
        >
          <BasicLayout>{this.props.yield}</BasicLayout>
        </Suspense>
      </>
    );
  }
}

export default connect(({ app }) => ({ app }))(App);
