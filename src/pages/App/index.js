import React, { Component, Suspense } from 'react';
import { Spin } from 'antd';
import styles from './App.module.scss';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <Suspense
          fallback={
            <div className={styles.spin}>
              <Spin size="large" />
            </div>
          }
        >
          {this.props.yield}
        </Suspense>
      </>
    );
  }
}

export default connect(({ app }) => ({ app }))(App);
