import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import App from './App';
import HomePage from './components/pages/HomePage';
import ProductItemPage from './components/pages/ProductItemPage';
import ProductsPage from './components/pages/ProductsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="/products">
          <Route index element={<ProductsPage />} />
          <Route path=":id" element={<ProductItemPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
