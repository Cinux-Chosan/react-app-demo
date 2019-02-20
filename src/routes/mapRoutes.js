import React from 'react';
import { Route } from 'react-router-dom';
import routesConf from './routes.config';
import { join } from 'path';

function mapRoutes(routes, parentPath = '') {
  if (!routes) {
    return null;
  }
  return routes.map((route, index) => {
    const { component: Component, path, ...rest } = route;
    const fullPath = join(parentPath, path);
    return (
      <Route
        key={index}
        path={fullPath}
        {...rest}
        render={props => {
          return (
            <Component {...props} yield={mapRoutes(route.routes, fullPath)} />
          );
        }}
      />
    );
  });
}

export default props => mapRoutes([routesConf]);
