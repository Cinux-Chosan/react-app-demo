import React, { Component } from 'react';
import styles from './style.module.scss';
import { connect } from 'react-redux';
import { FETCH_POST_BY_ID } from '@localActions';
import { action } from '@localRedux';
import Marked from 'marked';

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
        attributes: { content, postType, title }
      }
    } = this.props;
    return (
      <div className={styles.postContent}>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: this.renderByType(content, postType)
          }}
        />
      </div>
    );
  }
}

export default connect(({ post }) => ({ post }))(Post);
