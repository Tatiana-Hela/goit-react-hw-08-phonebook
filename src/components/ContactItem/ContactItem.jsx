import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  ListItem,
  Text,
  Tooltip,
  useToast,
} from '@chakra-ui/react';

import { deleteContact } from 'redux/contacts/contacts-operations';
import EditModal from 'components/EditModal.jsx/EditModal';

const ContactItem = ({ id, name, number }) => {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleDeleteContact = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() =>
        toast({
          description: 'Contact deleted',
          position: 'top',
          status: 'success',
        })
      )
      .catch(() =>
        toast({
          description: 'Something went wrong...Try reloading the page',
          position: 'top',
          status: 'error',
        })
      );
  };

  return (
    <>
      <ListItem
        key={id}
        display="flex"
        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);"
        p="6px 10px"
        borderRadius="6px"
        alignItems="center"
      >
        <Box display="block">
          <Text fontSize="20px" fontWeight="500">
            {name}
          </Text>
          <Text fontSize="18px" color="#5F5F5F">
            {number}
          </Text>
        </Box>
        <Tooltip label="Edit contact">
          <IconButton
            ml="auto"
            colorScheme="green"
            aria-label="Edit contact"
            icon={<EditIcon />}
            onClick={handleOpenModal}
          />
        </Tooltip>
        <Tooltip label="Delete contact">
          <IconButton
            ml="6px"
            colorScheme="red"
            aria-label="Delete contact"
            icon={<DeleteIcon />}
            type="button"
            onClick={handleDeleteContact}
          />
        </Tooltip>
      </ListItem>
      {isOpen && (
        <EditModal
          isOpen={isOpen}
          handleClose={handleCloseModal}
          id={id}
          name={name}
          number={number}
        />
      )}
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
