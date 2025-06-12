import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "./homesilder.css";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import homeImages from "./HomeImgData.jsx";
import Image from "../Image/Image.jsx";
import placeholder from "../../assets/PlaceHolder/code-placeholder.webp";

export default function HomeSlider() {
  const [reverse, setReverse] = useState(false);
  const swiperRef = useRef(null);

  const isMobile = window.innerWidth <= 768;
  const cubeEffectProps = {
    shadow: false,
    slideShadows: false,
    shadowOffset: isMobile ? 10 : 20,
    shadowScale: isMobile ? 0.8 : 0.98,
  };

  return (
    <div className="cube-img-container">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={false}
        initialSlide={Math.floor(homeImages.length / 2)} // Start at middle slide
        cubeEffect={cubeEffectProps}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setReverse(true);
            swiper.autoplay.stop();
            setTimeout(() => {
              swiper.autoplay.start();
            }, 4000);
          } else if (swiper.isBeginning) {
            setReverse(false);
            swiper.autoplay.stop();
            setTimeout(() => {
              swiper.autoplay.start();
            }, 4000);
          }
        }}
      >
        {homeImages.map((imgSrc, idx) => (
          <SwiperSlide key={idx}>
            <div className="image-div">
              {/* <img src={imgSrc} alt={`slide-${idx}`} /> */}
              <Image
                src={imgSrc}
                placeholder={placeholder}
                alt={`slide-${idx}`}
                lazy={true}
                blur={2}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
