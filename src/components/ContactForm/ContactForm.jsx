import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Input,
  InputGroup,
  FormControl,
  FormLabel,
  Icon,
  InputLeftElement,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { MdAddCircle } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { addContact } from 'redux/contacts/contacts-operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl width="350px">
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
            value={name}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            required
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
            value={number}
            placeholder="Enter number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            onChange={handleChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputGroup>
        <Button type="submit" colorScheme="blue" mt="20px" borderRadius="6px">
          Add <Icon as={MdAddCircle} width="24px" height="24px" pl="6px" />
        </Button>
      </FormControl>
    </form>
  );
};
export default ContactForm;
