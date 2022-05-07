import { Chat } from './components/Chat';
import { Login } from './components/Login';
import { ROUTES } from './utils/constants';

export const publicRoutes = [
  {
    path: ROUTES.login,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: ROUTES.chat,
    Component: Chat,
  },
];
