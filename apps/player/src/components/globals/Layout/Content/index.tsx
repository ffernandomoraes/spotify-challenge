import { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <main role='main' className='flex-1 pt-26 pb-16'>
      {children}
    </main>
  );
};

export default Content;
