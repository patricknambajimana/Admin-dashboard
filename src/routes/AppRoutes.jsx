import { Routes, Route } from "react-router-dom";
import AuthLogin from "../pages/AuthLogin";
import { UserPage } from "../pages/UserPage";
import { ProductPage } from "../pages/ProductPage";
import { CategoryPage } from "../pages/CategoryPage";
import { AdminPage } from "../pages/AdminPage";
export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLogin />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}></Route>
        <Route path="/UserPage" element={<UserPage />}></Route>
        <Route path="/productPage" element={<ProductPage />}></Route>
        <Route path="/CategoryPage" element={<CategoryPage />}></Route>
      </Routes>
    </div>
  );
};
