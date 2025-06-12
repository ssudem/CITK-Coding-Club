import aboutImg from "../../assets/AboutImg.webp";
import "./aboutus.css";
import { useNavigate } from "react-router-dom";

import Image from "../Image/Image.jsx";
import placeholder from "../../assets/PlaceHolder/img-placeholder.avif";

function AboutUs(props) {
  const isMobile = window.innerWidth < 600; // Check if the screen width is less than 600px

  const navigate = useNavigate();
  function handleClick() {
    navigate("/team"); // Navigate to the "/team" route
  }

  const aboutText = `Programming teaches valuable problem-solving skills, making it a
            skill everyone should learn. As the Coding Club of a technical
            institution, we organize coding events, workshops, contests, and
            mentorship sessions to build a vibrant coding community. We believe
            code, like poetry, should be elegant and concise. Our mission is to
            nurture a strong coding culture and create a collaborative
            environment for learning and growth. Recent initiatives include
            dedicated groups for competitive programming, development, and
            machine learning, along with a mentorship program to support
            newcomers. We are committed to carrying this momentum forward.`;

  return (
    <section className="about-section" id="about-section">
      <div className="container about-container">
        <div className="about">
          {!isMobile || props.isTeam ? (
            <>
              <h1 data-aos="fade-down" data-aos-duration="800">
                About Us
              </h1>
              <p data-aos="fade-left" data-aos-duration="800">
                {aboutText}
              </p>
            </>
          ) : (
            <>
              <h1>About Us</h1>
              <p>{aboutText}</p>
            </>
          )}
          {props.isTeam ? (
            <button
              onClick={handleClick}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              View Team &#8594;
            </button>
          ) : null}
        </div>
        <div
          className="about-img"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image
            src={aboutImg}
            placeholder={placeholder}
            alt="About Us"
            lazy={true}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
