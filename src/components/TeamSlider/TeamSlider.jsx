import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./teamslider.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import sudem from "../../assets/PeopleImg/sudem.jpeg";

import { useNavigate } from "react-router-dom";

function TeamSlider() {
  const year = "2023";
  const navigate = useNavigate();
  function handleClick() {
    navigate("/team"); // Navigate to the "/about" route
  }
  return (
    <section className="home-team-section">
      <div className="container home-team-container">
        <div className="member-heading">
          <h1>TEAM MEMBERS {year}</h1>
          <button onClick={handleClick}>View All</button>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProfileCard
              // key={member.name + index}
              image={sudem}
              name={"sudem narzary"}
              title={"web developer"}
              socialmedia={{
                instagram: "https://www.instagram.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com",
                github: "https://www.github.com",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              // key={member.name + index}
              image={sudem}
              name={"sudem narzary"}
              title={"web developer"}
              socialmedia={{
                instagram: "https://www.instagram.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com",
                github: "https://www.github.com",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              // key={member.name + index}
              image={sudem}
              name={"sudem narzary"}
              title={"web developer"}
              socialmedia={{
                instagram: "https://www.instagram.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com",
                github: "https://www.github.com",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              // key={member.name + index}
              image={sudem}
              name={"sudem narzary"}
              title={"web developer"}
              socialmedia={{
                instagram: "https://www.instagram.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com",
                github: "https://www.github.com",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProfileCard
              // key={member.name + index}
              image={sudem}
              name={"sudem narzary"}
              title={"web developer"}
              socialmedia={{
                instagram: "https://www.instagram.com",
                twitter: "https://www.twitter.com",
                linkedin: "https://www.linkedin.com",
                github: "https://www.github.com",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default TeamSlider;
