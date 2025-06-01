import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import { routePaths } from './constants/routePaths';

const router = createBrowserRouter([
  {
    path: routePaths.root,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: routePaths.products, element: <ProductsPage /> },
    ],
  },
]);

export const Root = () => <RouterProvider router={router} />;
