import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { currentUser } from 'redux/auth/auth-operation';
// import AuthLayout from 'components/AuthLayout/AuthLayout';
import UserRoutes from 'UserRoutes';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return isRefreshing ? <p>loading...</p> : <UserRoutes />;
}

export default App;
