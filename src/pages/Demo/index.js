import React, { Component } from 'react';
import Button from '../../components/Button';
import styles from './style.module.scss';
import { connect } from 'react-redux';
import { FETCH_USER_INFO } from '@localActions';
import { action } from '@localRedux';

export class Demo extends Component {
  onClick = () => action({ type: FETCH_USER_INFO });

  render() {
    const {
      userInfo: { userName }
    } = this.props;
    return (
      <div className={styles.demo}>
        {userName
          ? `当前用户名为：${userName}`
          : '（redux-saga演示）点击下方任意按钮获取用户名'}
        <Button onClick={this.onClick} />
      </div>
    );
  }
}

export default connect(({ userInfo }) => ({ userInfo }))(Demo);
