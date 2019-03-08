import React from 'react';
import { Button } from 'antd';

export default ({ onClick }) => (
  <div onClick={onClick}>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>
);
