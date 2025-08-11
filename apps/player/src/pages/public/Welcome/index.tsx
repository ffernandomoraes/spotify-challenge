import { Button } from 'antd';
import { Link } from 'react-router-dom';

import logo from '@/assets/images/logo.png';

const Welcome = () => {
  return (
    <div className='flex items-center flex-col gap-8 justify-center w-dvw h-dvh fixed top-0 left-0 z-50 bg-background transition-opacity duration-300'>
      <img src={logo} alt='Logo Spotify' className='w-44 ' />

      <Button>
        <Link to='/artists'>
          <span>Get Started</span>
        </Link>
      </Button>
    </div>
  );
};

export default Welcome;
