import "./DashboardClient.css";
import image from "../../assets/control.png";
import logoo from "../../assets/logo.png";
import img1 from "../../assets/factory.png";
import img2 from "../../assets/management.png";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function DashboardClient() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w 5"
        } duration-300 p-5 pt-8 h-screen bg-Blue  relative`}
      >
        <img
          src={image}
          className={`absolute cursor-pointer rounded-full -right-3  top-9 w-7 border-2 border-Blue ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x items-center">
          <img
            src={logoo}
            className={`cursor-pointer duration-500 right-3  ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-x1 duration-300 ${
              !open && "scale-0"
            }`}
          >
            Dashboard
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded- md `}
          >
            <img src={img1} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Factories
            </span>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded- md `}
          >
            <img src={img2} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Factories management
            </span>
          </li>
        </ul>
      </div>
      <div className="p-7 ">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardClient;
