// import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/NavBar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Events from "./components/Events/Events.jsx";
import Team from "./components/Team/Team.jsx";
import TeamSlider from "./components/TeamSlider/TeamSlider.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OurDomain from "./components/DomainScroller/Domain.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
function AOSsetup() {
  const timeout = setTimeout(() => {
    AOS.init({
      once: false,
      // Disable AOS on mobile device
      // disable: function () {
      //   return window.innerWidth < 600;
      // },
    });
  }, 200);

  return () => clearTimeout(timeout);
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ScrollToTop />
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
        <Navbar />
        <ScrollToTop />
        <AboutUs isTeam={true} />
        <Footer />
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <Navbar />
        <ScrollToTop />
        <Events />
        <Footer />
      </>
    ),
  },
  {
    path: "/team",
    element: (
      <>
        <Navbar />
        <ScrollToTop />
        <Team />
        <Footer />
      </>
    ),
  },
]);

function App() {
  useEffect(() => {
    AOSsetup();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
