// import React, { useEffect } from "react";
// import "./ourdomain.css"; // Keep the CSS in a separate file
// import languageImages from "./Imgdata.jsx"; // Adjust the path as needed

// const OurDomain = () => {
//   useEffect(() => {
//     if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       addAnimation();
//     }

//     function addAnimation() {
//       const scrollers = document.querySelectorAll(".scroller");

//       scrollers.forEach((scroller) => {
//         scroller.setAttribute("data-animated", "true");

//         const scrollerInner = scroller.querySelector(".scroller__inner");
//         const scrollerContent = Array.from(scrollerInner.children);

//         scrollerContent.forEach((item) => {
//           const duplicatedItem = item.cloneNode(true);
//           duplicatedItem.setAttribute("aria-hidden", true);
//           scrollerInner.appendChild(duplicatedItem);
//         });
//       });
//     }
//   }, []);

//   return (
//     <div className="ourdomain">
//       <h1 style={{ textAlign: "center" }}>OUR DOMAIN</h1>
//       <p>
//         We cover most of the domain of programming like competitive programming,
//         devlopment related field, etc.We are making small teams on every domain
//         so that we can grow in each and every domain.
//       </p>
//       <div className="scroller" data-direction="left" data-speed="slow">
//         <div className="scroller__inner">
//           {languageImages.map((imgSrc, idx) => (
//             <img src={imgSrc} alt={`language-${idx}`} key={idx} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default OurDomain;

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
