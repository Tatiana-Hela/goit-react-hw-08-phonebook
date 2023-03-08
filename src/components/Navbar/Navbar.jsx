import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from 'components/Navbar/UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import css from '../Navbar/Navbar.module.css';

import { isUserLogin } from 'redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <header className={css.header}>
      <NavLink to="/contacts" className={css.linkContacts}>
        Contacts
      </NavLink>
      {isLogin && <UserMenu />}
      {!isLogin && <UserAuth />}
    </header>
  );
};
export default Navbar;
