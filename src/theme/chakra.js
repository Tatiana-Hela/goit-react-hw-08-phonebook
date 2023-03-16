import { extendTheme } from '@chakra-ui/react';
import themes from './themes';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const chakraTheme = extendTheme({
  colors: {
    ...themes.light,
  },
  config,
});

export default chakraTheme;
