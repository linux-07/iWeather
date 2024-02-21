import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Home from "./components/Home";


function App() {
  const routes = [
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    }
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router} />
  );
}

export default App;