import { Moon, Settings, Bell, User as UserIcon } from "lucide-react";
import { useAuth } from "../hooks/useAuth"; // use your auth context
import { useTheme } from "../hooks/useTheme";

export default function NavBar() {
  const { auth } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <nav
        className={`fixed z-5 top-0 md:p-4 p-1 items-center border-b-1 ${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        } shadow-sm border-gray-300/40 w-full justify-between`}>
        <div className="flex justify-between">
          <div className="capitalize text-left md:ml-70 ml-2">
            <h2 className="md:text-3xl text-sm font-roboto font-extrabold">
              dashboard
            </h2>
            <span className="md:font-light text-sm">
              welcome back, {auth?.role || "user"}
            </span>
          </div>

          <div className="md:flex md:gap-7 md:mr-10 mr-2 flex gap-2 items-center">
            <button onClick={toggleTheme}>
              <Moon />
            </button>
            <button>
              <Settings />
            </button>
            <button>
              <Bell />
            </button>
            <div className="flex gap-3 items-center">
              <span className="hidden sm:block text-sm">{auth?.email}</span>
              <UserIcon className="bg-primary-600 rounded-3xl text-white w-10 h-10 p-2" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
