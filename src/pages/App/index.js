import React, { Component, Suspense } from 'react';
import { Spin } from 'antd';
import styles from './App.module.scss';

class App extends Component {
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
          {this.props.yield}
        </Suspense>
      </>
    );
  }
}

export default App;
