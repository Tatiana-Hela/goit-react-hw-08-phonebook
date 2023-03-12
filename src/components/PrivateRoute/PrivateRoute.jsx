import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/auth-selectors';

const PrivateRoute = () => {
  const { isLogin, token } = useSelector(selectAuth);
  //   console.log(isLogin);
  if (!isLogin && token) {
    return <p>Loading...</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default PrivateRoute;
