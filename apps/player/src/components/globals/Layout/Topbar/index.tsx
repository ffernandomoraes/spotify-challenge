import { useEffect, useRef, useState } from 'react';

import HomeAndSearch from './HomeAndSearch';
import Profile from './Profile';

import IconLogo from '@/components/shared/IconLogo';

const Topbar = () => {
  const headerEl = useRef<HTMLDivElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    if (headerEl.current && window.scrollY > headerEl.current.offsetHeight / 2) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerEl}
      className={`px-6 md:px-12 flex items-center justify-between gap-4 fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm transition-all duration-500 ${
        isScrolled ? 'h-20' : 'h-20 md:h-26'
      }`}
    >
      <IconLogo className='w-10 h-10 fill-white' />
      <HomeAndSearch />
      <Profile />
    </header>
  );
};

export default Topbar;
