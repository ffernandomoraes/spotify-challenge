import { useInfiniteQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { useArtistDetails } from '../context';

import AlbumCard from '@/components/shared/AlbumCard';
import AlbumLoader from '@/components/shared/AlbumCard/Loader';
import ArtistsService from '@/services/artists';

const Albuns = () => {
  const { id } = useParams<{ id: string }>();
  const { artist } = useArtistDetails();
  const { t } = useTranslation();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isEnabled } = useInfiniteQuery({
    enabled: !!artist,
    queryKey: ['artists', 'albums', id],
    initialPageParam: 0,
    staleTime: 5000,
    queryFn: ({ pageParam = 0 }) => ArtistsService.getAlbums(id ?? '', pageParam),
    getNextPageParam: lastPage => {
      const nextOffset = lastPage.offset + lastPage.limit;
      return nextOffset < lastPage.total ? nextOffset : undefined;
    }
  });

  const albums = data?.pages.flatMap(p => p.items) ?? [];

  return (
    <section className='space-y-6'>
      <h2 className='text-2xl font-medium text-white'>{t('artistDetails.albums.title')}</h2>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-2.5 md:gap-4'>
        {(isLoading || !isEnabled) && new Array(4).fill(0).map((_, index) => <AlbumLoader key={index} />)}

        {!isLoading &&
          albums.map(album => (
            <AlbumCard key={album.id} data-testid={`album-card-${album.id}`}>
              <AlbumCard.Image src={album.images[0].url} alt={album.name} />

              <AlbumCard.Content>
                <AlbumCard.Title>{album.name}</AlbumCard.Title>
                <AlbumCard.Description>
                  {album.total_tracks} {t('artistDetails.albums.tracks')}
                </AlbumCard.Description>
              </AlbumCard.Content>
            </AlbumCard>
          ))}
      </div>

      <div className='flex items-center justify-center'>
        <Button
          data-testid='artist-albums-see-all-button'
          className='w-full md:w-auto'
          onClick={() => fetchNextPage()}
          loading={isFetchingNextPage}
          disabled={!hasNextPage}
        >
          {t('artistDetails.albums.seeAll')}
        </Button>
      </div>
    </section>
  );
};

export default Albuns;
