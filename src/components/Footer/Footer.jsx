// Footer.jsx
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "./footer.css";

function Footer() {
  const clubEmail = "codingclubcitk@gmail.com";
  const citkLoaction =
    "https://www.google.com/maps/place/Central+Institute+of+Technology,+Kokrajhar/@26.4781091,90.3022867,17.75z/data=!4m6!3m5!1s0x3758f4d277d13e8d:0x233749495bfdb465!8m2!3d26.4780512!4d90.3026385!16s%2Fm%2F0w7kllw?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D";
  return (
    <footer className="footer">
      <div className="footer-grid container">
        <div className="footer-contact">
          <h2 className="footer-heading">
            <span>Email : </span>
            <li>
              {(() => {
                const isMobile = /iPhone|iPad|Android/i.test(
                  navigator.userAgent
                );
                const emailHref = isMobile
                  ? `mailto:${clubEmail}`
                  : `https://mail.google.com/mail/?view=cm&to=${clubEmail}`;
                return (
                  <a
                    href={emailHref}
                    target={isMobile ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope />
                  </a>
                );
              })()}
            </li>
          </h2>
          <p className="footer-text">codingclubcitk@gmail.com</p>

          <h2 className="footer-heading">
            <span> Address : </span>
            <li>
              <a href={citkLoaction} target="_blank">
                <IoLocationSharp />
              </a>
            </li>
          </h2>
          <p className="footer-text">
            Central Institute Of Technology Kokrajhar, Balagaon, 783370 Assam,
            India
          </p>
        </div>

        <div className="footer-social">
          <h2>Follow Us</h2>
          <ul className="social-icon">
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
                target="_blank"
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
}

export default Footer;
