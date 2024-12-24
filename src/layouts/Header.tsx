import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const Header = () => {
  const auth = useAuth();

  const signOutRedirect = async () => {
    await auth.removeUser();
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_REDIRECT_URI;
    const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  return (
    <header className="header_area header_relative">
      <nav className="navbar navbar-expand-lg menu_one" id="header">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="assets/img/home-two/logo-dark.svg" alt="logo" />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu_toggle">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hamburger-cross">
                <span></span>
                <span></span>
              </span>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav menu w_menu ms-auto me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" role="button">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop" role="button">
                  Shop
                </Link>
              </li>
              {auth.isAuthenticated && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/dashboard/account-info"
                    role="button"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
            {auth.isAuthenticated ? (
              <button
                className="bj_theme_btn strock_btn hidden-sm hidden-xs"
                onClick={signOutRedirect}
              >
                <i className="fa-regular fa-user"></i>Logout
              </button>
            ) : (
              <button
                className="bj_theme_btn strock_btn hidden-sm hidden-xs"
                onClick={() => auth.signinRedirect()}
              >
                <i className="fa-regular fa-user"></i>Login
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
