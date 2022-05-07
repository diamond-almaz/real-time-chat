import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { ROUTES } from './utils/constants';

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
          <Navigate to={ROUTES.chat}/>
      </Routes>
    )
    : (
      <Routes>
          {
              publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />}/>
              ))
          }
          <Navigate to={ROUTES.login}/>

      </Routes>
    );
};
