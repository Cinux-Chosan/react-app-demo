/*
 * @Author: Chosan.Zhangjianjun
 * @Date: 2019-02-21 17:20:55
 * @Last Modified by: Chosan.Zhangjianjun
 * @Last Modified time: 2019-02-21 19:08:16
 */

import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import App from '@pages/App';
import Post from '@pages/Post';

// type: switch 则其 routes 中的路由会被封装在 React-Router#Switch 中
// type: redirect 代表 React-Router#Redirect
// type: undeinfed（无 type），代表页面，必须有 path 和 component 属性，用于 React-Router#Route

// https://itnext.io/async-react-using-react-router-suspense-a86ade1176dc
const lazyImport = filename => lazy(() => import(`${filename}`));

export default {
  path: '/',
  component: App,
  routes: [
    {
      type: 'switch',
      routes: [
        {
          path: 'welcome',
          component: () => <span>Welcome!</span>
        },
        {
          path: 'post/:postId',
          component: Post // lazy(() => import('@pages/Post'))
        },
        {
          path: 'demo',
          // 子路由会嵌套在 {props.yield} 位置
          component: props => (
            <>
              try <Link to="/demo/sub">/demo/sub</Link>
              {props.yield}
            </>
          ),
          routes: [
            {
              path: 'sub',
              component: () => 'Hi, I am the sub route!'
            }
          ]
        },
        {
          type: 'redirect',
          to: 'welcome'
        }
      ]
    }
  ]
};
