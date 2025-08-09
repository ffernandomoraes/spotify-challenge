import { Spin } from 'antd';
import { AiOutlineLoading } from 'react-icons/ai';

import { useStoreLoader } from '@/store/loader';

const Loader = () => {
  const { isLoading } = useStoreLoader();

  if (!isLoading) {
    return null;
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen fixed top-0 left-0 z-50'>
      <Spin size='large' indicator={<AiOutlineLoading className='animate-spin' />} />
    </div>
  );
};

export default Loader;
