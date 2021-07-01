import React from "react";

import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme } from "../../index";

//Utils
import {
  generateShadow,
  generateRounded,
  generateSize,
  generateDisabled,
} from "../../Utils/Utils";

const Badge = (badgeProps) => {
  const {
    state: { badge = {} },
  } = useWindyTheme();

  const {
    text = "",
    color = badge.color,
    rounded = badge.rounded,
    disabled = false,
    size = badge.size,
    shadow = badge.shadow,
    className = "",
    pointer = badge.pointer,
    ...props
  } = badgeProps;

  const decorateBadgeLayout = () => {
    return {
      "border-blue-300 text-blue-500 bg-blue-200": color === "blue",
      "border-gray-300 text-gray-700 bg-gray-200": color === "gray",
      "border-red-300 text-red-700 bg-red-200": color === "red",
      "border-yellow-300 text-yellow-700 bg-yellow-200": color === "yellow",
      "border-green-300 text-green-700 bg-green-200": color === "green",
      "border-indigo-300 text-indigo-700 bg-indigo-200": color === "indigo",
      "border-purple-300 text-purple-700 bg-purple-200": color === "purple",
      "border-pink-300 text-pink-700 bg-pink-200": color === "pink",
      "cursor-pointer": pointer,
    };
  };

  return (
    <div
      data-testid="badge-1"
      {...props}
      className={overrideTailwindClasses(
        classnames(
          decorateBadgeLayout(),
          generateRounded(rounded),
          generateShadow(shadow),
          generateSize(size),
          generateDisabled(disabled),
          `border transition duration-150 ease-in-out ${className ?? ""}`
        )
      )}
    >
      <span>{text}</span>
    </div>
  );
};

Badge.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf([
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  rounded: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  shadow: PropTypes.string,
  className: PropTypes.string,
  pointer: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Badge;
