import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selector';
import { useEffect } from 'react';
import css from '../ContactsPage/ContactsPage.module.css';

import { fetchContacts } from 'redux/contacts/contacts-operations';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Text } from '@chakra-ui/react';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // console.log(contacts);
  const isContacts = Boolean(contacts.length);
  return (
    <Box
      display="flex"
      justifyContent="center"
      gap="100px"
      ml="auto"
      mr="auto"
      pt="60px"
      pl="60px"
      pr="60px"
    >
      <Box
        width="400px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="6"
        borderRadius="6px"
        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);"
      >
        <Text fontSize="24px" fontWeight="500" mb="20px">
          Add contacts
        </Text>
        <ContactForm />
      </Box>
      <Box width="600px" display="flex" flexDirection="column">
        <Text fontSize="24px" textAlign="center" mb="20px" fontWeight="500">
          Contacts
        </Text>
        {isContacts && <Filter />}
        {isContacts && <ContactList />}

        {!isContacts && (
          <p className={css.text}>
            Your phonebook is empty. Please add contact.
          </p>
        )}
      </Box>
    </Box>
  );
};
export default ContactsPage;
