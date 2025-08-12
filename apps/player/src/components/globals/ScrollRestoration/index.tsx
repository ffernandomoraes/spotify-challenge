import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  const goToTop = useCallback(() => {
    try {
      const html = document.querySelector('html');

      if (!html) {
        return;
      }

      html.scrollTop = 0;
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
