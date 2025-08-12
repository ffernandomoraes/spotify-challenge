import type { Album as AlbumType } from '@/interfaces/albums';

type AlbumProps = {
  data: AlbumType;
};

const Album = ({ data }: AlbumProps) => {
  return (
    <div className='bg-elevated-base rounded-xl px-2.5 py-2.5 cursor-pointer transition-default w-full animate-fade-in'>
      <div className='flex items-center justify-between gap-4'>
        <div className='flex items-center gap-4 overflow-hidden'>
          <img src={data.images[0].url} alt={data.name} className='w-20 h-20 rounded-lg object-cover' />

          <div className='flex flex-col overflow-hidden'>
            <div className='flex items-center gap-2'>
              <h3 className='text-white text-base font-medium line-clamp-2'>{data.name}</h3>
            </div>

            <p className='text-gray-400 text-sm truncate'>{data.total_tracks} faixas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
