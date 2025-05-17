// import { useState } from "react";

import { BrowserRouter, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";

import Navbar from "./components/NavBar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Events from "./components/Events/Events.jsx";
import Team from "./components/Team/Team.jsx";
import OurDomain from "./components/OurDomain/OurDomain.jsx";
import TeamSlider from "./components/TeamSlider/TeamSlider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <OurDomain />
        {/* <AboutUs /> */}
        <TeamSlider />
        {/* <Team /> */}
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <Navbar />
        <Events />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Navbar />
        <Team />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Team /> */}
    </>
  );
}

export default App;
