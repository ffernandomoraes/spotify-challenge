import { useInfiniteQuery } from '@tanstack/react-query';
import { Button, Skeleton } from 'antd';
import { useParams } from 'react-router-dom';

import { useArtistDetails } from '../context';

import Album from './Album';

import ArtistsService from '@/services/artists';

const Albuns = () => {
  const { id } = useParams<{ id: string }>();
  const { artist } = useArtistDetails();

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
      <h2 className='text-2xl font-medium text-white'>Álbuns populares</h2>

      <div className='grid grid-cols-4 gap-4'>
        {(isLoading || !isEnabled) &&
          new Array(4).fill(0).map((_, index) => <Skeleton.Node key={index} active className='w-full h-25' />)}

        {!isLoading && albums.map(album => <Album key={album.id} data={album} />)}
      </div>

      <div className='flex items-center justify-center'>
        <Button onClick={() => fetchNextPage()} loading={isFetchingNextPage} disabled={!hasNextPage}>
          Ver mais
        </Button>
      </div>
    </section>
  );
};

export default Albuns;
