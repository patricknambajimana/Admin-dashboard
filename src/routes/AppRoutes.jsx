import { Routes, Route } from "react-router-dom";
import  AuthLogin  from "../pages/AuthLogin";
import { UserPage } from "../pages/UserPage";
import { ProductPage } from "../pages/ProductPage";
import { CategoryPage } from "../pages/CategoryPage";
export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLogin />}></Route>
        <Route path="/Users" element={<UserPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/Categories" element={<CategoryPage />}></Route>
      </Routes>
    </div>
  );
};
