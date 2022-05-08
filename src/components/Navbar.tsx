import React, { useContext } from 'react';
import { Menu } from 'antd';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export const Navbar = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const logout = () => {
    auth.signOut();
  };

  const getSelectedKeys = () => {
    const result: string[] = [];
    if (user) {
      result.push(ROUTES.chat);
    } else {
      result.push(ROUTES.login, 'logout');
    }

    return result;
  };

  const selectedKeys = getSelectedKeys();

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={selectedKeys}
    >
      {
        user
          ? (
            <Menu.Item key="logout" onClick={logout}>
              Выйти
            </Menu.Item>
          ) : (
            <Menu.Item key={ROUTES.login}>
              <NavLink to={ROUTES.login}>Логин</NavLink>
            </Menu.Item>
          )}

      <Menu.Item key={ROUTES.chat} disabled={Boolean(user) === false}>Чат</Menu.Item>
    </Menu>
  );
};
