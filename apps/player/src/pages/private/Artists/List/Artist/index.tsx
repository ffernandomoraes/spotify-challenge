import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useListArtists } from '../context';

import ArtistCard from '@/components/shared/ArtistCard';
import type { Artist as ArtistType } from '@/interfaces/artists';
import { getDominantColor } from '@/utils/getDominantColor';

const Artist = memo(({ data }: { data: ArtistType }) => {
  const { t } = useTranslation();
  const { setBackgroundEffectColor, resetBackgroundEffectColor } = useListArtists();

  const [color, setColor] = useState<string>('');

  const handleMouseEnter = () => {
    if (color) {
      setBackgroundEffectColor(color);
    }
  };

  useEffect(() => {
    getDominantColor(data?.images[1]?.url ?? '').then(setColor);
  }, [data]);

  return (
    <Link to={`/artist/${data.id}`}>
      <ArtistCard onMouseEnter={handleMouseEnter} onMouseLeave={resetBackgroundEffectColor}>
        <ArtistCard.Image src={data?.images[1]?.url ?? ''} alt={data.name} />

        <ArtistCard.Content>
          <ArtistCard.Title>{data.name}</ArtistCard.Title>
          <ArtistCard.Description>{t('artists.common.artist')}</ArtistCard.Description>
        </ArtistCard.Content>
      </ArtistCard>
    </Link>
  );
});

export default Artist;
