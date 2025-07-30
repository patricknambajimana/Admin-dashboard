import React from "react";
import { CircleCheckBig, Package } from "lucide-react";

import { Total } from "./state/Total";
import { RecentProduct } from "./RecentProduct";
import UserList from "./UserList";
import { useTheme } from "../hooks/useTheme";

const Dashboard = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`md:w-full  md:pl-80 md:pt-30 md:pr-10 p-2 ${
        theme === "light" ? "bg-white text-black" : "bg-neutral-900 text-white"
      } md:top-30 items-center text-center justify-between `}>
      <div className="bg-primary-500 w-full md:w-full rounded-2xl">
        <div className="flex gap-2 p-5">
          <Package className=" bg-primary-400  text-white rounded-md md:p-2  md:size-12" />
          <h2 className="text-white text-3xl font-roboto uppercase">
            <span className="lowercase">i</span>huza inventory
            <span className="capitalize text-2xl" span>
              -sytem overview
            </span>
          </h2>
        </div>
        <div className="grid grid-rows-2 text-left pl-20 pb-10">
          <span className="capitalize text-1xl text-white">
            monitor your <span className="lowercase">i</span>
            <span className="uppercase text-1xl">huza</span> inventory and
            product assignment in real-time.
          </span>
          <span className="flex gap-1 capitalize text-white pt-3">
            <CircleCheckBig className="text-green-300" />
            all system operational
          </span>
        </div>
      </div>
      <div className="text-left">
        <Total />
      </div>
      <div
        className={`mt-10  w-full  border-neutral-200 shadow-1 rounded-md ${
          theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}>
        <h2 className="capitalize text-xl font-roboto text-left p-4 rounded-t-2xl border border-gray-300/40 shadow-1xl">
          recents added products
        </h2>
        <div>
          <RecentProduct />
        </div>
      </div>
      <div className="mt-10 w-full border border-gray-300/40  shadow-1xl rounded-t-2xl">
        <div
          className={`flex rounded-t-2xl justify-between capitalize text-3x p-4 ${
            theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
          }`}>
          <h2 className="font-bold text-2xl">Users</h2>
          <button className="bg-primary-500 p-3 text-white capitalize rounded-xl text-xl">
            add user
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="">
          <UserList />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
