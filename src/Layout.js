import Navbar from 'components/Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Suspense>
        <Outlet fallback={null} />
      </Suspense>
    </div>
  );
};
export default Layout;
