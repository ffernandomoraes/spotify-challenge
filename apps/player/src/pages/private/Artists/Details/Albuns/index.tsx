import { useInfiniteQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import { useParams } from 'react-router-dom';

import Album from './Album';

import ArtistsService from '@/services/artists';

const Albuns = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['artists', 'albums', id],
    initialPageParam: 0,
    staleTime: 5000,
    queryFn: ({ pageParam = 0 }) => ArtistsService.getAlbums(id ?? '', pageParam),
    getNextPageParam: lastPage => {
      const nextOffset = lastPage.offset + lastPage.limit;
      return nextOffset < lastPage.total ? nextOffset : undefined;
    }
  });

  if (isLoading) return 'carregando...';

  const albums = data?.pages.flatMap(p => p.items) ?? [];

  return (
    <section className='space-y-6'>
      <h2 className='text-2xl font-medium text-white'>Álbuns populares</h2>

      <div className='grid grid-cols-4 gap-4'>
        {albums.map(album => (
          <Album key={album.id} data={album} />
        ))}
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
