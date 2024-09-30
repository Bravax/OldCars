import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App";
import Events from "./pages/Events";
import LegendaryCars from "./pages/LegendaryCars";
import Renovation from "./pages/Renovation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Events",
    element: <Events/>
  },
  {
    path: "/LegendaryCars",
    element: <LegendaryCars/>
  },
  {
    path: "/Renovation",
    element: <Renovation/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
