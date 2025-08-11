import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ArtistsService from '@/services/artists';

const TopWorld = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ['artists', 'top-world'],
    queryFn: ArtistsService.getArtists
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-linear-to-b from-brand/20 to-background p-12 rounded-4xl space-y-6'>
      <header className='flex items-end justify-between'>
        <div>
          <h1 className='text-6xl font-bold mb-2 text-white'>{t('artists.topWorld.title')}</h1>
          <p className='text-gray-400'>{t('artists.topWorld.description')}</p>
        </div>

        <Link to='/artists/top-world' className='text-gray-400 hover:text-white transition-all duration-500'>
          {t('artists.topWorld.seeAll')}
        </Link>
      </header>

      <div className='grid grid-cols-6 gap-6'>
        {data?.artists.map(artist => (
          <div key={artist.id} className='flex flex-col group cursor-pointer'>
            <img
              src={artist?.images[1]?.url ?? ''}
              alt={artist.name}
              className='w-full aspect-square opacity-90 group-hover:opacity-100 object-cover rounded-4xl outline-offset-5 outline-2 outline-transparent group-hover:outline-brand/70 transition-all duration-400'
            />

            <div className='mt-4 px-3'>
              <p className='text-sm text-gray-400'>#{artist.popularity}</p>
              <h3 className='text-gray-400 font-semibold group-hover:text-white transition-all duration-400'>
                {artist.name}
              </h3>
              <p className='mt-2 text-sm text-gray-400'>{t('artists.common.artist')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopWorld;
