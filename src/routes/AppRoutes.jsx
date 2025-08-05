import { Routes, Route } from "react-router-dom";
import UserPage from "../pages/UserPage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../component/Dashboard";
export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/AdminPage" element={<AdminPage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<UserPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="Category" element={<CategoryPage />} />
        </Route>
        <Route path="/Login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
};
