import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from '../pages/home/home.component';
import Header from '../components/header/header.component';

import { MainContainer } from './App.styles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
]);

const App = () => {
  return (
    <MainContainer>
      <Header />
      <RouterProvider router={router} />
    </MainContainer>
  );
}

export default App;
