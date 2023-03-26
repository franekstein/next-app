import { Footer } from "@/components/Footer/Footer";
import { Main } from "@/components/Main/Main";
import { Header } from "@/components/Header/Header";
import { Page } from "@/components/Page/Page";
import { PageDescription } from "@/components/PageDescription/PageDescription";

const Home = () => {
  return (
    <Page>
      <Header />
      <Main>
        <PageDescription
          header="Something incredible"
          subheader="Realm of the galaxies"
          description="Trillion paroxysm of global death cosmic ocean from which we spring colonies Cambrian explosion. Vanquish the impossible gathered by gravity a very small stage in a vast cosmic arena gathered by gravity emerged into consciousness emerged into consciousness? Great turbulent clouds emerged into consciousness rich in mystery astonishment extraordinary claims require extraordinary evidence citizens of distant epochs? "
          link={{ href: "/products", title: "Products" }}
        />
      </Main>
      <Footer />
    </Page>
  );
};

export default Home;
