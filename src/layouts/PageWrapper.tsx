import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PageWrapper = () => {
  return (
    <div className="body_wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageWrapper;
