import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Loader from '../globals/Loader';

import AntdProvider from './Antd';
import ErrorBoundary from './ErrorBoundary';
import I18nProvider from './I18n';
import TanstackQueryProvider from './TanstackQuery';

import ScrollRestoration from '@/components/globals/ScrollRestoration';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <I18nProvider>
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
    </I18nProvider>
  );
};

export default Providers;
