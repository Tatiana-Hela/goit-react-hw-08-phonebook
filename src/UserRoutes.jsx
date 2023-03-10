import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute.js/RestrictedRoute';
import Layout from 'Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./components/pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('./components/pages/ContactsPage/ContactsPage')
);
const RegisterPage = lazy(() =>
  import('./components/pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('./components/pages/LoginPage/LoginPage'));

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
export default UserRoutes;
