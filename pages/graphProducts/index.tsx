import { Layout } from '@/components/Layout/Layout';
import { PageDescription } from '@/components/PageDescription/PageDescription';
import { ProductList } from '@/components/ProductList/ProductList';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { client } from '@/graphql/config';
import { ProductsDocument, ProductsQuery } from '@/generated/graphql';
import { ProductEntity } from '@/model/product';
import { GraphProductList } from '@/components/GraphProductList/GraphProductList';

const PaginatedProductsPage = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <NextSeo title="Products page" description="Products desciption" />
      <section>
        <PageDescription
          header="Something incredible"
          subheader="Realm of the galaxies"
          description="Trillion paroxysm of global death cosmic ocean from which we spring colonies Cambrian explosion. Vanquish the impossible gathered by gravity a very small stage in a vast cosmic arena gathered by gravity emerged into consciousness emerged into consciousness? Great turbulent clouds emerged into consciousness rich in mystery astonishment extraordinary claims require extraordinary evidence citizens of distant epochs? "
        />
        {products.length > 0 && <GraphProductList products={products} />}
      </section>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const {
    data: { products },
  } = await client.query<ProductsQuery>({ query: ProductsDocument });

  const convertedProducts = products.map(
    ({ id, title, description, images, price, reviews }): ProductEntity => ({
      id,
      title,
      price,
      description,
      rating: {
        rate: reviews[0]?.rating || Math.floor(Math.random() * 5) + 1,
        count: 123,
      },
      image: images[0].url,
      longDescription: description,
    })
  );

  return {
    props: {
      products: convertedProducts,
    },
  };
};

export default PaginatedProductsPage;
