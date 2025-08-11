import { Tooltip } from 'antd';

import { formatDurationToMinutes } from '@/formatters/duration';
import type { Track as TrackType } from '@/interfaces/track';

type TrackProps = {
  data: TrackType;
  index: number;
};

const Track = ({ data, index }: TrackProps) => {
  return (
    <div className='hover:bg-elevated-base rounded-lg px-4 py-2.5 cursor-pointer transition-default w-full'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4 overflow-hidden'>
          <span className='text-gray-400 text-sm min-w-3 font-light'>{index + 1}</span>

          <img src={data.album.images[0].url} alt={data.name} className='w-14 h-14 rounded-lg object-cover' />

          <div className='flex flex-col overflow-hidden'>
            <div className='flex items-center gap-2'>
              <h3 className='text-white text-base font-medium'>{data.name}</h3>

              {data.explicit && (
                <Tooltip title='Faixa explícita' placement='top'>
                  <span className='text-gray-400 text-sm font-medium bg-gray-600 rounded-md w-5 h-5 flex items-center justify-center'>
                    E
                  </span>
                </Tooltip>
              )}
            </div>

            <p className='text-gray-400 text-sm truncate'>{data.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        </div>

        <p className='text-gray-400 text-sm'>{formatDurationToMinutes(data.duration_ms)}</p>
      </div>
    </div>
  );
};

export default Track;
