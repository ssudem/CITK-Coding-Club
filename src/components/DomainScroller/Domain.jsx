import "./domain.css";
import DomainScroller from "./DomainScroller.jsx";
import languageImages from "./Imgdata.jsx";

const Domain = () => {
  const isMobile = window.innerWidth <= 768;

  let firstHalf, secondHalf, imagesToShow;
  if (isMobile) {
    // Split images into two halves if mobilr verson
    const half = Math.ceil(languageImages.length / 2);
    firstHalf = languageImages.slice(0, Math.ceil(half));
    secondHalf = languageImages.slice(half);
    firstHalf = [...firstHalf, ...firstHalf];
    secondHalf = [...secondHalf, ...secondHalf];
  } else {
    imagesToShow = languageImages;
  }

  return (
    <section className="ourdomain">
      <h1 style={{ textAlign: "center" }}>OUR DOMAIN</h1>
      <p>
        We cover most of the domain of programming like competitive programming,
        development related field, etc. We are making small teams on every
        domain so that we can grow in each and every domain.
      </p>
      {isMobile ? (
        <div className="domain-container">
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
        <div className="domain-container">
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
