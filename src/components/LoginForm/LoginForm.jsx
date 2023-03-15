import { useState, useCallback } from 'react';
import initialState from './initialState';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

const LoginForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
      setErrors(prevErrors => {
        return { ...prevErrors, [name]: '' };
      });
    },
    [setState]
  );

  const validate = () => {
    const errors = {};

    if (!state.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!state.password) {
      errors.password = 'Password is required';
    } else if (state.password.length < 7) {
      errors.password = 'Password must be at least 7 characters long';
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(state.password)) {
      errors.password = 'Password must include letters and numbers';
    }

    setErrors(errors);
    console.log(errors);

    // Возвращает false, если есть ошибки, и true, если ошибок нет
    return Object.keys(errors).length === 0;
  };

  console.log(errors);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ ...state });
      setState({ ...initialState });
    }
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
          isInvalid={errors.email}
          focusBorderColor="green.300"
          id="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
          name="email"
        />
        {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
        <FormLabel mt="4" htmlFor="password">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            isInvalid={errors.password}
            focusBorderColor="green.300"
            id="password"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            onChange={handleChange}
            value={password}
            name="password"
            // title="Password must be at least 7 characters long, include letters and numbers"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password && (
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        )}
        <Button type="submit" mr="auto" ml="auto" mt="10" colorScheme="green">
          Log in
        </Button>
      </FormControl>
    </form>
  );
};
export default LoginForm;
