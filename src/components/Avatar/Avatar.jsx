import React from "react";

import { generateRounded, generateShadow } from "../../Utils/Utils";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import { useWindyTheme, WindyProvider } from "../../context.jsx";

const Avatar = (avatarProps) => {
  const {
    state: { avatar = {} },
  } = useWindyTheme();

  const {
    color = avatar.color,
    rounded = avatar.rounded,
    size = avatar.size,
    shadow = avatar.shadow,
    stroke = avatar.stroke,
    className = "",
    src = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ...props
  } = avatarProps;

  const generateAvatarSize = () => {
    switch (size) {
      case "xs":
        return {
          "h-6 w-6": size === "xs",
        };
      case "sm":
        return {
          "h-12 w-12": size === "sm",
        };
      case "md":
        return {
          "h-20 w-20": size === "md",
        };
      case "lg":
        return {
          "h-28 w-28": size === "lg",
        };
      case "xl":
        return {
          "h-36 w-36": size === "xl",
        };

      default:
        break;
    }
  };

  const decorateAvatarLayout = () => {
    return {
      "ring-white": !color,
      "ring-gray-300": color === "gray",
      "ring-red-300": color === "red",
      "ring-yellow-300": color === "yellow",
      "ring-green-300": color === "green",
      "ring-indigo-300": color === "indigo",
      "ring-purple-300": color === "purple",
      "ring-pink-300": color === "pink",
      "ring-blue-300": color === "blue",
    };
  };

  const decorateStrokeWidth = () => {
    switch (stroke) {
      case "none":
        return {
          "ring-none": stroke === "none",
        };
      case "sm":
        return {
          ["ring-1"]: stroke === "sm",
        };
      case "md":
        return {
          "ring-2": stroke === "md",
        };
      case "lg":
        return {
          "ring-4": stroke === "lg",
        };
      case "xl":
        return {
          "ring-8": stroke === "xl",
        };

      default:
        break;
    }
  };

  return (
    <img
      data-testid="avatar"
      className={overrideTailwindClasses(
        classnames(
          generateRounded(rounded),
          generateShadow(shadow),
          generateAvatarSize(),
          decorateAvatarLayout(),
          decorateStrokeWidth(),
          "inline-block",
          className
        )
      )}
      src={src}
      alt=""
      {...props}
    />
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
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
  stroke: PropTypes.string,
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  onClick: PropTypes.func,
};

export default Avatar;
