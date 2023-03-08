import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authorization } from 'redux/auth/auth-operation';
import { isUserLogin } from 'redux/auth/auth-selectors';
import LoginForm from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(authorization(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <p>Login page</p>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};
export default LoginPage;
