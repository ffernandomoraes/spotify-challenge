import { twMerge } from 'tailwind-merge';

import logo from '@/assets/images/logo.png';
import { useStoreLoader } from '@/store/loader';

const Loader = () => {
  const { isLoading } = useStoreLoader();

  return (
    <div
      className={twMerge(
        'flex items-center justify-center w-dvw h-dvh fixed top-0 left-0 z-50 bg-background transition-opacity duration-300',
        !isLoading && 'opacity-0 pointer-events-none'
      )}
    >
      <img src={logo} alt='Logo Spotify' className='w-44 animate-pulse' />
    </div>
  );
};

export default Loader;
