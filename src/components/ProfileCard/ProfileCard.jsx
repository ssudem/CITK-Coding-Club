import React from "react";
import "./ProfileCard.css";

import {
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ProfileCard = ({ image, name, title, socialmedia }) => {
  return (
    <div className="card-container">
      <div className="profile-card">
        <div className="avatar-wrapper">
          <img src={image} alt="Image" className="avatar" />
        </div>
        <h2 className="name">{name}</h2>
        <p className="title">{title}</p>
        <div className="social-icons">
          {socialmedia.twitter !== "#" ? (
            <a href={socialmedia.twitter} target="_blank">
              <FaTwitter />
            </a>
          ) : null}
          {socialmedia.instagram !== "#" ? (
            <a href={socialmedia.instagram} target="_blank">
              <FaInstagram />
            </a>
          ) : null}
          {socialmedia.linkedin !== "#" ? (
            <a href={socialmedia.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          ) : null}
          {socialmedia.github !== "#" ? (
            <a href={socialmedia.github} target="_blank">
              <FaGithub />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
