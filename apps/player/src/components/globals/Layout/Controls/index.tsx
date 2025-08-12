import { Button } from 'antd';

import NextIcon from '@/components/shared/Icons/Next';
import PlayIcon from '@/components/shared/Icons/Play';
import PrevIcon from '@/components/shared/Icons/Prev';
import RandomIcon from '@/components/shared/Icons/Random';
import RepeatIcon from '@/components/shared/Icons/Repeat';
import SoundIcon from '@/components/shared/Icons/Sound';
import ProgressBar from '@/components/shared/ProgressBar';
import useControlsStore from '@/store/controls';

const Controls = () => {
  const track = useControlsStore(state => state.track);

  return (
    <footer className='bg-black backdrop-blur-sm fixed bottom-0 left-0 right-0 w-full h-22 flex flex-row items-center border-t border-white/10 px-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 w-full'>
        <div className='flex-row max-w-80 items-center gap-3 hidden md:flex'>
          <img src={track?.image} alt='Album Cover' className='w-14 object-cover rounded-md' />

          <div className='flex flex-col gap-1 overflow-hidden'>
            <p className='text-white/70 text-base leading-none font-medium'>{track?.name}</p>
            <p className='text-white/50 text-sm leading-none truncate'>{track?.artist}</p>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-2.5 h-full'>
          <div className='flex items-center justify-center gap-6 mx-auto'>
            <RandomIcon className='w-5 h-5 fill-white/50 cursor-pointer hover:fill-white transition-colors duration-300' />
            <PrevIcon className='w-5 h-5 fill-white/50 cursor-pointer hover:fill-white transition-colors duration-300' />

            <Button
              type='primary'
              shape='circle'
              size='small'
              className='bg-white hover:bg-brand transition-colors duration-300'
            >
              <PlayIcon className='w-5 h-5 fill-black' />
            </Button>

            <NextIcon className='w-5 h-5 fill-white/50 cursor-pointer hover:fill-white transition-colors duration-300' />
            <RepeatIcon className='w-5 h-5 fill-white/50 cursor-pointer hover:fill-white transition-colors duration-300' />
          </div>

          <div className='flex justify-center'>
            <ProgressBar progress={50} prefix={'1:57'} suffix={'3:02'} />
          </div>
        </div>

        <div className='flex-row gap-3 items-center justify-end h-full hidden md:flex'>
          <div className='w-40 flex items-center gap-2'>
            <SoundIcon className='w-5 h-5 fill-white/50 cursor-pointer hover:fill-white transition-colors duration-300' />
            <ProgressBar progress={50} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Controls;
