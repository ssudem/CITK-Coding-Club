import "./home.css"; // Import the CSS file for styling
import HomeSlider from "../HomeSlider/HomeSlider.jsx";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useState, useEffect } from "react";
import HomePlaceHolder from "../../assets/HomeImg/V6.avif";

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/events"); // Navigate to the "/events" route
  }

  return (
    <section className="home-section">
      <div className="container home-container">
        <div className="welcome">
          <h1 data-aos="zoom-in-down" data-aos-duration="600">
            Welcome to CITK Coding Club
          </h1>
          <p data-aos="fade-down" data-aos-duration="800">
            Coding Club is one of the most active and prominent technical clubs
            at the Central Institute of Technology Kokrajhar. Our mission is to
            foster a thriving coding culture within the campus. We aim to
            provide students with the resources, mentorship, and collaborative
            environment needed to enhance their coding skills and become part of
            a broader developer community.
          </p>
          <button
            onClick={handleClick}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            View Events &#8594;
          </button>
        </div>
        <div className="HomeImg">
          <HomeSlider />
        </div>
      </div>
    </section>
  );
}

export default Home;
