import Navbar from 'components/Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <Box backgroundColor="#007D34" boxShadow="lg" rounded="md">
        <Navbar />
      </Box>
      <Suspense>
        <Outlet fallback={null} />
      </Suspense>
    </>
  );
};
export default Layout;
