/*
 * @Author: Chosan.Zhangjianjun
 * @Date: 2019-03-05 17:33:54
 * @Last Modified by: Chosan.Zhangjianjun
 * @Last Modified time: 2019-03-06 10:21:01
 */
import { findTreeNode } from '@utils';
import {
  SAVE_CATEGORIES,
  SAVE_POSTS_BY_CATEGORY,
  SAVE_POST
} from '@localActions';

export const categories = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case SAVE_CATEGORIES: {
      const { categories } = action;
      return categories || state;
    }
    case SAVE_POSTS_BY_CATEGORY:
      const { posts, cate } = action;
      return state.map(el => {
        const node = findTreeNode(el, cate);
        if (node) {
          node.children = posts;
        }
        return el;
      });
    default:
      break;
  }
  return state;
};

export const post = (state = { attributes: {} }, action) => {
  const { type, post } = action;
  if (type === SAVE_POST) {
    return { ...post };
  }
  return state;
};
