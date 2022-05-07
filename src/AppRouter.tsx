import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Chat } from './components/Chat';
import { Login } from './components/Login';
import { privateRoutes, publicRoutes } from './routes';

export const AppRouter = () => {
  const user = false;
  return user
    ? (
      <Routes>
        {
          privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />}/>
          ))
        }
        <Route path="*" element={<Chat />}/>
      </Routes>
    )
    : (
      <Routes>
        {
          publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />}/>
          ))
        }
        <Route path="*" element={<Login />}/>

      </Routes>
    );
};
