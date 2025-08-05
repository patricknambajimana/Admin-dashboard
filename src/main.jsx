import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from "./context/ProductsContext";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <UserProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </UserProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
