import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';

import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.wrapper}>
      <NavLink to="/" className={css.link}>
        Phonebook
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
