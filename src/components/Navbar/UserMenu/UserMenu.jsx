import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';

import css from '../UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  return (
    <div className={css.wrapper}>
      <p className={css.text}>{name}</p>
      <button className={css.button}>Logout</button>
    </div>
  );
};
export default UserMenu;
