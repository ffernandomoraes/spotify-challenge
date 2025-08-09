import { PropsWithChildren } from 'react';

import { App } from 'antd';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const { message } = App.useApp();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false
      },

      mutations: {
        onError: error => {
          message.error(error?.message || 'An unexpected error occurred');
        }
      }
    }
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default TanstackQueryProvider;
