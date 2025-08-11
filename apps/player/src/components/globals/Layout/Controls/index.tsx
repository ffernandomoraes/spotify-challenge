import { Button } from 'antd';

import NextIcon from '@/components/shared/Icons/Next';
import PlayIcon from '@/components/shared/Icons/Play';
import PrevIcon from '@/components/shared/Icons/Prev';
import RandomIcon from '@/components/shared/Icons/Random';
import RepeatIcon from '@/components/shared/Icons/Repeat';
import SoundIcon from '@/components/shared/Icons/Sound';
import ProgressBar from '@/components/shared/ProgressBar';

const Controls = () => {
  return (
    <footer className='bg-black backdrop-blur-sm fixed bottom-0 left-0 right-0 w-full h-22 flex flex-row items-center border-t border-white/10 px-12'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-row items-center gap-3'>
          <img
            src='https://i.scdn.co/image/ab67616d000048513eb9bb75e0b5472777ba0291'
            alt='Album Cover'
            className='w-14 object-cover rounded-md'
          />

          <div className='flex flex-col gap-1'>
            <p className='text-white/70 text-base leading-none font-medium'>P do Pecado - Ao Vivo</p>
            <p className='text-white/50 text-sm leading-none'>Grupo Menos É Mais</p>
          </div>
        </div>

        <div className='w-120 flex flex-col gap-2.5 h-full'>
          <div className='flex items-center justify-center gap-6'>
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

          <ProgressBar progress={50} prefix={'1:57'} suffix={'3:02'} />
        </div>

        <div className='w-40 flex flex-row gap-3 items-center justify-end h-full'>
          <SoundIcon className='w-5 h-5 fill-white/50 cursor-pointer hover:fill-white transition-colors duration-300' />
          <ProgressBar progress={50} />
        </div>
      </div>
    </footer>
  );
};

export default Controls;
