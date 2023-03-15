import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { useAuth } from 'hooks/useAuth';
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
        <>
          <h1 className={css.title}>
            Welcome, <b className={css.user}>{name} </b>
            to your Phonebook.
          </h1>
          <p className={css.text}>
            Go to {''}
            <NavLink to="/contacts" className={css.link}>
              contacts
            </NavLink>{' '}
            to manage your saved ones.
          </p>
        </>
      )}
    </div>
  );
};
export default HomePage;
