import React from "react";
import "./ProfileCard.css";

import Image from "../Image/Image.jsx";
// import personPlaceHolder from "../../assets/PlaceHolder/person-placeholder.avif";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const ProfileCard = ({
  image,
  name,
  title,
  socialmedia,
  personPlaceHolder,
}) => {
  return (
    <div className="card-container" data-aos="zoom-in">
      <div className="profile-card">
        <div className="avatar-wrapper">
          {/* <img src={image} alt="Image" loading="lazy" className="avatar" /> */}
          <Image
            className="avatar"
            src={image}
            placeholder={personPlaceHolder}
            alt="Image"
            lazy={true}
            blur={3}
          />
        </div>
        <h2 className="name">{name}</h2>
        <p className="title">{title}</p>
        <div className="social-icons">
          {socialmedia.twitter && socialmedia.twitter !== "#" ? (
            <a href={socialmedia.twitter} target="_blank">
              <FaTwitter />
            </a>
          ) : null}
          {socialmedia.instagram && socialmedia.instagram !== "#" ? (
            <a href={socialmedia.instagram} target="_blank">
              <FaInstagram />
            </a>
          ) : null}
          {socialmedia.linkedin && socialmedia.linkedin !== "#" ? (
            <a href={socialmedia.linkedin} target="_blank">
              <FaLinkedin />
            </a>
          ) : null}
          {socialmedia.github && socialmedia.github !== "#" ? (
            <a href={socialmedia.github} target="_blank">
              <FaGithub />
            </a>
          ) : null}
          {socialmedia.gmail && socialmedia.gmail !== "#"
            ? (() => {
                const isMobile = /iPhone|iPad|Android/i.test(
                  navigator.userAgent
                );
                const emailHref = isMobile
                  ? `mailto:${socialmedia.gmail}`
                  : `https://mail.google.com/mail/?view=cm&to=${socialmedia.gmail}`;
                return (
                  <a
                    href={emailHref}
                    target={isMobile ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope />
                  </a>
                );
              })()
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
