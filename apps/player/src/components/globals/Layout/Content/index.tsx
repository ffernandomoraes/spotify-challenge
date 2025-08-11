import { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <main role='main' className='flex-1 mt-20 md:mt-25 pb-20'>
      {children}
    </main>
  );
};

export default Content;
