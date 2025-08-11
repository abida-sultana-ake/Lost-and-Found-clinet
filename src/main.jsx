import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import PostLost from "./pages/PostLost";
import PostFound from "./pages/PostFound";
import AllItems from "./pages/AllItems";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "post-lost",
        Component: PostLost,
      },
      {
        path: "post-found",
        Component: PostFound,
      },
      {
        path: "all-items",
        Component: AllItems,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
