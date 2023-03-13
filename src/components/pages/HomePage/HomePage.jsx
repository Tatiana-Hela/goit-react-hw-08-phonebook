import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { useAuth } from 'shared/hooks/useAuth';
import { NavLink } from 'react-router-dom';

import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  const { name } = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      {!isLoggedIn && (
        <p>
          Welcome to the Phonebook. <br /> You can store your important contacts
          here.
          <br /> Please <NavLink to="/register">register</NavLink> or
          <NavLink to="/login">login</NavLink> in order to proceed.
        </p>
      )}
      {isLoggedIn && (
        <p>
          Welcome, {name} to your Phonebook. <br />
          Go to
          <NavLink to="/contacts">contacts</NavLink> to manage your saved ones.
        </p>
      )}
    </div>
  );
};
export default HomePage;
