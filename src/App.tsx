import router from "./router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: import.meta.env.VITE_AUTHORITY,
  client_id: import.meta.env.VITE_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_REDIRECT_URI,
  response_type: "code",
  scope: "email openid phone",
};

function App() {
  return (
    <>
      <AuthProvider {...cognitoAuthConfig}>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
