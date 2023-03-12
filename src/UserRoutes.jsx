import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const PublicRoute = lazy(() => import('./components/PublicRoute/PublicRoute'));
const PrivateRoute = lazy(() =>
  import('./components/PrivateRoute/PrivateRoute')
);
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
    <Suspense>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
