import { useQuery } from '@tanstack/react-query';
import { Button, Skeleton } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useArtistDetails } from '../context';

import Track from './Track';

import type { Track as TrackType } from '@/interfaces/track';
import ArtistsService from '@/services/artists';

const MAX_VISIBLE_TRACKS = 5;

const Tracks = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { artist } = useArtistDetails();

  const [tracks, setTracks] = useState<TrackType[]>([]);
  const [visibleTracks, setVisibleTracks] = useState<TrackType[]>([]);

  const { isLoading, isEnabled } = useQuery({
    enabled: !!artist,
    queryKey: ['artists', 'top-tracks', id],
    queryFn: async () => {
      const response = await ArtistsService.getTopTracks(id ?? '');

      setTracks(() => {
        const data = response.tracks;
        setVisibleTracks(data.slice(0, MAX_VISIBLE_TRACKS));
        return data;
      });

      return response;
    }
  });

  const handleLoadMore = () => {
    setVisibleTracks(tracks.slice(0, visibleTracks.length + MAX_VISIBLE_TRACKS));
  };

  const isAllTracksVisible = visibleTracks.length === tracks.length;

  return (
    <section data-testid="artist-tracks">
      <h2 className='text-2xl font-medium text-white mb-6'>{t('artistDetails.tracks.title')}</h2>

      <div className='flex flex-col'>
        {(isLoading || !isEnabled) &&
          new Array(MAX_VISIBLE_TRACKS)
            .fill(0)
            .map((_, index) => <Skeleton.Node key={index} active className='w-full h-18 mb-2' />)}

        {!isLoading && visibleTracks.map((track, index) => <Track key={track.id} data={track} index={index} />)}
      </div>

      <div className='flex justify-center mt-4'>
        <Button
          data-testid='artist-tracks-see-all-button'
          className='w-full md:w-auto'
          disabled={isAllTracksVisible || isLoading}
          onClick={handleLoadMore}
        >
          {t('artistDetails.tracks.seeAll')}
        </Button>
      </div>
    </section>
  );
};

export default Tracks;
