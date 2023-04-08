import { NextSeoProps } from 'next-seo';

const title = 'Next App';
const description = 'Next App Description';

const nextSeoConfig: NextSeoProps = {
  title,
  description,
  openGraph: {
    url: 'https://next-app-phi-virid.vercel.app',
    title,
    description,
    siteName: 'NextApp',
  },
};

export default nextSeoConfig;
