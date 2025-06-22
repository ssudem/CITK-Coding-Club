import "./home.css";
import HomeSlider from "../HomeSlider/HomeSlider.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePlaceHolder from "../../assets/HomeImg/V6.avif";

function Home() {
  const navigate = useNavigate();
  const [sliderLoaded, setSliderLoaded] = useState(false);

  // Simulate HomeSlider loading (replace with actual event if available)
  useEffect(() => {
    const timer = setTimeout(() => setSliderLoaded(true), 900); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  function handleClick() {
    navigate("/events");
  }

  return (
    <section className="home-section">
      <div className="container home-container">
        <div className="welcome">
          <h1 data-aos="zoom-in-down" data-aos-duration="600">
            Welcome to CITK Coding Club
          </h1>
          <p data-aos="fade-down" data-aos-duration="1000">
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
        <div className="HomeImg" data-aos="fade-down" data-aos-duration="1000">
          {!sliderLoaded ? (
            <img src={HomePlaceHolder} alt="Loading..." />
          ) : (
            <HomeSlider />
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
