// Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid container">
      <div className="footer-contact">
        <h2 className="footer-heading">Email :</h2>
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
            <a href="#" className="social-link">
              <FaFacebook className="icon facebook" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <FaTwitter className="icon twitter" />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/codingclubcitk?igsh=bXcxaW5qMzJkNGNw"
              className="social-link"
            >
              <FaInstagram className="icon instagram" />
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <FaGithub className="icon github" />
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
