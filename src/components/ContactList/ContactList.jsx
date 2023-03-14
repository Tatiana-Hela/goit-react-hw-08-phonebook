import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/filter-selector';
import { List } from '@chakra-ui/react';
import css from '../ContactList/ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length === 0 && (
        <p className={css.text}>There is no such contact</p>
      )}
      <List mt="20px" display="flex" flexDirection="column" gap="15px">
        {contacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
export default ContactList;
