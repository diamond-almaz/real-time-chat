import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { privateRoutes, publicRoutes } from './routes';
import { Context } from '.';
import { ROUTES } from './utils/constants';

export const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return user
    ? (
      <Routes>
        {
          privateRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />}/>
          ))
        }
        <Route
          path="*"
          element={<Navigate to={ROUTES.chat} replace />}
        />
      </Routes>
    )
    : (
      <Routes>
        {
          publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />}/>
          ))
        }
        <Route
          path="*"
          element={<Navigate to={ROUTES.login} replace />}
        />

      </Routes>
    );
};
