import { Link, useLocation } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const SideBar = () => {
  const location = useLocation();
  const auth = useAuth();
  const groups: string[] = Array.isArray(auth?.user?.profile["cognito:groups"])
    ? auth.user.profile["cognito:groups"]
    : [];
  const isAdmin = groups.includes("admin");

  return (
    <div className="account_dashboard_sidebar">
      <div className="sidebar_widget_body d-flex account_dashboard_sidebar_profile">
        <div className="">
          <img src="/assets/img/profile-img.png" alt="account" />
        </div>
        <div className="">
          <div className="greetings">Hello</div>
          <div className="name">Muaz BK</div>
        </div>
      </div>
      <div className="sidebar_widget_body p-0">
        <ul className="sidebar_widget_menu">
          <li>
            <Link
              className={
                location.pathname === "/dashboard/account-info" ? "active" : ""
              }
              to="/dashboard/account-info"
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/dashboard/book-loans" ? "active" : ""
              }
              to="/dashboard/book-loans"
            >
              Book loans
            </Link>
          </li>
          {isAdmin && (
            <>
              <li>
                <Link
                  className={
                    location.pathname === "/dashboard/book-list" ? "active" : ""
                  }
                  to="/dashboard/book-list"
                >
                  Book list
                </Link>
              </li>
              <li>
                <Link
                  className={
                    location.pathname === "/dashboard/book-create"
                      ? "active"
                      : ""
                  }
                  to="/dashboard/book-create"
                >
                  Add Book
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
