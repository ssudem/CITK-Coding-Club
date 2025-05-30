import { useEffect, useRef, useState } from "react";

const Image = ({
  src,
  placeholder,
  alt = "",
  style = {},
  lazy = true,
  ...rest
}) => {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(!lazy); // assume loaded if not lazy

  useEffect(() => {
    const img = imgRef.current;
    if (!img || !lazy) return;

    const handleLoad = () => setLoaded(true);

    if ("loading" in HTMLImageElement.prototype) {
      img.src = src;
    }

    img.addEventListener("load", handleLoad);
    return () => img.removeEventListener("load", handleLoad);
  }, [src, lazy]);

  const lazyStyle = lazy
    ? {
        filter: loaded ? "none" : "blur(10px)",
        transition: "filter 0.3s ease",
      }
    : {};

  return (
    <img
      ref={imgRef}
      src={lazy ? placeholder : src}
      data-src={lazy ? src : undefined}
      alt={alt}
      loading={lazy ? "lazy" : undefined}
      style={{ ...style, ...lazyStyle }}
      {...rest}
    />
  );
};

export default Image;
