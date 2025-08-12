import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import Albuns from './Albuns';
import Artist from './Artist';
import ArtistDetailsProvider from './context';
import Tracks from './Tracks';

import ArtistsService from '@/services/artists';

const Details = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['artists', 'details', id],
    queryFn: async () => {
      const response = await ArtistsService.getArtist(id ?? '');
      return response;
    }
  });

  return (
    <ArtistDetailsProvider value={{ artist: data, isLoading }}>
      <div className='p-6 md:p-12 md:pt-8'>
        <div className='bg-linear-to-b from-brand/50 to-background from-10% to-[650px] p-12 rounded-4xl space-y-16'>
          <Artist />
          <Tracks />
          <Albuns />
        </div>
      </div>
    </ArtistDetailsProvider>
  );
};

export default Details;
