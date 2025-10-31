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

import { useNavigate } from "react-router-dom";
import team from "../Team/teamdata.jsx";

function TeamSlider() {
  const year = "2024";
  const navigate = useNavigate();
  function handleClick() {
    navigate("/team");
  }

  return (
    <section className="home-team-section">
      <div className="home-team-container">
        <div className="member-heading">
          <h1 data-aos="zoom-in-right" data-aos-duration="800">
            TEAM MEMBERS {year}
          </h1>
          <button
            onClick={handleClick}
            data-aos="zoom-in-left"
            data-aos-duration="800"
          >
            View All
          </button>
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
          {team[year].map((member, idx) => (
            <SwiperSlide key={idx}>
              <ProfileCard {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TeamSlider;
