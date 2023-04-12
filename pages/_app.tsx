import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';
import { DefaultSeo } from 'next-seo';
import nextSeoConfig from '@/next-seo.config';
import { CartContextProvider } from '@/state/cartContext';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/graphql/config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={new QueryClient()}>
        <DefaultSeo {...nextSeoConfig} />
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}
