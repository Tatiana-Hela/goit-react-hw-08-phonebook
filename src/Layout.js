import Navbar from 'components/Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import ByFooter from 'components/ByFooter/ByFooter';

const Layout = () => {
  return (
    <>
      <Box backgroundColor="#589F2D" boxShadow="lg" rounded="md">
        <Navbar />
      </Box>
      <Suspense>
        <main>
          <Box maxWidth="1240px" margin="0 auto" padding="0 16px">
            <Outlet fallback={null} />
          </Box>
        </main>
        <ByFooter />
      </Suspense>
    </>
  );
};
export default Layout;
