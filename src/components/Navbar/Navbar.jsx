import UserMenu from 'components/Navbar/UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import { useAuth } from 'hooks/useAuth';

import css from '../Navbar/Navbar.module.css';
import Navigation from './Navigation/Navigation';

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <UserAuth />}
    </header>
  );
};
export default Navbar;
