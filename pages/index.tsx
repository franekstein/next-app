import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Product } from "@/components/Product";

const data = {
  name: 'Small Headphones',
  thumbnailUrl: "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  thumbnailAlt: "Small Headphones image",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam voluptatem nemo.`,
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <Header />
      <Main>
        <Product data={data} />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
