import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Artist from './Artist';
import Loader from './Artist/Loader';

import ArtistsService from '@/services/artists';

const CACHE_TIME = 10_000;

const TopWorld = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery({
    queryKey: ['artists', 'top-world', 'list'],
    gcTime: CACHE_TIME,
    staleTime: CACHE_TIME,
    queryFn: ArtistsService.listArtists
  });

  return (
    <div className='bg-linear-to-b from-brand/20 to-background p-8 md:p-12 rounded-4xl space-y-6'>
      <header className='flex items-end justify-between'>
        <div>
          <h1 className='text-4xl md:text-6xl font-bold mb-2 text-white'>{t('artists.topWorld.title')}</h1>
          <p className='text-gray-400 text-lg'>{t('artists.topWorld.description')}</p>
        </div>

        <Link to='/artists' className='text-gray-400 hover:text-white transition-default hidden md:block'>
          {t('artists.topWorld.seeAll')}
        </Link>
      </header>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6'>
        {isLoading && new Array(12).fill(0).map((_, index) => <Loader key={index} />)}
        {!isLoading && data?.artists.map(artist => <Artist key={artist.id} data={artist} />)}
      </div>
    </div>
  );
};

export default TopWorld;
