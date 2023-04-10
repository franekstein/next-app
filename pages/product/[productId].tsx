import { Layout } from '@/components/Layout/Layout';
import { ProductDetails } from '@/components/ProductDetails/ProductDetails';
import { productService } from '@/services/product';
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
  const products = await productService.getProducts();
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

  const product = await productService.getProduct(params.productId);
  const longDescriptionMarkdown = await serialize(product.longDescription);

  return {
    props: {
      product: { ...product, longDescriptionMarkdown },
    },
  };
};

export default ProductPage;
