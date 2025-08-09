import Profile from './Profile';
import Search from './Search';

import IconLogo from '@/components/shared/IconLogo';

const Topbar = () => {
  return (
    <header className='px-6 py-4 flex items-center justify-between gap-4'>
      <IconLogo className='w-10 h-10 fill-white' />
      <Search />
      <Profile />
    </header>
  );
};

export default Topbar;
