
import "./aboutus.css";
import { useNavigate } from "react-router-dom";

import Image from "../Image/Image.jsx";
import placeholder from "../../assets/PlaceHolder/img-placeholder.avif";

import AboutImages from "./AboutImgData.jsx";

function AboutUs(props) {
  const isMobileView = window.innerWidth <= 768; // Check if the view is mobile
  const aboutImg = AboutImages[Math.floor(Math.random() * AboutImages.length)];
  const navigate = useNavigate();
  function handleClick() {
    navigate("/team"); // Navigate to the "/team" route
  }

  return (
    <section className="about-section">
      <div className="container about-container">
        <div
          className="about-img"
          data-aos="fade-right"
          data-aos-duration={!isMobileView ? "800" : "500"}
        >
          <Image
            src={aboutImg}
            placeholder={placeholder}
            alt="About Us"
            lazy={true}
          />
        </div>
        <div className="about">
          <h1
            data-aos="fade-down"
            data-aos-duration={!isMobileView ? "800" : "500"}
          >
            About Us
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration={!isMobileView ? "800" : "500"}
          >
            Programming teaches valuable problem-solving skills, making it a
            skill everyone should learn. As the Coding Club of a technical
            institution, we organize coding events, workshops, contests, and
            mentorship sessions to build a vibrant coding community. We believe
            code, like poetry, should be elegant and concise. Our mission is to
            nurture a strong coding culture and create a collaborative
            environment for learning and growth. Recent initiatives include
            dedicated groups for competitive programming, development, and
            machine learning, along with a mentorship program to support
            newcomers. We are committed to carrying this momentum forward.
          </p>
          {props.isTeam ? (
            <button
              onClick={handleClick}
              {...(!isMobileView
                ? { "data-aos": "fade-right", "data-aos-duration": "800" }
                : null)}
            >
              View Team &#8594;
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
