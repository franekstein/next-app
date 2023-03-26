import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { Page } from "@/components/Page/Page";
import { PageDescription } from "@/components/PageDescription/PageDescription";
import { Pagination } from "@/components/Pagination/Pagination";
import { ProductList } from "@/components/ProductList/ProductList";
import { InferGetStaticPropsType } from "next";
import { useQuery } from "react-query";

export interface ProductEntity {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  image: string;
  longDescription: string;
}

const getProducts = async (): Promise<ProductEntity[]> => {
  const data = await fetch("https://naszsklep-api.vercel.app/api/products");
  return data.json();
};

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: products = [] } = useQuery("products", getProducts);
  return (
    <Page>
      <Header />
      <Main>
        <section>
          <PageDescription
            header="Something incredible"
            subheader="Realm of the galaxies"
            description="Trillion paroxysm of global death cosmic ocean from which we spring colonies Cambrian explosion. Vanquish the impossible gathered by gravity a very small stage in a vast cosmic arena gathered by gravity emerged into consciousness emerged into consciousness? Great turbulent clouds emerged into consciousness rich in mystery astonishment extraordinary claims require extraordinary evidence citizens of distant epochs? "
          />
          <ProductList data={products} />
          <Pagination hasNext={true} hasPrev={false} />
        </section>
      </Main>
      <Footer />
    </Page>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data: ProductEntity[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductsPage;
