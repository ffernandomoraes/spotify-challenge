import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import Artist from './Artist';
import TopWorldProvider from './context';

import ArtistCardLoader from '@/components/shared/ArtistCard/Loader';
import ArtistsService from '@/services/artists';
import { getContrastColor } from '@/utils/colorContrast';

const CACHE_TIME = 10_000;

const TopWorld = () => {
  const { t } = useTranslation();

  const [backgroundEffectColor, setBackgroundEffectColor] = useState<string | null>(null);

  const resetBackgroundEffectColor = () => setBackgroundEffectColor(null);

  const contrastBackgroundEffectColor = getContrastColor(backgroundEffectColor ?? '');

  const { data, isLoading } = useQuery({
    queryKey: ['artists', 'top-world', 'list'],
    gcTime: CACHE_TIME,
    staleTime: CACHE_TIME,
    queryFn: ArtistsService.listArtists
  });

  return (
    <TopWorldProvider value={{ backgroundEffectColor, setBackgroundEffectColor, resetBackgroundEffectColor }}>
      <div
        style={{ ['--tw-backgroundEffectColor' as any]: backgroundEffectColor }}
        className={twMerge(
          'bg-linear-to-b to-background from-10% to-60% p-8 md:p-12 rounded-4xl space-y-6 transition-colors duration-500',
          !backgroundEffectColor && 'from-brand/50',
          backgroundEffectColor && 'from-[var(--tw-backgroundEffectColor)]'
        )}
      >
        <header className='flex items-end justify-between'>
          <div>
            <h1
              className={twMerge(
                'text-4xl md:text-6xl font-bold mb-2 transition-colors duration-500',
                contrastBackgroundEffectColor === 'black' && 'text-black',
                contrastBackgroundEffectColor === 'white' && 'text-white'
              )}
            >
              {t('artists.topWorld.title')}
            </h1>

            <p
              className={twMerge(
                'text-gray-300 text-lg transition-colors duration-500',
                contrastBackgroundEffectColor === 'black' && 'text-black',
                contrastBackgroundEffectColor === 'white' && 'text-white'
              )}
            >
              {t('artists.topWorld.description')}
            </p>
          </div>

          <Link to='/artists' className='text-gray-400 hover:text-white transition-default hidden md:block'>
            {t('artists.topWorld.seeAll')}
          </Link>
        </header>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6'>
          {isLoading && new Array(12).fill(0).map((_, index) => <ArtistCardLoader key={index} />)}
          {!isLoading && data?.artists.map(artist => <Artist key={artist.id} data={artist} />)}
        </div>
      </div>
    </TopWorldProvider>
  );
};

export default TopWorld;
