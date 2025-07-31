import "./App.css";
import AsideBar from "./component/AsideBar";
import NavBar from "./component/NavBar";
import Dashboard from "./component/Dashboard";
import { useTheme } from "./hooks/useTheme";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}>
      <BrowserRouter>
        <AppRoutes />
        <AsideBar />
        <NavBar />
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
