import { useDispatch } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';
import { registration } from 'redux/auth/auth-operation';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(registration(data));
  };

  return (
    <Box mt="60px" display="flex" alignItems="center" flexDirection="column">
      <Text
        width="400px"
        border="2px solid green"
        borderRadius="6px"
        textAlign="center"
        fontSize="22"
        mb="5"
        fontWeight="500"
      >
        Registration Form
      </Text>
      <RegisterForm onSubmit={handleSignup} />
    </Box>
  );
};
export default RegisterPage;
