import Albuns from './Albuns';
import Artist from './Artist';
import Tracks from './Tracks';

const Details = () => {
  return (
    <div className='p-6 md:p-12 md:pt-8'>
      <div className='bg-linear-to-b from-elevated-base to-background p-12 rounded-4xl space-y-16'>
        <Artist />
        <Tracks />
        <Albuns />
      </div>
    </div>
  );
};

export default Details;
