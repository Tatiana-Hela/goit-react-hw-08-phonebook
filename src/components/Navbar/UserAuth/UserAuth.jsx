import { NavLink } from 'react-router-dom';
import { Icon } from '@chakra-ui/icons';
import { FiLogIn } from 'react-icons/fi';
import { MdAppRegistration } from 'react-icons/md';
import css from '../UserAuth/UserAuth.module.css';

const UserAuth = () => {
  return (
    <div className={css.wrapperLink}>
      <NavLink to="/register" className={css.link}>
        <Icon as={MdAppRegistration} /> Register
      </NavLink>
      <NavLink to="/login" className={css.link}>
        <Icon as={FiLogIn} /> Login
      </NavLink>
    </div>
  );
};
export default UserAuth;
