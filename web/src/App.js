import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import {
  FactoriesManagement,
  DashboardClient,
  Factories,
  Login,
  Machines,
} from "./components";
import { Registre } from "./components/Registre";
import { generateAxiosInstance } from "./utils/AxiosInstance";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
generateAxiosInstance();
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <DashboardClient />,
      children: [
        {
          path: "/factories",
          element: <Factories />,
        },
        {
          path: "/factoriesmanagement",
          element: <FactoriesManagement />,
        },
      ],
    },
    {
      path: "/machines",
      element: <Machines />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
