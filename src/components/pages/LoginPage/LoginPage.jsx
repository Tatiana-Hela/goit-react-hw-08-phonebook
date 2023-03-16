import { useDispatch, useSelector } from 'react-redux';
import { Text, Box, useToast } from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';

import { authorization } from 'redux/auth/auth-operation';
import LoginForm from 'components/LoginForm/LoginForm';
import { selectIsLoading } from 'redux/auth/auth-selectors';

const LoginPage = () => {
  const toast = useToast();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(authorization(data))
      .unwrap()
      .then(() => {
        toast({
          description: 'You are successfully logged in',
          position: 'top',
          status: 'success',
        });
      })
      .catch(() =>
        toast({
          description:
            'Something went wrong...Try reloading the page and enter valid email, password',
          position: 'top',
          status: 'error',
        })
      );
  };

  return (
    <Box mt="60px" display="flex" alignItems="center" flexDirection="column">
      {isLoading && (
        <ClipLoader
          color="#007D34"
          cssOverride={{
            position: 'absolute',
            display: 'block',
          }}
          size={100}
        />
      )}
      <Text textAlign="center" fontSize="22" mb="5" fontWeight="500">
        Login
      </Text>
      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};
export default LoginPage;
