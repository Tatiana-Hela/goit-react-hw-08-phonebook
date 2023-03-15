import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from '@chakra-ui/react';
import { ClipLoader } from 'react-spinners';

import { registration } from 'redux/auth/auth-operation';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { selectIsLoading } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(registration(data))
      .unwrap()
      .then(() => {
        Notiflix.Notify.success('You are successfully logged in');
      })
      .catch(() =>
        Notiflix.Notify.failure(
          'Something went wrong...Try reloading the page and enter valid email, password'
        )
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
      <Text
        width="400px"
        border="2px solid green"
        borderRadius="6px"
        textAlign="center"
        fontSize="22"
        mb="5"
        fontWeight="500"
      >
        Registration
      </Text>
      <RegisterForm onSubmit={handleSignup} />
    </Box>
  );
};
export default RegisterPage;
