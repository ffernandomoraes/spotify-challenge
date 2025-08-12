import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import Albuns from './Albuns';
import Artist from './Artist';
import ArtistDetailsProvider from './context';
import Tracks from './Tracks';

import ArtistsService from '@/services/artists';
import { getDominantColor } from '@/utils/getDominantColor';

const Details = () => {
  const { id } = useParams<{ id: string }>();

  const [backgroundEffectColor, setBackgroundEffectColor] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ['artists', 'details', id],
    queryFn: async () => {
      const response = await ArtistsService.getArtist(id ?? '');
      return response;
    }
  });

  useEffect(() => {
    getDominantColor(data?.images[1]?.url ?? '').then(setBackgroundEffectColor);
  }, [data]);

  return (
    <ArtistDetailsProvider value={{ artist: data, isLoading, backgroundEffectColor }}>
      <div className='p-6 md:p-12 md:pt-8'>
        <div
          style={{ ['--tw-detailsBackgroundEffectColor' as string]: backgroundEffectColor }}
          className={twMerge(
            'bg-linear-to-b to-background from-10% to-[650px] p-6 md:p-12 rounded-4xl space-y-16 transition-colors duration-500',
            !backgroundEffectColor && 'from-brand/50',
            backgroundEffectColor && 'from-[var(--tw-detailsBackgroundEffectColor)]'
          )}
        >
          <Artist />
          <Tracks />
          <Albuns />
        </div>
      </div>
    </ArtistDetailsProvider>
  );
};

export default Details;
