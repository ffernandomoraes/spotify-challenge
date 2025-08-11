import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import Track from './Track';

import ArtistsService from '@/services/artists';

const Tracks = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['artists', 'top-tracks', id],
    queryFn: () => ArtistsService.getTopTracks(id ?? '')
  });

  if (isLoading) {
    return 'carregando...';
  }

  return (
    <section>
      <h2 className='text-2xl font-medium text-white mb-6'>Faixas populares</h2>

      <div className='flex flex-col'>
        {data?.tracks.map((track, index) => <Track key={track.id} data={track} index={index} />)}
      </div>
    </section>
  );
};

export default Tracks;
