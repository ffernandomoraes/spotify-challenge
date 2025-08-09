import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Loader from '../globals/Loader';

import AntdProvider from './Antd';
import ErrorBoundary from './ErrorBoundary';
import TanstackQueryProvider from './TanstackQuery';

import ScrollRestoration from '@/components/globals/ScrollRestoration';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <AntdProvider>
      <ErrorBoundary>
        <TanstackQueryProvider>
          <BrowserRouter>
            <ScrollRestoration />
            <Loader />
            {children}
          </BrowserRouter>
        </TanstackQueryProvider>
      </ErrorBoundary>
    </AntdProvider>
  );
};

export default Providers;
