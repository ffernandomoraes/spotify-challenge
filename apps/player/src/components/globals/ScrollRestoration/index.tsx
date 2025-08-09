import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  const goToTop = useCallback(() => {
    try {
      const main = document.querySelector('[role="main"]');

      if (!main) {
        console.warn('[ScrollRestoration] Main element not found.');
        return;
      }

      main.scrollTop = 0;
    } catch (error) {
      console.error('[ScrollRestoration] Error while trying to scroll to top:', error);
    }
  }, []);

  useEffect(() => {
    goToTop();
  }, [pathname, goToTop]);

  return null;
};

export default ScrollRestoration;
