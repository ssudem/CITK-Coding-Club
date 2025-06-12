import "./navbar.css";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import citklogo from "../../assets/citklogo.png"; // adjust the path as needed
import CClogo from "../../assets/CClogo.png"; // adjust the path as needed

import Image from "../Image/Image.jsx";
import placeholder from "../../assets/PlaceHolder/code-placeholder.webp";

function Navbar() {
  const menuRef = useRef();
  // Check if the current page is home
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isMobile, setIsMobile] = useState(false); // to toggle menu( mobile version)
  const [scrolled, setScrolled] = useState(false); // to change the header style on scroll

  function handleToggle() {
    setIsMobile(!isMobile);
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setIsMobile(false); // Close hamburger menu on scroll
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  return (
    <header
      className={
        isHome
          ? `${scrolled ? "scrolled" : ""} ${isMobile ? "active-nav" : ""}`
          : "scrolled"
      }
    >
      <div className="container">
        <div className="content">
          <div className="logo">
            <Image
              src={CClogo}
              placeholder={placeholder}
              alt={`CC`}
              lazy={true}
              blur={2}
            />
            <span>X</span>
            <Image
              src={citklogo}
              placeholder={placeholder}
              alt={`CITK`}
              lazy={true}
              blur={2}
            />
          </div>
          <nav
            ref={menuRef}
            className={isMobile ? "mobile-nav" : "desktop-nav"}
          >
            <ul className="nav-NavLinks">
              <li onClick={() => setIsMobile(false)}>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li onClick={() => setIsMobile(false)}>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  About
                </NavLink>
              </li>
              <li onClick={() => setIsMobile(false)}>
                <NavLink
                  to="/team"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Team
                </NavLink>
              </li>
              <li onClick={() => setIsMobile(false)}>
                <NavLink
                  to="/events"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Events
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="hem-menu">
            <button onClick={handleToggle}>
              {!isMobile ? <IoMenu /> : <RxCross1 />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
