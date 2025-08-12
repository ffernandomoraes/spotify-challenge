import { Skeleton } from 'antd';

const ArtistLoader = () => {
  return (
    <header className='w-full flex items-center gap-4'>
      <div className='w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12'>
        <Skeleton.Node active className='w-full h-full aspect-square md:w-64 md:h-64 rounded-3xl' />

        <div className='space-y-4 flex flex-col'>
          <Skeleton.Node active className='w-full md:w-120 h-12' />
          <Skeleton.Node active className='w-60 h-10' />
        </div>
      </div>
    </header>
  );
};

export default ArtistLoader;
