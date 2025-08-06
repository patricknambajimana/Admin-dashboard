import {
  Package,
  Laptop,
  Users,
  AlignCenter,
  Layers,
  LogOut,
  User,
  Import,
} from "lucide-react";
import { useProduct } from "../hooks/useProduct";
import { useUser } from "../hooks/useUser";
import { useTheme } from "../hooks/useTheme";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const AsideBar = () => {
  const { products } = useProduct();
  const { User } = useUser();
  const { theme } = useTheme();

  const totalUser = User.length;
  const totalproduct = products.length;
  const totalAssigned = products.filter((product) => product.stock > 0).length;

  return (
    <div
      className={`md:w-70 md:h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } md:border-r md:border-gray-800/10 md:fixed z-10`}>
      <div className="md:grid md:grid-cols-1 gap-4 ">
        <div className="md:flex uppercase md:gap-2 flex md:p-5  pt-15 md:ml-0 ml-2 w-full">
          <Package className=" bg-primary-500  text-white rounded-md  md:size-12 size-12" />
          <div>
            <h2 className="md:text-3xl text-4xl font-roboto uppercase font-bold">
              <span className="lowercase">i</span>huza{" "}
            </h2>
            <span className="font-extralight text-1xl">inventory</span>
          </div>
        </div>
        <div className="md:grid md:grid-cols-1 md:pl-10 flex gap-4 md:gap-1 capitalize text-sm font-extrabold ml-5 ">
          <NavLink to="dashboard">
            <div className="flex md:gap-2  mb-3 active:text-primary-500 active:bg-primary-200/30 text-1xl md:mr-10 p-3 rounded-md">
              <Laptop className="md:size-7 size-6" />
              <span className="md:block hidden">Dashboard</span>
            </div>
          </NavLink>
          <NavLink to="user">
            <div className="flex  space-y-2 justify-between active:text-primary-500 active:bg-primary-200/30  md:mr-10 p-3 rounded-md text-1xl">
              <div className="flex">
                <Users className="md:size-7 size-6" />
                <span className="md:block hidden">users</span>
              </div>

              <div>
                <span className="bg-gray-200 p-2 text-sm md:flex hidden rounded-2xl text-black">
                  {totalUser}
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink to="Product">
            <div className="flex space-y-2 text-1xl justify-between active:text-primary-500 active:bg-primary-200/30 md:mr-10 p-3 rounded-md">
              <div className="flex">
                <Package className="md:size-7 size-6" />
                <span className="md:block hidden">product</span>
              </div>
              <div className="">
                <span className="bg-gray-200 p-2 md:flex hidden text-sm rounded-2xl text-black">
                  {totalproduct}
                </span>
              </div>
            </div>
          </NavLink>
          <NavLink to="Category">
            <div className="flex space-y-2 text-1xl justify-between active:text-primary-500 active:bg-primary-200/30 md:mr-10 p-3 rounded-md">
              <div className="flex">
                <Layers className="md:size-7 size-6 " />
                <span className="md:block hidden"> categories</span>
              </div>
            </div>
          </NavLink>

          <NavLink to="assigned">
            <div className="flex space-y-2 text-1xl justify-between active:text-primary-500 active:bg-primary-200/30 mr-10 p-3 rounded-md">
              <div className="flex">
                <Package className="md:size-7 size-6" />
                <span className="md:block hidden">Assignment</span>
              </div>
              <div className="">
                <span className="bg-gray-200 p-2 md:flex hidden text-sm rounded-2xl text-black">
                  {totalAssigned}
                </span>
              </div>
            </div>
          </NavLink>
        </div>
        <Link to="/Login">
          <div className="relative left-80  md:left-5 size-15 pt-5 pl-4 md:rounded-md rounded-full bottom-30 md:top-50 md:bg-primary-200 bg-primary-200 md:w-30 flex">
            <span className="">
              <LogOut className=" size-7 " />
            </span>
            <button className="capitalize md:block hidden">logout</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AsideBar;
