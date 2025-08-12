import { Button, Skeleton, Tag } from 'antd';

import { useArtistDetails } from '../context';

import { formatNumber } from '@/formatters/number';

const Artist = () => {
  const { artist, isLoading } = useArtistDetails();

  if (isLoading) {
    return (
      <header className='w-full flex items-center gap-4'>
        <div className='w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12'>
          <Skeleton.Node active className='w-full h-full aspect-square md:w-64 md:h-64 rounded-3xl' />

          <div className='space-y-4 flex flex-col'>
            <Skeleton.Node active className='w-full md:w-120 h-12' />
            <Skeleton.Node active className='w-60 h-10' />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className='w-full flex flex-col md:flex-row items-center gap-4 justify-between animate-fade-in'>
        <div className='w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12'>
          <img
            src={artist?.images[0]?.url ?? ''}
            alt={artist?.name}
            className='w-full h-full md:w-64 md:h-64 rounded-3xl object-cover'
          />

          <div className='space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold text-white'>{artist?.name}</h1>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-5'>
              {artist?.followers.total && (
                <p className='text-gray-300 text-lg'>{formatNumber(artist.followers.total)} seguidores</p>
              )}

              <div className='w-[1px] h-5 bg-gray-400 hidden md:block' />

              <p className='text-gray-300 text-lg'>{artist?.popularity} de popularidade</p>
            </div>

            <div className='flex-wrap hidden md:flex'>
              {artist?.genres.map(genre => (
                <Tag key={genre} className='px-2.5 py-0.5 text-white/70'>
                  {genre}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        <Button className='w-full md:w-auto' color='primary'>
          Seguir
        </Button>
      </header>
    </>
  );
};

export default Artist;
