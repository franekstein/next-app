import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
