import { Routes, Route } from "react-router-dom";
import UserPage from "../pages/UserPage";
import ProductPage from "../pages/ProductPage";
import CategoryPage from "../pages/CategoryPage";
import AdminPage from "../pages/AdminPage";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../component/Dashboard";
import { AssignedPage } from "../pages/AssignedPage";
import { ErrorPage } from "../pages/ErrorPage";
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
          <Route path="assigned" element={<AssignedPage />} />
        </Route>
        <Route path="/Login" element={<LoginPage />}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </div>
  );
};
