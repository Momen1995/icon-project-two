import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home.jsx';
import Classic from './Components/Classic/Classic.jsx';
import Sharp from './Components/Sharp/Sharp.jsx';
import Brands from './Components/Brands/Brands.jsx';
import Solid from './Components/Solid/Solid.jsx';
import Regular from './Components/Regular/Regular.jsx';
import Thin from './Components/Thin/Thin.jsx';
import Lights from './Components/Lights/Lights.jsx';
import Alerts from './Components/Alerts/Alerts.jsx';
import Albhabets from './Components/Alphabets/Albhabets.jsx';
import Communications from './Components/Communications/Communications.jsx';
import Businesses from './Components/Businesses/Businesses.jsx';
import Maps from './Components/Maps/Maps.jsx';
import Socials from './Components/Socials/Socials.jsx';
import Roomys from './Components/Roomys/Roomys.jsx';
import Compacts from './Components/Compacts/Compacts.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Input from './Components/Input/Input.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "classic",
        loader: () => fetch("icons.json"),
        element: <Classic></Classic>,
      },
      {
        path: "input",
        loader: () => fetch("icons.json"),
        element: <Input></Input>,
      },
      {
        path: "sharp",
        loader: () => fetch("icons.json"),
        element: <Sharp></Sharp>,
      },
      {
        path: "brand",
        loader: () => fetch("icons.json"),
        element: <Brands></Brands>,
      },
      {
        path: "roomy",
        loader: () => fetch("icons.json"),
        element: <Roomys></Roomys>,
      },
      {
        path: "compact",
        loader: () => fetch("icons.json"),
        element: <Compacts></Compacts>,
      },
      {
        path: "solid",
        loader: () => fetch("icons.json"),
        element: <Solid></Solid>,
      },
      {
        path: "regular",
        loader: () => fetch("icons.json"),
        element: <Regular></Regular>,
      },
      {
        path: "thin",
        loader: () => fetch("icons.json"),
        element: <Thin></Thin>,
      },
      {
        path: "light",
        loader: () => fetch("icons.json"),
        element: <Lights></Lights>,
      },
      {
        path: "alert",
        loader: () => fetch("icons.json"),
        element: <Alerts></Alerts>,
      },
      {
        path: "alphabet",
        loader: () => fetch("icons.json"),
        element: <Albhabets></Albhabets>,
      },
      {
        path: "communication",
        loader: () => fetch("icons.json"),
        element: <Communications></Communications>,
      },
      {
        path: "business",
        loader: () => fetch("icons.json"),
        element: <Businesses></Businesses>,
      },
      {
        path: "map",
        loader: () => fetch("icons.json"),
        element: <Maps></Maps>,
      },
      {
        path: "social",
        loader: () => fetch("icons.json"),
        element: <Socials></Socials>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
