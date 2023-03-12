import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UserMenu from 'components/Navbar/UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import { selectIsUserLogin } from 'redux/auth/auth-selectors';

import css from '../Navbar/Navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(selectIsUserLogin);
  return (
    <header className={css.header}>
      {isLogin && (
        <NavLink to="/contacts" className={css.linkContacts}>
          Contacts
        </NavLink>
      )}
      {isLogin && <UserMenu />}
      {!isLogin && <UserAuth />}
    </header>
  );
};
export default Navbar;
