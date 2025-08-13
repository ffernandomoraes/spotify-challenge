import { Button, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

import { useArtistDetails } from '../context';

import ArtistLoader from './Loader';

import { formatNumber } from '@/formatters/number';
import { getContrastColor } from '@/utils/colorContrast';

const Artist = () => {
  const { artist, isLoading, backgroundEffectColor } = useArtistDetails();
  const { t } = useTranslation();

  if (isLoading) {
    return <ArtistLoader />;
  }

  const contrastBackgroundEffectColor = getContrastColor(backgroundEffectColor ?? '');

  return (
    <>
      <header className='w-full flex flex-col md:flex-row items-center gap-4 justify-between animate-fade-in'>
        <div className='w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12'>
          <img
            className='w-full h-full md:w-64 md:h-64 rounded-3xl object-cover'
            src={artist?.images[0]?.url ?? ''}
            alt={artist?.name}
          />

          <div className='space-y-4'>
            <h1
              className={twMerge(
                'text-4xl md:text-6xl font-bold text-white',
                contrastBackgroundEffectColor === 'black' && 'text-black',
                contrastBackgroundEffectColor === 'white' && 'text-white'
              )}
            >
              {artist?.name}
            </h1>

            <div className='flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-5'>
              {artist?.followers.total && (
                <p
                  className={twMerge(
                    'text-gray-300 text-lg',
                    contrastBackgroundEffectColor === 'black' && 'text-black',
                    contrastBackgroundEffectColor === 'white' && 'text-white'
                  )}
                >
                  {formatNumber(artist.followers.total)} {t('artistDetails.followers')}
                </p>
              )}

              <div
                className={twMerge(
                  'w-[1px] h-5 bg-gray-400 hidden md:block',
                  contrastBackgroundEffectColor === 'black' && 'bg-black',
                  contrastBackgroundEffectColor === 'white' && 'bg-white'
                )}
              />

              <p
                className={twMerge(
                  'text-gray-300 text-lg',
                  contrastBackgroundEffectColor === 'black' && 'text-black',
                  contrastBackgroundEffectColor === 'white' && 'text-white'
                )}
              >
                {artist?.popularity} {t('artistDetails.popularity')}
              </p>
            </div>

            <div className='flex-wrap hidden md:flex gap-2'>
              {artist?.genres.map(genre => (
                <Tag key={genre} className='px-2.5 py-0.5 text-white/70 m-0'>
                  {genre}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        <Button className='w-full md:w-auto' color='primary' data-testid='artist-follow-button'>
          {t('artistDetails.follow')}
        </Button>
      </header>
    </>
  );
};

export default Artist;
