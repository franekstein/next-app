import { Layout } from '@/components/Layout/Layout';
import { NextSeo } from 'next-seo';

const AboutPage = () => {
  return (
    <Layout>
      <NextSeo title="About page" description="About desciption" />
      About
    </Layout>
  );
};

export default AboutPage;
