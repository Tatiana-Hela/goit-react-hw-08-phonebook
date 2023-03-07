// import UserMenu from 'components/Navbar/UserMenu/UserMenu';
import UserAuth from './UserAuth/UserAuth';
import css from '../Navbar/Navbar.module.css';

const Navbar = () => {
  return (
    <header className={css.header}>
      {/* <UserMenu /> */}
      <UserAuth />
    </header>
  );
};
export default Navbar;
