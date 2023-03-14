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
        <>
          <h1 className={css.title}>Welcome to the Phonebook.</h1>
          <p className={css.text}>
            You can store your important contacts here.
          </p>
          <p className={css.text}>
            Please {''}
            <NavLink to="/register" className={css.link}>
              register
            </NavLink>
            {''} or {''}
            <NavLink to="/login" className={css.link}>
              log in {''}
            </NavLink>
            in order to proceed.
          </p>
        </>
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
