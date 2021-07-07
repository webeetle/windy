import React, { useState, useEffect } from "react";

import { generateRounded, generateShadow } from "../../Utils/Utils";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme, WindyProvider } from "../../context.jsx";

const Carousel = (carouselProps) => {
  const {
    state: { carousel = {} },
  } = useWindyTheme();

  const {
    images = [],
    onNext = () => null,
    onPrevious = () => null,
    rounded = carousel.rounded,
    color = carousel.color,
    getCurentIndex = () => null,
    className = "",
    ...props
  } = carouselProps;

  const [currentImage, setCurrentImage] = useState(0);
  const refs = images.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  useEffect(() => {
    getCurentIndex(currentImage);
  }, [currentImage]);

  const scrollToImage = (i) => {
    setCurrentImage(i);
    refs[i].current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const totalImages = images.length;
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
      onNext();
    } else {
      scrollToImage(currentImage + 1);
      onNext();
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
      onPrevious();
    } else {
      scrollToImage(currentImage - 1);
      onPrevious();
    }
  };

  const generateArrowColor = () => {
    switch (color) {
      case "gray":
        return {
          "bg-gray-500 text-white": color === "gray",
        };
      case "red":
        return {
          "bg-red-500 text-white": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-500 text-white": color === "yellow",
        };
      case "green":
        return {
          "bg-green-500 text-white": color === "green",
        };
      case "indigo":
        return {
          "bg-indigo-500 text-white": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-500 text-white": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-500 text-white": color === "pink",
        };
      case "blue":
        return {
          "bg-blue-500 text-white": color === "blue",
        };
      case "transparent":
        return {
          "bg-transparent text-white": color === "transparent",
        };

      default:
        break;
    }
  };

  const arrowStyle = `absolute text-2xl z-10 h-10 w-10 rounded-full opacity-75 flex items-center justify-center`;

  const sliderControl = (isLeft) => (
    <button
      data-testid={`${isLeft ? "arrow-left" : "arrow-right"}`}
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={overrideTailwindClasses(
        classnames(
          generateArrowColor(),
          `${arrowStyle} ${isLeft ? "left-2" : "right-2"}`
        )
      )}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );

  return (
    <div className="relative w-full" {...props} data-testid={"carousel"}>
      <div className="inline-flex overflow-x-hidden">
        {sliderControl(true)}
        {images.map((img, i) => (
          <div className="w-full flex-shrink-0" key={img} ref={refs[i]}>
            <img
              src={img}
              className={overrideTailwindClasses(
                classnames(
                  generateRounded(rounded),
                  "w-full object-contain",
                  className
                )
              )}
            />
          </div>
        ))}
        {sliderControl()}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  color: PropTypes.oneOf([
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
    "none",
  ]),
  images: PropTypes.array,
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  className: PropTypes.string,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  getCurentIndex: PropTypes.func,
};

export default Carousel;
