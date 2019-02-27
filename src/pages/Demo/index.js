import React, { Component } from 'react';
import Button from '../../components/Button';
import styles from './style.module.scss';
import { connect } from 'react-redux';

import { Demo as D } from 'react-plugin-demo';

export class Demo extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'demo',
      payload: {
        data: 1
      }
    });
  }
  render() {
    return (
      <div className={styles.demo}>
        {this.props.demo.name}
        <D hi="this is a  demo" />
        <Button />
      </div>
    );
  }
}

export default connect(({ demo }) => ({ demo }))(Demo);
