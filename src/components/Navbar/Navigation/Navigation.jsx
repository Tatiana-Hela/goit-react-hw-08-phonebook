import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { IconButton } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/icons';
import { RiContactsFill } from 'react-icons/ri';
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const isMobile = window.innerWidth < 768;

  return (
    <nav>
      <div className={css.wrapper}>
        <NavLink to="/" className={css.linkPB}>
          Phonebook
        </NavLink>
        {isLoggedIn && isMobile ? (
          <IconButton backgroundColor="#fff" ml="6px">
            <Icon
              as={RiContactsFill}
              width="24px"
              height="24px"
              color="#589F2D"
            />
          </IconButton>
        ) : (
          <NavLink to="/contacts" className={css.link}>
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
