import { useNavigate } from 'react-router-dom';
import useUser from '../features/auth/useUser';
import { useEffect } from 'react';
import LoadingPage from '../pages/LoadingPage';

type AuthProtectedRouteProps = {
  children: React.ReactElement;
};

function AuthProtectedRoute({ children }: AuthProtectedRouteProps) {
  const navigate = useNavigate();
  const { isAuthenticated, isPending } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate('/app/login');
    },
    [isAuthenticated, isPending, navigate]
  );

  if (isPending) return <LoadingPage />;

  if (isAuthenticated) return children;
}

export default AuthProtectedRoute;
