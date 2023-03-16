import UserMenu from 'components/Navbar/UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import { useAuth } from 'hooks/useAuth';
import { useColorMode, Button, Switch } from '@chakra-ui/react';
import css from '../Navbar/Navbar.module.css';
import Navigation from './Navigation/Navigation';

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isChecked = colorMode === 'dark';

  return <Switch isChecked={isChecked} onChange={toggleColorMode}></Switch>;
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
