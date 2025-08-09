import { PropsWithChildren, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useStoreLoader } from '@/store/loader';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { setIsLoading } = useStoreLoader();

  const isAuthenticated = true;

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  if (!isAuthenticated) {
    return <Navigate to='/artists' />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
