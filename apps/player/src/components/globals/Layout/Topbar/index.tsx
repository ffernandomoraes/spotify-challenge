import HomeAndSearch from './HomeAndSearch';
import Profile from './Profile';

import IconLogo from '@/components/shared/IconLogo';

const Topbar = () => {
  return (
    <header className='px-6 py-4 flex items-center justify-between gap-4'>
      <IconLogo className='w-10 h-10 fill-white' />
      <HomeAndSearch />
      <Profile />
    </header>
  );
};

export default Topbar;
