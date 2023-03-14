import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/auth-operation';
import { selectUser } from 'redux/auth/auth-selectors';
import { Icon } from '@chakra-ui/icons';
import { FiLogOut } from 'react-icons/fi';
import css from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <button className={css.button} onClick={onLogout}>
        <Icon as={FiLogOut} />
      </button>
    </div>
  );
};
export default UserMenu;
