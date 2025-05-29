import "./ourdomain.css";
import languageImages from "./Imgdata.jsx";
import { useEffect } from "react";

const OurDomain = () => {
  // const prefersReducedMotion = window.matchMedia(
  //   "(prefers-reduced-motion: reduce)"
  // ).matches;

  const prefersReducedMotion = false; // force animation on

  const imagesToShow = prefersReducedMotion
    ? languageImages
    : [...languageImages, ...languageImages];

  const isMobile = window.innerWidth <= 768;
  // Split images into two halves if mobilr verson
  let firstHalf, secondHalf;
  if (isMobile) {
    const half = Math.ceil(imagesToShow.length / 2);
    firstHalf = prefersReducedMotion
      ? imagesToShow.slice(0, half)
      : imagesToShow.slice(0, Math.ceil(half / 2));
    secondHalf = prefersReducedMotion
      ? imagesToShow.slice(half)
      : imagesToShow.slice(Math.ceil(imagesToShow.length - half / 2));

    firstHalf = [...firstHalf, ...firstHalf];
    secondHalf = [...secondHalf, ...secondHalf];
  }

  return (
    <div className="ourdomain">
      <h1 style={{ textAlign: "center" }}>OUR DOMAIN</h1>
      <p>
        We cover most of the domain of programming like competitive programming,
        development related field, etc. We are making small teams on every
        domain so that we can grow in each and every domain.
      </p>
      {isMobile ? (
        <>
          <div
            className="scroller"
            data-direction="left"
            data-speed="slow"
            data-animated={!prefersReducedMotion ? "true" : "false"}
          >
            <div className="scroller__inner">
              {firstHalf.map((imgSrc, idx) => (
                <img
                  src={imgSrc}
                  alt={`language-top-${idx}`}
                  key={idx}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div
            className="scroller"
            data-direction="right"
            data-speed="slow"
            data-animated={!prefersReducedMotion ? "true" : "false"}
          >
            <div className="scroller__inner">
              {secondHalf.map((imgSrc, idx) => (
                <img
                  src={imgSrc}
                  alt={`language-bottom-${idx}`}
                  key={idx}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div
          className="scroller"
          data-direction="left"
          data-speed="slow"
          data-animated={!prefersReducedMotion ? "true" : "false"}
        >
          <div className="scroller__inner">
            {imagesToShow.map((imgSrc, idx) => (
              <img
                src={imgSrc}
                alt={`language-${idx}`}
                key={idx}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurDomain;
