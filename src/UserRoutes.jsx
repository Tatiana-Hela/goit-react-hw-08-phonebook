import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
