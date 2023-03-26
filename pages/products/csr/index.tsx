import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Loader } from "@/components/Loader/Loader";
import { Main } from "@/components/Main/Main";
import { Page } from "@/components/Page/Page";
import { PageDescription } from "@/components/PageDescription/PageDescription";
import { Pagination } from "@/components/Pagination/Pagination";
import { ProductList } from "@/components/ProductList/ProductList";
import { useRouter } from "next/router";
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

const getParam = (
  param: string | string[] | undefined,
  defaultValue: number
) => {
  if (!param || Array.isArray(param)) {
    return defaultValue;
  }
  const value = parseInt(param);
  return isNaN(value) ? defaultValue : value;
};

const getProducts = async (
  take: number,
  offset: number
): Promise<ProductEntity[]> => {
  const data = await fetch(
    `https://naszsklep-api.vercel.app/api/products?offset=${offset}&take=${take}`
  );
  return data.json();
};

const ProductsPage = () => {
  const {
    query: { take, offset },
  } = useRouter();

  const parsedOffset = getParam(offset, 0);
  const parsedTake = getParam(take, 25);

  const { data: products = [], isLoading } = useQuery(
    ["products", take, offset],
    () => getProducts(parsedTake + 1, parsedOffset)
  );

  const hasPrev = parsedOffset !== 0;
  const hasNext = products.length === parsedTake + 1;

  const filteredProducts =
    products.length === parsedTake + 1 ? products.slice(0, -1) : products;

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
          {isLoading && <Loader />}
          {products.length > 0 && (
            <>
              <ProductList data={filteredProducts} />
              <Pagination
                hasNext={hasNext}
                hasPrev={hasPrev}
                take={parsedTake}
                offset={parsedOffset}
              />
            </>
          )}
        </section>
      </Main>
      <Footer />
    </Page>
  );
};

export default ProductsPage;
