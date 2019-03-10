import React, { Component } from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux';
import { BackTop, Divider } from 'antd';
import Marked from 'marked';
import { FETCH_POST_BY_ID } from '@localActions';
import { action } from '@localRedux';
import { timeFormat } from '@utils';

export class Post extends Component {
  componentDidMount() {
    const {
      match: {
        params: { postId }
      }
    } = this.props;
    action(FETCH_POST_BY_ID, postId);
  }

  renderByType(content = '', type) {
    switch (type) {
      case 'md':
      case 'markdown':
        content = Marked(content);
        break;
      case 'html':
        break;
      default:
        break;
    }
    return content;
  }

  render() {
    const {
      post: {
        attributes: { content, postType, title, createTime, lastUpdateTime }
      }
    } = this.props;
    return (
      <div className={styles.postContent}>
        <h1 className={styles.title}>{title}</h1>
        <Divider orientation="right">
          <span className={styles.dividerText}>
            文章创建于 {timeFormat(createTime)}， 最后更新于{' '}
            {timeFormat(lastUpdateTime)}
          </span>
        </Divider>
        <div
          dangerouslySetInnerHTML={{
            __html: this.renderByType(content, postType)
          }}
        />
        <BackTop target={() => document.getElementById('content-layout')} />
      </div>
    );
  }
}

export default connect(({ post }) => ({ post }))(Post);
