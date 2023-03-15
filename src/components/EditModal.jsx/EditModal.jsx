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
} from '@chakra-ui/react';
import { Icon, PhoneIcon } from '@chakra-ui/icons';
import { BsFillPersonFill } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import { updateContact } from 'redux/contacts/contacts-operations';

const EditModal = ({ isOpen, handleClose, id, name, number }) => {
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
    dispatch(updateContact({ id, state }));
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
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
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={handleClose}>Cancel</Button>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default EditModal;
