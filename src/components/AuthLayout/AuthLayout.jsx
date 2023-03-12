import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { currentUser } from 'redux/auth/auth-operation';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return <>{children}</>;
};
export default AuthLayout;
