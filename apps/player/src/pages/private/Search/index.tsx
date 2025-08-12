import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import AlbumCard from '@/components/shared/AlbumCard';
import AlbumCardLoader from '@/components/shared/AlbumCard/Loader';
import ArtistCard from '@/components/shared/ArtistCard';
import ArtistCardLoader from '@/components/shared/ArtistCard/Loader';
import ErrorResponse from '@/components/shared/ErrorResponse';
import { SearchService } from '@/services/search';

const CACHE_TIME = 10_000;

const Search = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['search', query],
    gcTime: CACHE_TIME,
    staleTime: CACHE_TIME,
    queryFn: () => SearchService.filter(query ?? '')
  });

  const isLoadingOrFetching = isLoading || isFetching;

  if (error) {
    return <ErrorResponse title={t('search.error.title')} description={t('search.error.description')} />;
  }

  return (
    <div className='p-6 md:p-12 md:pt-8 space-y-12'>
      <section className='space-y-6'>
        <h2 className='text-3xl font-bold text-white'>{t('search.artists.title')}</h2>

        <div className='grid grid-cols-1 md:grid-cols-6 gap-2.5 md:gap-4'>
          {isLoadingOrFetching && new Array(6).fill(0).map((_, index) => <ArtistCardLoader key={index} />)}

          {!isLoadingOrFetching &&
            data?.artists.items.map(artist => (
              <Link key={artist.id} to={`/artist/${artist.id}`}>
                <ArtistCard>
                  <ArtistCard.Image src={artist.images[0].url} alt={artist.name} />

                  <ArtistCard.Content>
                    <ArtistCard.Title>{artist.name}</ArtistCard.Title>
                  </ArtistCard.Content>
                </ArtistCard>
              </Link>
            ))}
        </div>
      </section>

      <section className='space-y-6'>
        <h2 className='text-3xl font-bold text-white'>{t('search.albums.title')}</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-4'>
          {isLoadingOrFetching && new Array(6).fill(0).map((_, index) => <AlbumCardLoader key={index} />)}

          {!isLoadingOrFetching &&
            data?.albums.items.map(album => (
              <AlbumCard key={album.id}>
                <AlbumCard.Image src={album.images[0].url} alt={album.name} />

                <AlbumCard.Content>
                  <AlbumCard.Title>{album.name}</AlbumCard.Title>
                  {album.artists.length > 0 && <AlbumCard.Description>{album.artists[0].name}</AlbumCard.Description>}
                </AlbumCard.Content>
              </AlbumCard>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
