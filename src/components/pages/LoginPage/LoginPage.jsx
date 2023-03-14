import { useDispatch } from 'react-redux';
import { Text, Box } from '@chakra-ui/react';
import { authorization } from 'redux/auth/auth-operation';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(authorization(data));
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
        Login Form
      </Text>
      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};
export default LoginPage;
