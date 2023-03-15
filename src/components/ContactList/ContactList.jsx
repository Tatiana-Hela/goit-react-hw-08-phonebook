import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/filter-selector';
import { List, Text } from '@chakra-ui/react';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length === 0 && (
        <Text color="red.400" mt="20px" ml="20px">
          There is no such contact
        </Text>
      )}
      <List mt="20px" display="flex" flexDirection="column" gap="5px">
        {contacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </List>
    </>
  );
};
export default ContactList;
