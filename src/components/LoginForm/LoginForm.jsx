import { useState, useCallback } from 'react';
import initialState from './initialState';

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
    console.log(onSubmit);
    onSubmit({ ...state });
    console.log(onSubmit);
    setState({ ...initialState });
  };

  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        boxSize="400"
        display="flex"
        flexDirection="column"
        isRequired
      >
        <FormLabel mt="4" htmlFor="email">
          Email
        </FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormLabel mt="4" htmlFor="password">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            id="password"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            onChange={handleChange}
            value={password}
            name="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button type="submit" mr="auto" ml="auto" mt="10" colorScheme="green">
          Log in
        </Button>
      </FormControl>
    </form>
  );
};
export default LoginForm;
