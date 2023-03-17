import Navbar from 'components/Navbar/Navbar';
import { Suspense } from 'react';
import Footer from 'components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

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
        <Footer />
      </Suspense>
    </>
  );
};
export default Layout;
