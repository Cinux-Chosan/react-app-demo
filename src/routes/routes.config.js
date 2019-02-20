import React from 'react';
import App from '../App';

export default {
  path: '/',
  component: App,
  routes: [
    {
      path: 'a',
      component: props => {
        return <>mmmmmm{props.yield}nnnn</>;
      },
      routes: [
        {
          path: 'c',
          component: () => 'ccccc'
        }
      ]
    },
    {
      path: 'b',
      component: () => 'bbbbb'
    }
  ]
};
