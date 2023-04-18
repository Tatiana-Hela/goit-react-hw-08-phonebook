import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Text, Flex, VStack } from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isContacts = Boolean(contacts.length);

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'center', md: 'stretch' }}
      justify="space-between"
      m="0 auto"
      maxW={{ base: '100%', lg: '1200px' }}
      px={{ base: '2', md: '0' }}
      py="12"
    >
      <VStack
        w={{ base: '100%', md: '400px' }}
        h={{ base: 'auto', md: '320px' }}
        spacing="6"
        p="6"
        borderRadius="6px"
        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);"
        border="1px solid #EBEBEB"
      >
        <Text fontSize="24px" fontWeight="500">
          Add contacts
        </Text>
        <ContactForm />
      </VStack>
      <Box
        w={{ base: '100%', md: '500px' }}
        mt={{ base: '6', md: '0' }}
        ml={{ base: '0', md: '12' }}
      >
        <Text
          p="6px"
          borderRadius="6px"
          textAlign="center"
          fontSize="22"
          mb="10px"
          fontWeight="500"
          color="#fff"
          bg="blue.400"
        >
          Contact list
        </Text>
        {isLoading && (
          <Flex justify="center">
            <ClipLoader color="#007D34" size={100} />
          </Flex>
        )}
        {!isLoading && (
          <Box>
            {isContacts && <Filter />}
            {isContacts && <ContactList />}
            {!isContacts && (
              <Text
                color="#fff"
                bg="red.400"
                p="12px"
                borderRadius="6px"
                textAlign="center"
              >
                Your phonebook is empty. <br /> Please add contact.
              </Text>
            )}
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default ContactsPage;
