import "./home.css";
import HomeSlider from "../HomeSlider/HomeSlider.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const isMobileView = window.innerWidth <= 768; // Check if the view is mobile
  const delay = isMobileView ? 600 : 1000;
  const navigate = useNavigate();

  function handleClick() {
    navigate("/events");
  }

  return (
    <section className="home-section">
      <div className="container home-container">
        <div className="welcome">
          <h1
            data-aos={isMobileView ? "fade-down" : "zoom-out-down"}
            data-aos-duration="700"
          >
            Welcome to CITK Coding Club
          </h1>
          <p
            data-aos={isMobileView ? "fade-left" : "fade-down"}
            data-aos-duration={delay}
          >
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
            data-aos-duration={delay}
          >
            View Events &#8594;
          </button>
        </div>
        <div
          className="HomeImg"
          data-aos={isMobileView ? "fade-right" : "fade-down"}
          data-aos-duration={delay}
        >
          <HomeSlider />
        </div>
      </div>
    </section>
  );
}

export default Home;
