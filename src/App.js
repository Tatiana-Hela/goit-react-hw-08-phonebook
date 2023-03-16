import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { currentUser } from 'redux/auth/auth-operation';
import { ClipLoader } from 'react-spinners';

// import AuthLayout from 'components/AuthLayout/AuthLayout';
import UserRoutes from 'UserRoutes';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <ClipLoader
      color="#007D34"
      cssOverride={{
        position: 'absolute',
        display: 'block',
      }}
      size={100}
    />
  ) : (
    <UserRoutes />
  );
}

export default App;
