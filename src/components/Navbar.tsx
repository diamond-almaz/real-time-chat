import {
  Menu, PageHeader, Tabs,
} from 'antd';
import React from 'react';

export const Navbar = () => {
  const user = false;
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
    >
      <Menu.Item>{user ? 'Выйти' : 'Логин'}</Menu.Item>
      <Menu.Item disabled>Чат</Menu.Item>
    </Menu>
  );
};
