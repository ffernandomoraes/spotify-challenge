import { Button, Skeleton, Tag } from 'antd';

import { useArtistDetails } from '../context';

import { formatNumber } from '@/formatters/number';

const Artist = () => {
  const { artist, isLoading } = useArtistDetails();

  if (isLoading) {
    return (
      <header className='flex items-center gap-4 justify-between'>
        <div className='flex items-center gap-12'>
          <Skeleton.Node active className='w-64 h-64 rounded-3xl' />

          <div className='space-y-4 flex flex-col'>
            <Skeleton.Node active className='w-120 h-12' />
            <Skeleton.Node active className='w-60 h-10' />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className='flex items-center gap-4 justify-between animate-fade-in'>
        <div className='flex items-center gap-12'>
          <img src={artist?.images[0]?.url ?? ''} alt={artist?.name} className='w-64 h-64 rounded-3xl object-cover' />

          <div className='space-y-4'>
            <h1 className='text-6xl font-bold text-white'>{artist?.name}</h1>

            <div className='flex items-center gap-5'>
              {artist?.followers.total && (
                <p className='text-gray-300 text-lg'>{formatNumber(artist.followers.total)} seguidores</p>
              )}

              <div className='w-[1px] h-5 bg-gray-400' />

              <p className='text-gray-300 text-lg'>{artist?.popularity} de popularidade</p>
            </div>

            <div className='flex flex-wrap'>
              {artist?.genres.map(genre => (
                <Tag key={genre} className='px-2.5 py-0.5 text-white/70'>
                  {genre}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        <Button color='primary'>Seguir</Button>
      </header>
    </>
  );
};

export default Artist;
