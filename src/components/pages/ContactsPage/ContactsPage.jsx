import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from 'redux/contacts/contacts-selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Text } from '@chakra-ui/react';
import Notiflix from 'notiflix';
import { ClipLoader } from 'react-spinners';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);
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
      m="0 auto"
      p="60px 0 60px 60px"
    >
      <Box
        width="400px"
        height="320px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="6"
        borderRadius="6px"
        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);"
        border="1px solid #EBEBEB"
      >
        <Text fontSize="24px" fontWeight="500" mb="20px">
          Add contacts
        </Text>
        <ContactForm />
      </Box>
      {isLoading && (
        <ClipLoader
          color="#007D34"
          cssOverride={{
            position: 'absolute',
            display: 'block',
          }}
          size={100}
        />
      )}
      <Box width="500px" display="flex" flexDirection="column">
        <Text
          p="6px"
          width="220px"
          borderRadius="6px"
          textAlign="center"
          fontSize="22"
          m="0 auto"
          mb="10px"
          fontWeight="500"
          color="#fff"
          bg="blue.400"
        >
          Contact list
        </Text>
        {isContacts && <Filter />}
        {isContacts && <ContactList />}

        {!isContacts && (
          <Text
            color="#fff"
            bg="red.400"
            p="12px"
            width="400px"
            textAlign="center"
            borderRadius="6px"
            m="0 auto"
          >
            Your phonebook is empty. <br /> Please add contact.
          </Text>
        )}
      </Box>
      {error &&
        Notiflix.Notify.failure(
          'Something went wrong...Try reloading the page'
        )}
    </Box>
  );
};
export default ContactsPage;
