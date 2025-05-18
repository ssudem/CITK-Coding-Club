// Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-contact">
        <h2 className="footer-heading">Email:</h2>
        <p className="footer-text">codingclubcitk@gmail.com</p>

        <h2 className="footer-heading">Address :</h2>
        <p className="footer-text">
          Central Institute Of Technology Kokrajhar, Balagaon, 783370 Assam,
          India
        </p>
      </div>

      <div className="footer-social">
        <h2 className="footer-heading">Follow Us</h2>
        <ul className="social-icons">
          <li>
            <FaFacebook className="icon facebook" />
            <a href="#" className="social-link">
              Facebook
            </a>
          </li>
          <li>
            <FaTwitter className="icon twitter" />
            <a href="#" className="social-link">
              Twitter
            </a>
          </li>
          <li>
            <FaInstagram className="icon instagram" />
            <a
              href="https://www.instagram.com/codingclubcitk?igsh=bXcxaW5qMzJkNGNw"
              className="social-link"
            >
              Instagram
            </a>
          </li>
          <li>
            <FaGithub className="icon github" />
            <a href="#" className="social-link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>©2025 Developed & Maintained by CodingClub X CITK.</p>
    </div>
  </footer>
);

export default Footer;
