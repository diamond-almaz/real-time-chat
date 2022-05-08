import React, { useContext } from 'react';
import { Layout, Spin } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { Navbar } from './components/Navbar';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <BrowserRouter>
      <Layout className="layout h-screen">
        <Header>
          <Navbar />
        </Header>

        <Content className='h-full flex items-center justify-center'>
          <AppRouter />
        </Content>

        <Footer className='flex justify-center'>
          <span>
            Created by
            {' '}
            <a href='https://github.com/diamond-almaz' target='_blank' rel="noreferrer">
              diamond-almaz
            </a>
          </span>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
