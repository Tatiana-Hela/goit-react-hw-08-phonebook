import { NavLink } from 'react-router-dom';
import { useAuth } from 'shared/hooks/useAuth';
import { Icon } from '@chakra-ui/react';
import { RiContactsBookFill } from 'react-icons/ri';
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <div className={css.wrapper}>
        <NavLink to="/" className={css.linkPB}>
          <Icon as={RiContactsBookFill} /> Phonebook
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};
export default Navigation;
