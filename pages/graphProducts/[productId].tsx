import { Layout } from '@/components/Layout/Layout';
import { ProductDetails } from '@/components/ProductDetails/ProductDetails';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { serialize } from 'next-mdx-remote/serialize';
import { client } from '@/graphql/config';
import {
  ProductsQuery,
  ProductsDocument,
  ProductDocument,
  ProductQuery,
} from '@/generated/graphql';

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
  const {
    data: { products },
  } = await client.query<ProductsQuery>({ query: ProductsDocument });
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

  const {
    data: { product },
  } = await client.query<ProductQuery>({
    query: ProductDocument,
    variables: { id: params.productId },
  });

  const longDescriptionMarkdown = await serialize(product?.description || '');

  const { id, title, description, images, price, reviews } = product!;

  const convertedProduct = {
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
    longDescriptionMarkdown,
  };

  return {
    props: {
      product: convertedProduct,
    },
  };
};

export default ProductPage;
