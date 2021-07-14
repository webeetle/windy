import React, { useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import { useWindyTheme } from "../../context.jsx";
import { generateRounded, generateShadow } from "../../Utils/Utils";
const Tooltip = (tooltipProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const {
    state: { tooltip = {} },
  } = useWindyTheme();

  const {
    children,
    text = "",
    color = tooltip.color,
    rounded = tooltip.rounded,
    shadow = tooltip.shadow,
    layout = tooltip.layout,
    ...props
  } = tooltipProps;

  const decorateLayoutTooltip = () => {
    switch (layout) {
      case "top":
        return {
          "-right-3 -top-10": layout === "top",
        };
      case "bottom":
        return {
          "-left-3 -bottom-10": layout === "bottom",
        };

      default:
        return {
          "-right-3 -top-10": true,
        };
    }
  };

  const decorateBgTooltip = () => {
    switch (color) {
      case "white":
        return {
          "bg-white": color === "white",
        };
      case "gray":
        return {
          "bg-gray-500": color === "gray",
        };
      case "red":
        return {
          "bg-red-500": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-500": color === "yellow",
        };

      case "green":
        return {
          "bg-green-500": color === "green",
        };
      case "blue":
        return {
          "bg-blue-500": color === "blue",
        };
      case "indigo":
        return {
          "bg-indigo-500": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-500": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-500": color === "pink",
        };
    }
  };

  return (
    <div
      className="relative flex group"
      onMouseOver={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      {children}

      <span
        data-testid="tooltip-1"
        className={overrideTailwindClasses(
          classnames(
            decorateBgTooltip(),
            generateRounded(rounded),
            generateShadow(shadow),
            decorateLayoutTooltip(),
            `${isShowing ? "" : "invisible"}`,
            "text-white transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 absolute px-4 py-0.5"
          )
        )}
      >
        {text}
      </span>
    </div>
  );
};

Tooltip.prototype = {
  text: PropTypes.string,
  color: PropTypes.oneOf([
    "white",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  rounded: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  layout: PropTypes.oneOf(["top", "bottom"]),
};

export default Tooltip;
