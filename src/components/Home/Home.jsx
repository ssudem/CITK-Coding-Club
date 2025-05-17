import HomeImg from "../../assets/HomeImg.png";
import "./home.css"; // Import the CSS file for styling

function Home() {
  return (
    <section className="home-section">
      <div className="container home-container">
        <div className="welcome">
          <h1>Welcome to CITK Coding Club</h1>
          <p>
            We are a community of web developers who are passionate about
            creating amazing web applications. Join us to learn, share, and grow
            together!
          </p>
        </div>
        <div className="HomeImg">
          <img src={HomeImg} alt="Home" />
        </div>
      </div>
    </section>
  );
}
export default Home;
