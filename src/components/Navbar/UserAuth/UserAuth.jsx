import { NavLink } from 'react-router-dom';
import css from '../UserAuth/UserAuth.module.css';
const UserAuth = () => {
  return (
    <div className={css.wrapperLink}>
      <NavLink to="/register" className={css.link}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Login
      </NavLink>
    </div>
  );
};
export default UserAuth;
