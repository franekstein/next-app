import { Footer } from '@/components/Footer/Footer'
import { Header } from '@/components/Header/Header'
import { Main } from '@/components/Main/Main'
import { Page } from '@/components/Page/Page'
import { PageDescription } from '@/components/PageDescription/PageDescription'
import { Pagination } from '@/components/Pagination/Pagination'
import { ProductList } from '@/components/ProductList/ProductList'
import { PRODUCTS_PER_PAGE, SSG_PRODUCTS_PAGES } from '@/constants'
import { InferGetStaticPathsType } from '@/model/utils'
import { getProducts } from '@/services/product'
import { getParam } from '@/utils'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

const PaginatedProductsPage = ({
  products,
  take,
  offset,
  hasNext,
  hasPrev,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          {products.length > 0 && <ProductList products={products} />}
          <Pagination
            hasNext={hasNext}
            hasPrev={hasPrev}
            take={take}
            offset={offset}
            params={false}
          />
        </section>
      </Main>
      <Footer />
    </Page>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: Array.from(Array(SSG_PRODUCTS_PAGES)).map((_, index) => ({
      params: {
        pages: [`${PRODUCTS_PER_PAGE}`, `${index * PRODUCTS_PER_PAGE}`],
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<InferGetStaticPathsType<typeof getStaticPaths>>) => {
  const take = getParam(params?.pages[0], PRODUCTS_PER_PAGE)
  const offset = getParam(params?.pages[1], 0)
  const products = await getProducts(take + 1, offset)

  const hasPrev = offset !== 0
  const hasNext = products.length === take + 1

  const filteredProducts =
    products.length === take + 1 ? products.slice(0, -1) : products

  return {
    props: {
      products: filteredProducts,
      take,
      offset,
      hasNext,
      hasPrev,
    },
  }
}

export default PaginatedProductsPage
