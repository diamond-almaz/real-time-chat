import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Auth, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';

const app = initializeApp({
  apiKey: 'AIzaSyCCYctOLIdEYwVyLhspVW8jKEery5dKSqo',
  authDomain: 'real-time-chat-37f81.firebaseapp.com',
  projectId: 'real-time-chat-37f81',
  storageBucket: 'real-time-chat-37f81.appspot.com',
  messagingSenderId: '207360848887',
  appId: '1:207360848887:web:919b726d4f802bf2a2b4f2',
  measurementId: 'G-KXG1TPMQFW',
});

const store = {
  auth: getAuth(app),
  firestore: getFirestore(app),
};

export const Context = createContext<{
  auth: Auth,
  firestore: Firestore,
}>(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
