import React from "react";
import {
  Package,
  Laptop,
  Users,
  AlignCenter,
  Layers,
  LogOut,
  User,
} from "lucide-react";
import { useProduct } from "../hooks/useProduct";
import { useUser } from "../hooks/useUser";
import { useTheme } from "../hooks/useTheme";
const AsideBar = () => {
  const { products } = useProduct();
  const { user } = useUser();
  const { theme } = useTheme();

  const totalUser = user.length;
  const totalproduct = products.length;
  const totalAssigned = products.filter((product) => product.stock > 0).length;

  return (
    <div
      className={`md:w-70 md:h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } border-r border-gray-800/40 md:fixed z-10`}>
      <div className="md:grid md:grid-cols-1 gap-4">
        <div className="md:flex uppercase md:gap-2 flex md:p-5  pt-15 md:ml-0 ml-2 w-full">
          <Package className=" bg-primary-500  text-white rounded-md  md:size-12 size-12" />
          <div>
            <h2 className="md:text-3xl text-4xl font-roboto uppercase font-bold">
              <span className="lowercase">i</span>huza{" "}
            </h2>
            <span className="font-extralight text-1xl">inventory</span>
          </div>
        </div>
        <div className="md:grid md:grid-cols-1 md:pl-10 flex capitalize text-sm font-extrabold">
          <div className="flex md:gap-2  md:space-y-2 hover:text-primary-500 hover:bg-primary-200/30 text-1xl md:mr-10 md:p-3 p-3  rounded-md">
            <Laptop className="md:size-7 size-6" />
            <a href="" className="md:flex hidden">
              dashboard
            </a>
          </div>
          <div className="flex space-y-2 justify-between hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md text-1xl">
            <div className="flex">
              <Users className="md:size-7 size-6" />
              <a href="" className="md:flex hidden">
                users
              </a>
            </div>
            <div>
              <span className="bg-gray-200 p-2 text-sm md:flex hidden rounded-2xl text-black">
                {totalUser}
              </span>
            </div>
          </div>
          <div className="flex space-y-2 text-1xl justify-between hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md">
            <div className="flex">
              <Package className="md:size-7 size-6" />
              <a href="" className="md:flex hidden">
                products
              </a>
            </div>
            <div>
              <span className="bg-gray-200 p-2 md:flex hidden rounded-2xl text-black text-sm">
                {totalproduct}
              </span>
            </div>
          </div>
          <div className="flex space-y-2 text-1xl justify-between hover:text-primary-500 hover:bg-primary-200/30 mr-10 p-3 rounded-md">
            <div className="flex">
              <AlignCenter className="md:size-7 size-6" />
              <a href="" className="md:flex hidden">
                assignment
              </a>
            </div>
            <div className="">
              <span className="bg-gray-200 p-2 md:flex hidden text-sm rounded-2xl text-black">
                {totalAssigned}
              </span>
            </div>
          </div>
          <div className="flex   hover:text-primary-500 hover:bg-primary-200/30 p-3 rounded-md">
            <Layers className="md:size-7 size-6 " />
            <a href="" className="md:flex hidden">
              categories
            </a>
          </div>
        </div>
        <div className="md:flex md:text-2xl text-sm md:mt-[30rem] mt-[-8rem] md:ml-0  text-black-500 font-extrabold md:p-3  sm:ml-90  ">
          <LogOut className="md:size-10 size-7 relative mt-4 bg-primary-600 rounded-full p-1 md:block  hidden" />
          <button className="md:flex md:text-2xl text-sm rounded-md hidden justify-center-safe capitalize ">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AsideBar;
