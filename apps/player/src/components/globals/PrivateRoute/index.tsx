import { useQuery } from '@tanstack/react-query';
import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import AuthService from '@/services/auth';
import { useStoreLoader } from '@/store/loader';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { setIsLoading } = useStoreLoader();

  const isAuthenticated = AuthService.getToken();

  const { data, isLoading } = useQuery({
    enabled: !isAuthenticated,
    queryKey: ['auth-token'],
    queryFn: AuthService.authenticate
  });

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(false);
    }

    if (data) {
      AuthService.setToken(data.access_token);
    }
  }, [data, isLoading, setIsLoading]);

  if (!isAuthenticated && !isLoading) {
    return <Navigate to='/artists' />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
