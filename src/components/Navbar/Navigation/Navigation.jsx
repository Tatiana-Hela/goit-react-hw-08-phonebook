import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div className={css.wrapper}>
        <NavLink to="/" className={css.linkPB}>
          Phonebook
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
