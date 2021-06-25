import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";

const Button = ({
  size = false,
  color = "indigo",
  layout = "contained",
  shadow = true,
  light = true,
  dark = false,
  gradient = true,
  rounded = "md",
  disabled = false,
  ...props
}) => {
  const roundedHandler = () => {
    switch (rounded) {
      case "none":
        return {
          "rounded-none": rounded === "none",
        };
      case "sm":
        return {
          "rounded-sm": rounded === "sm",
        };
      case "md":
        return {
          "rounded-md": rounded === "md",
        };
      case "lg":
        return {
          "rounded-lg": rounded === "lg",
        };
      case "full":
        return {
          "rounded-full": rounded === "full",
        };
      default:
        return {
          "rounded-md": rounded === "md",
        };
    }
  };
  const decorateButton = () => {
    switch (layout) {
      case "text": {
        return {
          "hover:text-gray-500": color === "gray",
          "hover:text-red-500": color === "red",
          "hover:text-yellow-500": color === "yellow",
          "hover:text-green-500": color === "green",
          "hover:text-blue-500": color === "blue",
          "hover:text-indigo-500": color === "indigo",
          "hover:text-purple-500": color === "purple",
          "hover:text-pink-500": color === "pink",
          "opacity-50 pointer-events-none": disabled,
          "text-sm font-medium": !size || size === "md",
          "text-xs font-medium": size === "sm" || size === "xs",
          "text-base font-medium": size === "lg" || size === "xl",
        };
      }
      case "bordered": {
        return {
          "border-solid border": true,
          "opacity-50 pointer-events-none": disabled,
          "border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-200":
            color === "gray",
          "border-red-300 text-red-700 hover:bg-red-50 active:bg-red-200":
            color === "red",
          "border-yellow-300 text-yellow-700 hover:bg-yellow-50 active:bg-yellow-200":
            color === "yellow",
          "border-green-300 text-green-700 hover:bg-green-50 active:bg-green-200":
            color === "green",
          "border-blue-300 text-blue-700 hover:bg-blue-50 active:bg-blue-200":
            color === "blue",
          "border-indigo-300 text-indigo-700 hover:bg-indigo-50 active:bg-indigo-200":
            color === "indigo",
          "border-purple-300 text-purple-700 hover:bg-purple-50 active:bg-purple-200":
            color === "purple",
          "border-pink-300 text-pink-700 hover:bg-pink-50 active:bg-pink-200":
            color === "pink",

          "shadow hover:shadow-sm": shadow,

          "text-sm font-medium px-4 py-2": !size || size === "md",
          "text-xs font-medium px-3 py-2": size === "sm",
          "text-xs font-medium px-2.5 py-1.5": size === "xs",
          "text-base font-medium px-4 py-2": size === "lg",
          "text-base font-medium px-6 py-3": size === "xl",
        };
      }
      case "contained": {
        return {
          "opacity-50 pointer-events-none": disabled,
          "bg-gray-500 hover:bg-gray-600": !gradient && color === "gray",
          "bg-red-500 hover:bg-red-600": !gradient && color === "red",
          "bg-yellow-500 hover:bg-yellow-600": !gradient && color === "yellow",
          "bg-green-500 hover:bg-green-600": !gradient && color === "green",
          "bg-blue-500 hover:bg-blue-600": !gradient && color === "blue",
          "bg-indigo-500 hover:bg-indigo-600": !gradient && color === "indigo",
          "bg-purple-500 hover:bg-purple-600": !gradient && color === "purple",
          "bg-pink-500 hover:bg-pink-600": !gradient && color === "pink",

          "bg-gradient-to-l from-gray-500 to-gray-600 hover:opacity-80":
            gradient && color === "gray",
          "bg-gradient-to-l from-red-500 to-red-600 hover:opacity-80":
            gradient && color === "red",
          "bg-gradient-to-l from-yellow-500 to-yellow-600 hover:opacity-80":
            gradient && color === "yellow",
          "bg-gradient-to-l from-green-500 to-green-600 hover:opacity-80":
            gradient && color === "green",
          "bg-gradient-to-l from-blue-500 to-blue-600 hover:opacity-80":
            gradient && color === "blue",
          "bg-gradient-to-l from-indigo-500 to-indigo-600 hover:opacity-80":
            gradient && color === "indigo",
          "bg-gradient-to-l from-purple-500 to-purple-600 hover:opacity-80":
            gradient && color === "purple",
          "bg-gradient-to-l from-pink-500 to-pink-600 hover:opacity-80":
            gradient && color === "pink",

          "text-white": light && !dark,
          "text-black": dark,

          "shadow hover:shadow-sm": shadow,

          "text-sm font-medium px-4 py-2": !size || size === "md",
          "text-xs font-medium px-3 py-2": size === "sm",
          "text-xs font-medium px-2.5 py-1.5": size === "xs",
          "text-base font-medium px-4 py-2": size === "lg",
          "text-base font-medium px-6 py-3": size === "xl",
          "border-none border-transparent": true,
        };
      }
    }
  };

  return (
    <button
      onClick={() =>
        typeof props.onClick === "function" ? props.onClick() : null
      }
      disabled={disabled}
      style={{ ...props.style }}
      disabled={disabled}
      className={overrideTailwindClasses(
        classnames(
          decorateButton(),
          roundedHandler(),
          "inline-flex items-center outline-none focus:outline-none transition duration-150 ease-in-out",
          `${props.className ?? ""}`
        )
      )}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
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
  ]),
  layout: PropTypes.oneOf(["text", "bordered", "contained"]),
  className: PropTypes.string,
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  disabled: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  shadow: PropTypes.bool,
  gradient: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  style: PropTypes.any,
};

export default Button;
