import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar";

const Dashboard = () => {
  return (
    <section className="bj_account_dashboard" data-bg-color="#f5f5f5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideBar />
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
