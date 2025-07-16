import React, { useState, useRef, useMemo } from "react";
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

  const shuffledImages = useMemo(() => {
    const arr = [...homeImages];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

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
        {shuffledImages.map((imgSrc, idx) => (
          <SwiperSlide>
            <div className="image-div">
              <Image
                src={imgSrc}
                placeholder={placeholder}
                alt={`slide-${idx}`}
                lazy={true}
                blur={0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
