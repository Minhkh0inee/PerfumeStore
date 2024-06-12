import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignIn from "./pages/SignIn.tsx";
import Home from "./pages/Home";
import Layout from "./layout/Layout.tsx";
import PerfumeList from "./pages/PerfumeList.tsx";
import PerfumeDetail from "./pages/PerfumeDetail.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/perfumes",
        element: <PerfumeList />,
      },
      {
        path: "/perfumes/:id",
        element: <PerfumeDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="521258517011-asm9n69qm719nfnsr0qv48vnl990cnnl.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
