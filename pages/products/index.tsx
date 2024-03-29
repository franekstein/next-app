import { Layout } from '@/components/Layout/Layout';
import { Loader } from '@/components/Loader/Loader';
import { PageDescription } from '@/components/PageDescription/PageDescription';
import { Pagination } from '@/components/Pagination/Pagination';
import { ProductList } from '@/components/ProductList/ProductList';
import { PRODUCTS_PER_PAGE } from '@/constants';
import { useProducts } from '@/hooks/useProducts';
import { getParam } from '@/utils';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const ProductsPage = () => {
  const {
    query: { take: initialTake, offset: initialOffset },
  } = useRouter();

  const parsedTake = getParam(initialTake, PRODUCTS_PER_PAGE);
  const parsedOffset = getParam(initialOffset, 0);
  const { products, hasNext, hasPrev, isLoading, take, offset } = useProducts({
    take: parsedTake,
    offset: parsedOffset,
  });

  return (
    <Layout>
      <NextSeo title="Products page" description="Products desciption" />
      <section>
        <PageDescription
          header="Something incredible"
          subheader="Realm of the galaxies"
          description="Trillion paroxysm of global death cosmic ocean from which we spring colonies Cambrian explosion. Vanquish the impossible gathered by gravity a very small stage in a vast cosmic arena gathered by gravity emerged into consciousness emerged into consciousness? Great turbulent clouds emerged into consciousness rich in mystery astonishment extraordinary claims require extraordinary evidence citizens of distant epochs? "
        />
        {isLoading && (
          <div className="flex justify-center items-center aspect-video">
            <Loader />
          </div>
        )}
        {products.length > 0 && <ProductList products={products} />}
        <Pagination
          hasNext={hasNext}
          hasPrev={hasPrev}
          take={take}
          offset={offset}
          disabled={isLoading}
        />
      </section>
    </Layout>
  );
};

export default ProductsPage;
