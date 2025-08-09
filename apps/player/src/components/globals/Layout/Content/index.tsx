import { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <main role='main' className='p-6 flex-1'>
      {children}
    </main>
  );
};

export default Content;
