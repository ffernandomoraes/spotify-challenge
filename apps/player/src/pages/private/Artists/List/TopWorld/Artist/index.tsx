import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import type { Artist as ArtistType } from '@/interfaces/artists';

const Artist = ({ data }: { data: ArtistType }) => {
  const { t } = useTranslation();

  return (
    <Link to={`/artist/${data.id}`}>
      <div className='flex flex-col group animate-fade-in'>
        <img
          src={data?.images[1]?.url ?? ''}
          alt={data.name}
          className='w-full aspect-square opacity-90 group-hover:opacity-100 object-cover rounded-4xl outline-offset-5 outline-2 outline-transparent group-hover:outline-brand/70 transition-default'
        />

        <div className='mt-3 px-3'>
          <h3 className='text-gray-400 font-medium group-hover:text-white transition-default truncate'>{data.name}</h3>
          <p className='text-sm text-gray-400'>{t('artists.common.artist')}</p>
        </div>
      </div>
    </Link>
  );
};

export default Artist;
