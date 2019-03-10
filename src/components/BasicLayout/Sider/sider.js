import React from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { action } from '@localRedux';
import {
  FETCH_CATEGORIES,
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POST_BY_ID
} from '@localActions';
import { findTreeNode } from '@utils';

const { SubMenu } = Menu;

class Sider extends React.Component {
  onOpenChange = openKeys => {
    const { categories } = this.props;
    const clickedItem = openKeys[openKeys.length - 1];
    for (const category of categories) {
      const node = findTreeNode(category, clickedItem);
      if (node && !node.children) {
        const { _id } = node;
        action(FETCH_POSTS_BY_CATEGORY, _id);
        break;
      }
    }
  };

  onMenuClick = ({ key }) => {
    const {
      location: { pathname }
    } = this.props;
    const dest = `/post/${key}`;
    if (pathname !== dest) {
      this.props.history.push(dest);
      action(FETCH_POST_BY_ID, key);
    }
  };

  componentDidMount() {
    action(FETCH_CATEGORIES);
  }

  mapMenu = menu => {
    const { type } = menu;
    // 文章具有 type: 'post'
    if (type === 'post') {
      const {
        _id,
        attributes: { title }
      } = menu;
      return (
        <Menu.Item key={_id}>
          <Icon type="file-text" />
          {title}
        </Menu.Item>
      );
    } else {
      const { _id, name, children = [] } = menu;
      return (
        <SubMenu
          key={_id}
          title={
            <span>
              <Icon type="snippets" />
              <span>{name}</span>
            </span>
          }
        >
          {children.map(child => this.mapMenu(child, false))}
        </SubMenu>
      );
    }
  };

  render() {
    const { categories = [] } = this.props;
    return (
      <Menu
        mode="inline"
        onOpenChange={this.onOpenChange}
        onClick={this.onMenuClick}
      >
        {categories.map(category => this.mapMenu(category))}
      </Menu>
    );
  }
}

export default withRouter(connect(({ categories }) => ({ categories }))(Sider));
