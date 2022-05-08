import { Button } from 'antd';
import React, { useContext } from 'react';
import { Context } from '../index';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const Login = () => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <Button className='h-screen' type="primary" size='large' shape="round" onClick={login}>
      Авторизоваться через Google
    </Button>
  );
};
