import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import { useWindyTheme } from "../../index";

//Utils
import {
  generateRounded,
  generateShadow,
  generateSize,
  generateDisabled,
} from "../../Utils/Utils";

const Button = (btnProps) => {
  const {
    state: { button = {} },
  } = useWindyTheme();

  const {
    size = button.size,
    color = button.color,
    layout = button.layout,
    shadow = button.shadow,
    gradient = button.gradient,
    rounded = button.rounded,
    disabled = false,
    ...props
  } = btnProps;

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
          "text-xs": size === "xs",
          "text-sm": !size || size === "sm",
          "text-base": !size || size === "md",
          "text-lg": size === "lg",
          "text-2xl": size === "xl",
        };
      }
      case "bordered": {
        return {
          "border-solid border": true,
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
        };
      }
      case "contained": {
        return {
          "bg-gray-500 hover:bg-gray-600": !gradient && color === "gray",
          "bg-red-500 hover:bg-red-600": !gradient && color === "red",
          "bg-yellow-500 hover:bg-yellow-600": !gradient && color === "yellow",
          "bg-green-500 hover:bg-green-600": !gradient && color === "green",
          "bg-blue-500 hover:bg-blue-600": !gradient && color === "blue",
          "bg-indigo-500 hover:bg-indigo-600": !gradient && color === "indigo",
          "bg-purple-500 hover:bg-purple-600": !gradient && color === "purple",
          "bg-pink-500 hover:bg-pink-600": !gradient && color === "pink",

          "bg-gradient-to-l from-gray-500 to-gray-600 hover:from-gray-400 hover:to-gray-500":
            gradient && color === "gray",
          "bg-gradient-to-l from-red-500 to-red-600 hover:from-red-400 hover:to-red-500":
            gradient && color === "red",
          "bg-gradient-to-l from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500":
            gradient && color === "yellow",
          "bg-gradient-to-l from-green-500 to-green-600 hover:from-green-400 hover:to-green-500":
            gradient && color === "green",
          "bg-gradient-to-l from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500":
            gradient && color === "blue",
          "bg-gradient-to-l from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500":
            gradient && color === "indigo",
          "bg-gradient-to-l from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500":
            gradient && color === "purple",
          "bg-gradient-to-l from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500":
            gradient && color === "pink",

          "border-none border-transparent text-white": true,
        };
      }
    }
  };

  return (
    <button
      data-testid="Button-1"
      onClick={(e) =>
        typeof props.onClick === "function" ? props.onClick(e) : null
      }
      style={{ ...props.style }}
      disabled={disabled}
      className={overrideTailwindClasses(
        classnames(
          decorateButton(),
          generateRounded(rounded),
          layout !== "text" && generateShadow(shadow),
          layout !== "text" && generateSize(size),
          generateDisabled(disabled),
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
    "none",
  ]),
  layout: PropTypes.oneOf(["text", "bordered", "contained"]),
  className: PropTypes.string,
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  disabled: PropTypes.bool,
  shadow: PropTypes.string,
  gradient: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
  style: PropTypes.any,
};

export default Button;
