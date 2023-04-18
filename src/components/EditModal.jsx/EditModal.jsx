import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import { Icon, PhoneIcon } from '@chakra-ui/icons';
import { BsFillPersonFill } from 'react-icons/bs';

import { updateContact } from 'redux/contacts/contacts-operations';

const EditModal = ({ isOpen, handleClose, id, name, number }) => {
  const toast = useToast();
  const initialState = {
    name,
    number,
  };

  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();
  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ id, state }))
      .unwrap()
      .then(() =>
        toast({
          description: 'Contact edited',
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
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent marginX="10px">
        <ModalHeader textAlign="center" fontSize="22px" fontWeight="500">
          Edit contact
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Icon as={BsFillPersonFill} color="grey" />}
                />
                <Input
                  id="name"
                  type="text"
                  name="name"
                  value={state.name}
                  placeholder="Enter name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  onChange={handleChange}
                />
              </InputGroup>
              <FormLabel htmlFor="number" mt="15px">
                Number
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray" />}
                />
                <Input
                  id="number"
                  type="tel"
                  name="number"
                  value={state.number}
                  placeholder="Enter number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={handleChange}
                />
              </InputGroup>
              <Button type="submit" colorScheme="blue" mr={3} mt="20px">
                Save
              </Button>
              <Button onClick={handleClose} mt="20px">
                Cancel
              </Button>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default EditModal;

EditModal.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  isOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
