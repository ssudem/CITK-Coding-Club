import aboutImg from "../../assets/AboutImg.webp";
import "./aboutus.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function AboutUs(props) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/team"); // Navigate to the "/about" route
  }
  return (
    <section className="about-section" id="about-section">
      <div className="container about-container">
        <div className="about">
          <h1>About Us</h1>
          <p>
            Everyone should learn programming because it teaches you how to
            think. As the Coding Club of a technical institution, we host coding
            events, workshops, contests, and mentorship sessions. We believe
            coding, like poetry, should be short and concise. Our mission is to
            foster a strong coding culture and provide a collaborative space for
            learning. Recent initiatives include specialized groups in
            competitive programming, development, and machine learning, as well
            as a mentorship program for freshers. We aim to carry this momentum
            forward.
          </p>
          {props.isTeam ? (
            <button onClick={handleClick}>View Team &#8594;</button>
          ) : null}
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
