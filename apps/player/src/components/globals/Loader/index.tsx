import logo from '@/assets/images/logo.png';
import { useStoreLoader } from '@/store/loader';

const Loader = () => {
  const { isLoading } = useStoreLoader();

  if (!isLoading) {
    return null;
  }

  return (
    <div className='flex items-center justify-center w-dvw h-dvh fixed top-0 left-0 z-50'>
      <img src={logo} alt='Logo Spotify' className='w-42 animate-pulse' />
    </div>
  );
};

export default Loader;
