import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { FiLogOut } from 'react-icons/fi';
import css from '../UserMenu/UserMenu.module.css';

import { logoutUser } from 'redux/auth/auth-operation';
import { selectUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <IconButton className={css.button} onClick={onLogout}>
        <Icon as={FiLogOut} width="24px" height="24px" />
      </IconButton>
    </div>
  );
};
export default UserMenu;
