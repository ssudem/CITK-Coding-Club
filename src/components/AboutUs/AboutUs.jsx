import aboutImg from "../../assets/AboutImg.webp";
import "./aboutus.css";
import { useNavigate } from "react-router-dom";

import Image from "../Image/Image.jsx";
import placeholder from "../../assets/PlaceHolder/img-placeholder.avif";

function AboutUs(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/team"); // Navigate to the "/team" route
  }
  return (
    <section className="about-section" id="about-section">
      <div className="container about-container">
        <div className="about">
          <h1>About Us</h1>
          <p>
            Programming teaches valuable problem-solving skills, making it a
            skill everyone should learn. As the Coding Club of a technical
            institution, we organize coding events, workshops, contests, and
            mentorship sessions to build a vibrant coding community. We believe
            code, like poetry, should be elegant and concise. Our mission is to
            nurture a strong coding culture and create a collaborative
            environment for learning and growth. Recent initiatives include
            dedicated groups for competitive programming, development, and
            machine learning, along with a mentorship program to support
            newcomers. We’re committed to carrying this momentum forward.
          </p>
          {props.isTeam ? (
            <button onClick={handleClick}>View Team &#8594;</button>
          ) : null}
        </div>
        <div className="about-img">
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
