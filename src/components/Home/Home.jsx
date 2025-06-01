import "./home.css"; // Import the CSS file for styling
import HomeSlider from "../HomeSlider/HomeSlider.jsx";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { useState, useEffect } from "react";
import HomePlaceHolder from "../../assets/HomeImg/V6.avif";

function Home() {
  const navigate = useNavigate();
  const [isSliderLoaded, setIsSliderLoaded] = useState(false); // State to track slider loading

  function handleClick() {
    navigate("/events"); // Navigate to the "/events" route
  }

  useEffect(() => {
    // Simulate slider loading (replace with actual logic if needed)
    const timer = setTimeout(() => {
      setIsSliderLoaded(true); // Set slider as loaded after a delay
    }, 200); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <section className="home-section">
      <div className="container home-container">
        <div className="welcome">
          <h1>Welcome to CITK Coding Club</h1>
          <p>
            Coding Club is one of the most active and prominent technical clubs
            at the Central Institute of Technology Kokrajhar. Our mission is to
            foster a thriving coding culture within the campus. We aim to
            provide students with the resources, mentorship, and collaborative
            environment needed to enhance their coding skills and become part of
            a broader developer community.
          </p>
          <button onClick={handleClick}>View Events &#8594;</button>
        </div>
        <div className="HomeImg">
          {isSliderLoaded ? (
            <HomeSlider />
          ) : (
            <img src={HomePlaceHolder} alt="Loading..." />
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
