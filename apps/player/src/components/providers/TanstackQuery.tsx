import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from 'antd';
import { PropsWithChildren } from 'react';

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
  const { message } = App.useApp();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        gcTime: 5 * 60 * 1000,
        staleTime: 2 * 60 * 1000
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
