import { cleanup, render, RenderResult } from '@testing-library/react';
import App from '../App';

jest.mock('axios', () => ({
  axios: {
    get: jest.fn()
  }
}));

jest.mock('../../components/header/header.component', () => (
  (props: object) => {
    const Header = 'header';
    return <Header is='header' data-testid='header' {...props} />;
  }
));

jest.mock('react-router-dom', () => ({
  createBrowserRouter: jest.fn(),
  RouterProvider: (props: object) => {
    const RouterProvider = 'RouterProvider';
    return <RouterProvider is='router-provider' {...props} />
  }
}));

describe('App component', () => {
  afterEach(cleanup);

  it('renders the structure', () => {
    // Given

    // When
    const { container }: RenderResult = render(<App />);

    // Then
    expect(container).toMatchSnapshot();
  });
});
