import { Navigate } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';

type PrivateRouteProps = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authenticated = AuthService.isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/login-page" />;
  }

  return children;
}
