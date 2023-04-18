import { NavLink } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { FiLogIn } from 'react-icons/fi';
import { MdAppRegistration } from 'react-icons/md';
import css from '../UserAuth/UserAuth.module.css';

const UserAuth = () => {
  return (
    <div className={css.wrapperLink}>
      <NavLink to="/register" className={css.link}>
        <Icon as={MdAppRegistration} />
        <span className={css.linkText}>Register</span>
      </NavLink>
      <NavLink to="/login" className={css.link}>
        <Icon as={FiLogIn} />
        <span className={css.linkText}>Login</span>
      </NavLink>
    </div>
  );
};
export default UserAuth;
