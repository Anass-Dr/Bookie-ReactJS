import BestSelling from "../components/home/BestSelling";
import FeatureAuthors from "../components/home/FeatureAuthors";
import Hero from "../components/home/Hero";
import NewProducts from "../components/home/NewProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <BestSelling />
      <NewProducts />
      <FeatureAuthors />
    </>
  );
};

export default Home;
