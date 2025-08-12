import { useEffect } from 'react';

import { useStoreLoader } from '@/store/loader';

const LazyFallback = () => {
  const { setIsLoading } = useStoreLoader();

  useEffect(() => {
    setIsLoading(true);
    return () => setIsLoading(false);
  }, [setIsLoading]);

  return null;
};

export default LazyFallback;
