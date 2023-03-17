import { AiFillHeart } from 'react-icons/ai';
import { Box, Text, Icon } from '@chakra-ui/react';
import css from '../footer/Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Box maxWidth="1240px" padding="0 16px" textDecoration="overline">
        <Text color="gray" textDecoration="overline">
          © 2023 | All Rights Reserved | Developed by{' '}
          <Icon as={AiFillHeart} color="#589F2D" width="24px" height="24px" />{' '}
          <a className={css.link} href="https://github.com/Tatiana-Hela">
            Tetiana Hela.
          </a>
        </Text>
      </Box>
    </footer>
  );
};
export default Footer;
