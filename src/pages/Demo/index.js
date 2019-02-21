import React, { Component } from 'react';
import Button from '../../components/Button';
import styles from './style.module.scss';

export default class extends Component {
  render() {
    return (
      <div className={styles.demo}>
        <Button />
      </div>
    );
  }
}
