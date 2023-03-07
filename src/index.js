import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from 'components/Navbar/Navbar';
import UserRoutes from 'UserRoutes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
