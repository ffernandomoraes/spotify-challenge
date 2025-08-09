import { PropsWithChildren } from 'react';

const Content = ({ children }: PropsWithChildren) => {
  return (
    <main role='main' className='p-6'>
      {children}
    </main>
  );
};

export default Content;
