import "./navbar.css";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import citklogo from "../../assets/citklogo.png"; // adjust the path as needed
import CClogo from "../../assets/CClogo.png"; // adjust the path as needed

import Image from "../Image/Image.jsx";
import placeholder from "../../assets/PlaceHolder/code-placeholder.avif";

function Navbar() {
  const menuRef = useRef();
  const navigate = useNavigate();
  // Check if the current page is home
  const location = useLocation();
  const isHome = location.pathname === "/";
  function handleLogoClick() {
    if (!isHome) {
      navigate("/");
    }
  }

  const isMobileView = window.innerWidth <= 768; // Check if the view is mobile

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
          <div
            className="logo"
            {...(!isMobileView
              ? { "data-aos": "fade-down", "data-aos-duration": "600" }
              : null)}
          >
            <Image
              onClick={handleLogoClick}
              src={CClogo}
              placeholder={placeholder}
              alt={`CC`}
              lazy={true}
              blur={1}
            />
          </div>
          <nav
            ref={menuRef}
            className={isMobile ? "mobile-nav" : "desktop-nav"}
          >
            <ul className="nav-NavLinks">
              {["", "about", "team", "events"].map((item, index) => (
                <li
                  key={index}
                  onClick={() => setIsMobile(false)}
                  {...(!isMobileView
                    ? {
                        "data-aos": "fade-down",
                        "data-aos-duration": `${800 + index * 200}`,
                      }
                    : { className: `${item === "" ? "Home" : item}link` })}
                >
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? "active-link" : null
                    }
                  >
                    {item === "" ? "Home" : item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hem-menu">
            <button>
              {!isMobile ? (
                <IoMenu onClick={handleToggle} />
              ) : (
                <RxCross1 onClick={handleToggle} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
