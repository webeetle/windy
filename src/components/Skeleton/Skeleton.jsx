import React from "react";

import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme } from "../../context.jsx";

const Skeleton = (skeletonProps) => {
  const {
    state: { skeleton = {} },
  } = useWindyTheme();

  const { color = skeleton.color, className, ...props } = skeletonProps;

  const decorateSkeletonColor = () => {
    switch (color) {
      case "white":
        return {
          "bg-white": color === "white",
        };
      case "gray":
        return {
          "bg-gray-300": color === "gray",
        };
      case "red":
        return {
          "bg-red-300": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-300": color === "yellow",
        };

      case "green":
        return {
          "bg-green-300": color === "green",
        };
      case "blue":
        return {
          "bg-blue-300": color === "blue",
        };
      case "indigo":
        return {
          "bg-indigo-300": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-300": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-300": color === "pink",
        };
    }
  };

  return (
    <div
      data-testid="skeleton-1"
      {...props}
      className={overrideTailwindClasses(
        classnames(
          decorateSkeletonColor(),
          `animate-pulse rounded-full w-full h-3 ${className ?? ""}`
        )
      )}
    />
  );
};

Skeleton.propTypes = {
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
  className: PropTypes.string,
};

export default Skeleton;
