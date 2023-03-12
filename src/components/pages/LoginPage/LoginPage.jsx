import { useDispatch } from 'react-redux';

import { authorization } from 'redux/auth/auth-operation';

import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(authorization(data));
  };

  return (
    <div>
      <p>Login page</p>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;
