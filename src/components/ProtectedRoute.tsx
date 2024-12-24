import { useAuth } from "react-oidc-context";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    auth.signinRedirect();
    return null;
  }

  return children;
};

export default ProtectedRoute;