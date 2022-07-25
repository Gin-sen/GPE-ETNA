import * as React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Layout from "./pages/Layout";
import ProtectedPage from "./pages/ProtectedPage";
import PublicPage from "./pages/PublicPage";
import AuthProvider from "./utils/AuthProvider";
import RequireAuth from "./utils/RequireAuth";
import LoginPage from "./pages/LoginPage";
import Keycloak from "keycloak-js";


export default function App() {
    function initKeycloak() {
        const keycloak = new Keycloak({
            url: 'https://scssokeycloak:8443/auth',
            realm: 'applifront',
            clientId: 'scapplifront'
        });
        console.log(keycloak)
        keycloak.init({
            onLoad: "login-required",
            flow: "standard",
            pkceMethod: "S256",
            checkLoginIframe: false,
            redirectUri: window.location.origin + '/login/callback'
        }).then(function(authenticated) {
            alert(authenticated ? 'authenticated' : 'not authenticated');
        }).catch(function() {
            alert('failed to initialize');
        });
    }
    initKeycloak()
  return (
    <AuthProvider>
      <h1>Auth Example</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
