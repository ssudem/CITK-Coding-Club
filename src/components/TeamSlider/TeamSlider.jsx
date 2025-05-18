import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
import "swiper/css/navigation";

import "./teamslider.css";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import ProfileCard from "../ProfileCard/ProfileCard.jsx";
import sudem from "../../assets/PeopleImg/sudem.jpeg";

import { useNavigate } from "react-router-dom";

export default function TeamSlider() {
  const year = "2023";
  const navigate = useNavigate();
  function handleClick() {
    navigate("/team"); // Navigate to the "/about" route
  }
  return (
    <>
      <section className="home-team-section">
        <div className="container home-team-container">
          <div className="member-heading">
            <h1>TEAM MEMBERS {year}</h1>
            <button onClick={handleClick}>View All</button>
          </div>
          <Swiper
            effect={"coverflow"}
            watchSlidesProgress={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            coverflowEffect={{
              rotate: 60,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
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
    </>
  );
}
