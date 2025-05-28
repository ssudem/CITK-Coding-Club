
import "./ourdomain.css";
import languageImages from "./Imgdata.jsx";

const OurDomain = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const imagesToShow = prefersReducedMotion
    ? languageImages
    : [...languageImages, ...languageImages];

  return (
    <div className="ourdomain">
      <h1 style={{ textAlign: "center" }}>OUR DOMAIN</h1>
      <p>
        We cover most of the domain of programming like competitive programming,
        development related field, etc. We are making small teams on every
        domain so that we can grow in each and every domain.
      </p>
      <div
        className="scroller"
        data-direction="left"
        data-speed="slow"
        data-animated={!prefersReducedMotion}
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
    </div>
  );
};

export default OurDomain;
