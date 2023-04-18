import UserMenu from 'components/Navbar/UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import { useAuth } from 'hooks/useAuth';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useColorMode, Icon, Switch } from '@chakra-ui/react';
import css from '../Navbar/Navbar.module.css';
import Navigation from './Navigation/Navigation';

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isChecked = colorMode === 'dark';

  return (
    <>
      <Icon as={FaSun} color="#fff" ml="8px" />
      <Switch
        colorScheme="gray"
        isChecked={isChecked}
        onChange={toggleColorMode}
        ml="4px"
        mr="4px"
      ></Switch>
      <Icon as={FaMoon} color="#fff" />
    </>
  );
}

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <UserAuth />}
      <ThemeSwitcher />
    </header>
  );
};

export default Navbar;
