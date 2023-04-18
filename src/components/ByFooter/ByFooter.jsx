import { AiFillHeart } from 'react-icons/ai';
import { Box, Text, Icon } from '@chakra-ui/react';
import css from '../ByFooter/ByFooter.module.css';

const ByFooter = () => {
  return (
    <footer className={css.footer}>
      <Box
        maxWidth="1240px"
        padding={{ base: '0 16px', md: '0 32px' }}
        textDecoration="overline"
      >
        <Text
          color="gray"
          textAlign={{ base: 'center', md: 'left' }}
          textDecoration="overline"
        >
          © 2023 | All Rights Reserved | Developed by{' '}
          <Icon
            as={AiFillHeart}
            color="#589F2D"
            width={{ base: '20px', md: '24px' }}
            height={{ base: '20px', md: '24px' }}
          />{' '}
          <a className={css.link} href="https://github.com/Tatiana-Hela">
            Tetiana Hela.
          </a>
        </Text>
      </Box>
    </footer>
  );
};
export default ByFooter;
