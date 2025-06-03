import { motion } from "framer-motion";
import "./domain.css";

const DomainScroller = ({ images, from, to, duration }) => {
  return (
    <div className="scroller">
      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="scroller-inner"
      >
        {images.map((src, index) => (
          <img src={src} alt={`marquee-item-${index}`} key={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        className="scroller-inner"
      >
        {images.map((src, index) => (
          <img
            src={src}
            alt={`marquee-item-${index}-duplicate`}
            key={`dup-${index}`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default DomainScroller;
