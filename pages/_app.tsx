import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { DefaultSeo } from 'next-seo';
import nextSeoConfig from '@/next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
