import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { Box, Text, Icon } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '150px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px 0',
      }}
    >
      <Box maxWidth="1240px" padding="0 16px" textDecoration="overline">
        <Text color="gray" textDecoration="overline">
          © 2023 | All Rights Reserved | Developed by{' '}
          <Icon as={AiFillHeart} color="#589F2D" width="24px" height="24px" />{' '}
          <Link href="https://github.com/Tatiana-Hela">Tetiana Hela.</Link>{' '}
        </Text>
      </Box>
    </footer>
  );
};
export default Footer;
