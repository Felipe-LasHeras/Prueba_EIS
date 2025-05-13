import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { AboutUs } from "./screens/AboutUs";
import { Contact } from "./screens/Contact";
import { Gallery } from "./screens/Gallery";
import { Landing } from "./screens/Landing";
import { LandingMenu } from "./screens/LandingMenu";
import { Menu } from "./screens/Menu";
import FontTest from './components/FontTest';
import "./App.css";
import "./variables.css";

// Usamos createHashRouter en lugar de createBrowserRouter para GitHub Pages
const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/landing-menu",
    element: <LandingMenu />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/fonttest",
    element: <FontTest />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};