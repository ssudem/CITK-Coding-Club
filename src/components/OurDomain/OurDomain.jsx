import "./ourdomain.css";
import languageImages from "./Imgdata.jsx";

import Image from "../Image/Image.jsx";
import codePlaceHolder from "../../assets/PlaceHolder/code-placeholder.webp";

const OurDomain = () => {
  const isTablet = window.innerWidth <= 768;
  const isMobile = window.innerWidth <= 400;

  let firstHalf, secondHalf, imagesToShow;
  if (isMobile) {
    // Split images into two halves if mobilr verson
    const half = Math.ceil(languageImages.length / 2);
    firstHalf = languageImages.slice(0, Math.ceil(half));
    secondHalf = languageImages.slice(half);

    firstHalf = [...firstHalf, ...firstHalf];
    secondHalf = [...secondHalf, ...secondHalf];
  } else if (isTablet) {
    const half = Math.ceil(languageImages.length / 2);
    firstHalf = languageImages.slice(0, Math.ceil(half));
    secondHalf = languageImages.slice(half);

    firstHalf = [...firstHalf, ...firstHalf, ...firstHalf];
    secondHalf = [...secondHalf, ...secondHalf, ...secondHalf];
  } else {
    imagesToShow = [...languageImages, ...languageImages];
  }

  return (
    <div className="ourdomain">
      <h1 style={{ textAlign: "center" }}>OUR DOMAIN</h1>
      <p>
        We cover most of the domain of programming like competitive programming,
        development related field, etc. We are making small teams on every
        domain so that we can grow in each and every domain.
      </p>
      {isMobile || isTablet ? (
        <>
          <div
            className="scroller"
            data-direction="left"
            data-speed="slow"
            data-animated="true"
          >
            <div className="scroller__inner">
              {firstHalf.map((imgSrc, idx) => (
                <Image
                  key={`firstHalf-${idx}`}
                  src={imgSrc}
                  placeholder={codePlaceHolder}
                  alt={`language-top-${idx}`}
                  lazy={true}
                />
              ))}
            </div>
          </div>
          <div
            className="scroller"
            data-direction="right"
            data-speed="slow"
            data-animated="true"
          >
            <div className="scroller__inner">
              {secondHalf.map((imgSrc, idx) => (
                <Image
                  key={`secondHalf-${idx}`}
                  src={imgSrc}
                  placeholder={codePlaceHolder}
                  alt={`language-top-${idx}`}
                  lazy={true}
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
          data-animated="true"
        >
          <div className="scroller__inner">
            {imagesToShow.map((imgSrc, idx) => (
              <Image
                key={`image-${idx}`}
                src={imgSrc}
                placeholder={codePlaceHolder}
                alt={`language-top-${idx}`}
                lazy={true}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurDomain;
