import { memo } from 'react';

type ProgressBarProps = {
  progress: number;
  prefix?: string;
  suffix?: string;
};

const ProgressBar = memo(({ progress, prefix, suffix }: ProgressBarProps) => {
  return (
    <div className='flex items-center gap-3 w-full max-w-100'>
      {prefix && <span className='text-white/70 text-sm leading-none'>{prefix}</span>}
      <div className='w-full h-1 bg-white/40 rounded-full'>
        <div className='h-full bg-brand rounded-full' style={{ width: `${progress}%` }} />
      </div>
      {suffix && <span className='text-white/70 text-sm leading-none'>{suffix}</span>}
    </div>
  );
});

export default ProgressBar;
