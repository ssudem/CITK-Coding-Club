// import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import Footer from "./components/Footer/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Home />
        <OurDomain />
        <AboutUs isTeam={false} />
        <TeamSlider />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <AboutUs isTeam={true} />
        <Footer />
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Events />
        <Footer />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <ScrollToTop />
        <Navbar />
        <Team />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
