import aboutImg from "../../assets/AboutImg.png";
import "./aboutus.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function AboutUs() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/team"); // Navigate to the "/about" route
  }
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about">
          <h1>About Us</h1>
          <p>
            Everybody should learn to program a computer because it teaches you
            how to think. Being Coding Club of a technical institution, we do
            each and every stuff related to coding. Coding events, Workshops,
            Query sessions, contests are just to name a few. We believe in "
            Coding like poetry should be short and concise. Spreading knowledge
            and growing of competitive coding culture is at the root of the
            existence of this club. We provide a mutual helping platform for the
            students and guide them in their journey of programming." Some great
            initiatives were taken by the current secretaries, including the
            formation of smaller groups focussed on specific areas (competitive
            programming group, development group and machine learning group) and
            the fresher's mentorship program. We hope that we are able to take
            this momentum forward.
          </p>
          <span onClick={handleClick}>View Team &#8594; </span>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
