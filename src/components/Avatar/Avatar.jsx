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
    layout = avatar.layout,
    color = avatar.color,
    rounded = avatar.rounded,
    size = avatar.size,
    shadow = avatar.shadow,
    stroke = avatar.stroke,
    className = "",
    text = "",
    src = "",
    ...props
  } = avatarProps;

  const generateAvatarSize = () => {
    switch (size) {
      case "xs":
        return {
          "h-8 w-8": size === "xs",
        };
      case "sm":
        return {
          "h-12 w-12": size === "sm",
        };
      case "md":
        return {
          "h-16 w-16": size === "md",
        };
      case "lg":
        return {
          "h-20 w-20": size === "lg",
        };
      case "xl":
        return {
          "h-24 w-24": size === "xl",
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

  const decorateStrokeTextWidth = () => {
    switch (stroke) {
      case "none":
        return {
          "border-none": stroke === "none",
        };
      case "sm":
        return {
          ["border-1"]: stroke === "sm",
        };
      case "md":
        return {
          "border-2": stroke === "md",
        };
      case "lg":
        return {
          "border-4": stroke === "lg",
        };
      case "xl":
        return {
          "border-8": stroke === "xl",
        };

      default:
        break;
    }
  };

  const decorateAvatarTextLayout = () => {
    return {
      "border-white": !color,
      "border-gray-300": color === "gray",
      "border-red-300": color === "red",
      "border-yellow-300": color === "yellow",
      "border-green-300": color === "green",
      "border-indigo-300": color === "indigo",
      "border-purple-300": color === "purple",
      "border-pink-300": color === "pink",
      "border-blue-300": color === "blue",
    };
  };

  const decorateAvatarTextSize = () => {
    switch (size) {
      case "xs":
        return {
          "text-xs": size === "xs",
        };
      case "sm":
        return {
          "text-sm": size === "sm",
        };
      case "md":
        return {
          "text-2xl": size === "md",
        };
      case "lg":
        return {
          "text-4xl": size === "lg",
        };
      case "xl":
        return {
          "text-5xl": size === "xl",
        };

      default:
        break;
    }
  };

  return (
    <>
      {layout === "image" ? (
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
      ) : (
        <div
          data-testid="avatar"
          className={overrideTailwindClasses(
            classnames(
              generateRounded(rounded),
              generateShadow(shadow),
              generateAvatarSize(),
              decorateAvatarTextSize(),
              decorateAvatarTextLayout(),
              decorateStrokeTextWidth(),
              "inline-flex justify-center items-center bg-gray-300",
              className
            )
          )}
        >
          {text}
        </div>
      )}
    </>
  );
};

Avatar.propTypes = {
  layout: PropTypes.oneOf(["image", "text"]),
  text: PropTypes.any,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  shadow: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
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
  stroke: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  src: PropTypes.string,
  onClick: PropTypes.func,
};

export default Avatar;
