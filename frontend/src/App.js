import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import './App.css';

const App = () => {
  return (
      <Provider store={store}>
          <Router>
              <Navbar />
              <div className="container">
                  <Routes>
                      <Route path="/" element={<ProductList />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/checkout" element={<Checkout />} />
                  </Routes>
              </div>
          </Router>
      </Provider>
  );
};

export default App;