import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from 'components/Navbar/Navbar';
import UserRoutes from 'UserRoutes';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <UserRoutes />
    </Provider>
  );
}

export default App;
