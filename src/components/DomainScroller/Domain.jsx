import "./domain.css";
import DomainScroller from "./DomainScroller.jsx";
import languageImages from "./Imgdata.jsx";

// Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const Domain = () => {
  const isMobile = window.innerWidth <= 768;

  // Shuffle the images once per render
  const shuffledImages = shuffleArray(languageImages);

  let firstHalf, secondHalf, imagesToShow;
  if (isMobile) {
    const half = Math.ceil(shuffledImages.length / 2);
    firstHalf = shuffledImages.slice(0, Math.ceil(half));
    secondHalf = shuffledImages.slice(half);
    firstHalf = [...firstHalf, ...firstHalf];
    secondHalf = [...secondHalf, ...secondHalf];
  } else {
    imagesToShow = shuffledImages;
  }

  return (
    <section className="ourdomain">
      <h1 data-aos="zoom-in-down" style={{ textAlign: "center" }}>
        OUR DOMAIN
      </h1>
      <p data-aos="zoom-in-down">
        We cover most of the domain of programming like competitive programming,
        development related field, etc. We are making small teams on every
        domain so that we can grow in each and every domain.
      </p>
      {isMobile ? (
        <div
          className="domain-container"
          data-aos="zoom-in-down"
          data-aos-duration="500"
        >
          <DomainScroller
            images={firstHalf}
            from="0"
            to="-100%"
            duration={30}
          />
          <DomainScroller
            images={secondHalf}
            from="-100%"
            to="0"
            duration={30}
          />
        </div>
      ) : (
        <div
          className="domain-container"
          data-aos="zoom-in-down"
          data-aos-duration="800"
        >
          <DomainScroller
            images={imagesToShow}
            from="0"
            to="-100%"
            duration={40}
          />
        </div>
      )}
    </section>
  );
};

export default Domain;
