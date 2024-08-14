import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userState from '../recoil/userState';

const ProtectedRoute = ({ element, adminOnly }) => {
  const { isAuthenticated, email } = useRecoilValue(userState);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  if (adminOnly && email !== 'admin') {
    return <Navigate to="/" />;
  }

  return element;
};

export default ProtectedRoute;
