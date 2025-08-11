import { Skeleton } from 'antd';

const Loader = () => {
  return (
    <div className='flex flex-col'>
      <Skeleton.Node active className='w-full h-full aspect-square rounded-4xl object-cover' />

      <div className='mt-3 px-3'>
        <Skeleton.Node active className='w-full h-4' />
        <Skeleton.Node active className='h-3' />
      </div>
    </div>
  );
};

export default Loader;
