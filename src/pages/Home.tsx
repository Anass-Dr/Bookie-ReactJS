import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import BestSelling from "../components/home/BestSelling";
import FeatureAuthors from "../components/home/FeatureAuthors";
import Hero from "../components/home/Hero";
import NewProducts from "../components/home/NewProducts";

const Home = () => {
  const auth = useAuth();

  useEffect(() => {
    if (
      auth.isAuthenticated &&
      localStorage.getItem("biblio-ticket") === null
    ) {
      localStorage.setItem("biblio-ticket", auth.user?.id_token || "");
    }
  }, [auth]);

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
