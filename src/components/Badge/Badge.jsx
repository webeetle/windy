import React from "react";

import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";

//Utils
import { generateShadow, generateRounded } from "../../Utils/Utils";

const Badge = ({
  text = "Badge",
  color = "blue",
  rounded = "full",
  layout = "bordered",
  disabled = false,
  dark = false,
  light = true,
  size = "sm",
  shadow,
  className = "",
  pointer = false,
  ...props
}) => {
  const decorateBadgeLayout = () => {
    switch (layout) {
      case "bordered":
        return {
          "opacity-50 pointer-events-none px-4 py-0.5": disabled,
          "text-blue-500 border-blue-300 hover:text-blue-600 px-2 py-0.5":
            color === "blue",
          "border-gray-300 text-gray-700 active:bg-gray-200 px-2 py-0.5":
            color === "gray",
          "border-red-300 text-red-700 active:bg-red-200 px-2 py-0.5":
            color === "red",
          "border-yellow-300 text-yellow-700 active:bg-yellow-200 px-2 py-0.5":
            color === "yellow",
          "border-green-300 text-green-700 active:bg-green-200 px-2 py-0.5":
            color === "green",
          "border-blue-300 text-blue-700 active:bg-blue-200 px-2 py-0.5":
            color === "blue",
          "border-indigo-300 text-indigo-700 active:bg-indigo-200 px-2 py-0.5":
            color === "indigo",
          "border-purple-300 text-purple-700 active:bg-purple-200 px-2 py-0.5":
            color === "purple",
          "border-pink-300 text-pink-700 active:bg-pink-200 px-2 py-0.5":
            color === "pink",

          //Dark Mode
          // "text-white": light && !dark,
          "text-black": dark,
          //Size
          "text-sm font-medium px-4 py-2": !size || size === "md",
          "text-xs font-medium px-3 py-2": size === "sm",
          "text-xs font-medium px-2.5 py-1.5": size === "xs",
          "text-base font-medium px-4 py-2": size === "lg",
          "text-base font-medium px-6 py-3": size === "xl",
          "shadow hover:shadow-sm": shadow,
        };

      default:
        break;
    }
  };

  return (
    <div
      {...props}
      className={overrideTailwindClasses(
        classnames(
          decorateBadgeLayout(),
          generateRounded(rounded),
          generateShadow(shadow),
          `w-auto bg-${color}-200 border ${className ?? ""} ${
            pointer && "cursor-pointer"
          }`
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
  layout: PropTypes.string,
  disabled: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  size: PropTypes.string,
  shadow: PropTypes.string,
  className: PropTypes.string,
  pointer: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Badge;
