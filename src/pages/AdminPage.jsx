import React from 'react'
import AsideBar from "../component/AsideBar";
import NavBar from "../component/NavBar";
import Dashboard from "../component/Dashboard";
import { useTheme } from "../hooks/useTheme";


export const AdminPage = () => {
    const theme =useTheme()
  return (
    <div className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}>
        <AsideBar />
        <NavBar />
        <Dashboard />
    </div>
  )
}
