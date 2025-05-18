import HomeImg from "../../assets/HomeImg.png";
import "./home.css"; // Import the CSS file for styling

import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Home() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/events"); // Navigate to the "/about" route
  }

  return (
    <section className="home-section">
      <div className="container home-container">
        <div className="welcome">
          <h1>Welcome to CITK Coding Club</h1>
          <p>
            Coding Club is one of the most active and prominent technical clubs
            at the Central Institute of Technology Kokrajhar. Functioning under
            the Institute Technical Council, our mission is to foster a thriving
            coding culture within the campus. We aim to provide students with
            the resources, mentorship, and collaborative environment needed to
            enhance their coding skills and become part of a broader developer
            community.
          </p>
          <span onClick={handleClick}>View Events &#8594;</span>
        </div>
        <div className="HomeImg">
          <img src={HomeImg} alt="Home" />
        </div>
      </div>
    </section>
  );
}
export default Home;
