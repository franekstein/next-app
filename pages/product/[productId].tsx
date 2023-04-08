import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { Page } from "@/components/Page/Page";
import { ProductDetails } from "@/components/ProductDetails/ProductDetails";
import { getProduct, getProducts } from "@/services/product";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

const ProductPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page>
      <Header />
      <Main>
        <div className="flex flex-col">
          {data && <ProductDetails data={data} />}
        </div>
      </Main>
      <Footer />
    </Page>
  );
};

export const getStaticPaths = async () => {
  const data = await getProducts();
  return {
    paths: data.map(({ id }) => ({ params: { productId: `${id}` } })),
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

  const data = await getProduct(params.productId);

  return {
    props: {
      data,
    },
  };
};

export default ProductPage;
