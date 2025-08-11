import IconProps from '@/interfaces/icon';

const PlayIcon = ({ className }: IconProps) => {
  return (
    <svg role='img' aria-hidden='true' className={className} viewBox='0 0 16 16'>
      <path d='M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z'></path>
    </svg>
  );
};

export default PlayIcon;
