import { NextSeoProps } from 'next-seo';
import { PAGE_NAME, PAGE_URL } from './constants';

const title = 'Next App';
const description = 'Next App Description';

const nextSeoConfig: NextSeoProps = {
  title,
  description,
  openGraph: {
    url: PAGE_URL,
    title,
    description,
    siteName: PAGE_NAME,
  },
};

export default nextSeoConfig;
