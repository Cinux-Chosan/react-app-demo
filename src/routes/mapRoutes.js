/*
 * @Author: Chosan.Zhangjianjun
 * @Date: 2019-02-21 16:41:06
 * @Last Modified by: Chosan.Zhangjianjun
 * @Last Modified time: 2019-02-21 17:20:31
 */

import React from 'react';
import { join } from 'path';
import { Route, Switch, Redirect } from 'react-router-dom';
import routesConf from './routes.config';

/**
 * 将 routesConf 映射为 React 路由
 * @author Chosan.ZhangJianjun
 * @param {*} routes
 * @param {string} [parentPath='']
 * @returns
 */
function mapRoutes(routes, parentPath = '') {
  if (!routes) {
    return null;
  }
  return routes.map((route, index) => {
    const {
      component: Component,
      path = '',
      type,
      routes: subRoutes,
      ...rest
    } = route;
    const fullPath = join(parentPath, path);
    let routeComponent = null;
    switch (type) {
      // React-Router#Switch
      case 'switch': {
        routeComponent = (
          <Switch key={index} {...rest}>
            {mapRoutes(subRoutes, fullPath)}
          </Switch>
        );
        break;
      }

      // React-Router#Redirect
      case 'redirect': {
        routeComponent = <Redirect key={index} {...rest} />;
        break;
      }

      // React-Router#Route
      default: {
        routeComponent = (
          <Route
            key={index}
            path={fullPath}
            {...rest}
            render={props => {
              return (
                <Component {...props} yield={mapRoutes(subRoutes, fullPath)} />
              );
            }}
          />
        );
        break;
      }
    }
    return routeComponent;
  });
}

export default props => mapRoutes([routesConf]);
