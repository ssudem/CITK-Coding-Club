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
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
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
    setTimeout(() => AOS.init({ once: true }), 400);
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
