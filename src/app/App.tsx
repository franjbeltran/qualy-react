import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Home from '../pages/home/home.component';
import Login from '../pages/login/login.component';

import Header from '../components/header/header.component';

import { MainContainer } from './App.styles';

import { UserProvider } from '../contexts/user';

import '../locales';
import { Authentication } from '../components/authentication/authentication.component';
import { Games } from '../pages/games/games.component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authentication><Home /></Authentication>,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/games',
    element: <Authentication><Games/></Authentication>
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
