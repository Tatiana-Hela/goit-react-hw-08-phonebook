import { useDispatch } from 'react-redux';

import { registration } from 'redux/auth/auth-operation';

import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(registration(data));
  };

  return (
    <div>
      <p>RegisterPage</p>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;
