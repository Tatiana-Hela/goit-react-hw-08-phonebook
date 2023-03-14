import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import css from '../ContactItem/ContactItem.module.css';
import { IconButton, ListItem, Text } from '@chakra-ui/react';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      key={id}
      display="flex"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);"
      p="6px 10px"
      borderRadius="6px"
    >
      <Text fontSize="20px">{name}: </Text>
      <Text fontSize="20px" ml="6px" fontWeight="500">
        {number}
      </Text>
      <IconButton
        ml="auto"
        colorScheme="green"
        aria-label="Edit contact"
        icon={<EditIcon />}
      />
      <IconButton
        ml="6px"
        colorScheme="red"
        aria-label="Delete contact"
        icon={<DeleteIcon />}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      />
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
