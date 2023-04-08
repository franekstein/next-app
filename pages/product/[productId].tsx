import { Layout } from '@/components/Layout/Layout';
import { ProductDetails } from '@/components/ProductDetails/ProductDetails';
import { getProduct, getProducts } from '@/services/product';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';

const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <NextSeo title={product?.title} description={product?.description} />
      <div className="flex flex-col">
        {product && <ProductDetails product={product} />}
      </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const products = await getProducts();
  return {
    paths: products.map(({ id }) => ({ params: { productId: `${id}` } })),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const product = await getProduct(params.productId);
  const longDescription = await serialize(product.longDescription);

  return {
    props: {
      product: { ...product, longDescription },
    },
  };
};

export default ProductPage;
