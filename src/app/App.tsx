import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from '../pages/home/home.component';
import Login from '../pages/login/login.component';

import Header from '../components/header/header.component';

import { MainContainer } from './App.styles';

import { UserProvider } from '../contexts/user';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

const App = () => {
  return (
    <MainContainer>
      <UserProvider>
        <Header />
        <RouterProvider router={router} />
      </UserProvider>
    </MainContainer>
  );
}

export default App;
