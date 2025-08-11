import { useQuery } from '@tanstack/react-query';
import { Button, Tag } from 'antd';
import { useParams } from 'react-router-dom';

import { formatNumber } from '@/formatters/number';
import ArtistsService from '@/services/artists';

const Artist = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['artists', 'details', id],
    queryFn: () => ArtistsService.getArtist(id ?? '')
  });

  if (isLoading) {
    return 'carregando...';
  }

  return (
    <header className='flex items-center gap-4 justify-between'>
      <div className='flex items-center gap-12'>
        <img src={data?.images[0]?.url ?? ''} alt={data?.name} className='w-64 h-64 rounded-3xl object-cover' />

        <div className='space-y-4'>
          <h1 className='text-6xl font-bold text-white'>{data?.name}</h1>

          <div className='flex items-center gap-5'>
            {data?.followers.total && (
              <p className='text-gray-400 text-lg'>{formatNumber(data.followers.total)} seguidores</p>
            )}

            <div className='w-[1px] h-5 bg-gray-500' />

            <p className='text-gray-400 text-lg'>{data?.popularity} de popularidade</p>
          </div>

          <div className='flex flex-wrap'>
            {data?.genres.map(genre => (
              <Tag key={genre} className='px-2.5 py-0.5'>
                {genre}
              </Tag>
            ))}
          </div>
        </div>
      </div>

      <Button color='primary'>Seguir</Button>
    </header>
  );
};

export default Artist;
