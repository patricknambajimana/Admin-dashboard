import React from "react";
import AsideBar from "../component/AsideBar";
import NavBar from "../component/NavBar";
import { useTheme } from "../hooks/useTheme";
import { Outlet } from "react-router-dom";
const AdminPage = () => {
  const theme = useTheme();
  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : " text-white"
      }`}>
      <AsideBar />
      <NavBar />
      <div className="md:pl-80 md:pt-30">
      <Outlet />
      </div>
    </div>
  );
};
export default AdminPage;
