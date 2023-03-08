import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { registration } from 'redux/auth/auth-operation';
import { isUserLogin } from 'redux/auth/auth-selectors';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(registration(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <p>RegisterPage</p>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};
export default RegisterPage;
