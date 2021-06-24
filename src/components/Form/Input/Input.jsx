import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";

const Input = ({
  fullWidth,
  color = "gray",
  className,
  shadow = true,
  rounded = "md",
  size = "md",
  label = null,
  ...rest
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
  const clss = () =>
    overrideTailwindClasses(
      classnames(
        { "w-full": fullWidth },
        { "shadow hover:shadow-sm": shadow },
        {
          "focus:border-gray-800 border-gray-300": color === "gray",
          "focus:border-red-800 border-red-300": color === "red",
          "focus:border-yellow-800 border-yellow-300": color === "yellow",
          "focus:border-green-800 border-green-300": color === "green",
          "focus:border-blue-800 border-blue-300": color === "blue",
          "focus:border-indigo-800 border-indigo-300": color === "indigo",
          "focus:border-purple-800 border-purple-300": color === "purple",
          "focus:border-pink-800 border-pink-300": color === "pink",
        },
        {
          "text-base font-medium px-2 py-2": !size || size === "md",
          "text-sm font-medium px-2 py-2": size === "sm",
          "text-xs font-medium px-1.5 py-1": size === "xs",
          "text-lg font-medium px-3 py-2": size === "lg",
          "text-xl font-medium px-4 py-3": size === "xl",
        },
        { "opacity-50 pointer-events-none": rest.disabled },
        roundedHandler(),
        "block flex-1 min-w-0 focus:outline-none border transition duration-150 ease-in-out",
        `${className ?? ""}`
      )
    );

  return (
    <>
      {label && (
        <label
          htmlFor={rest.id}
          className="block mb-1 text-sm font-medium sm:mt-px sm:pt-2"
        >
          {label}
        </label>
      )}
      <input {...rest} className={clss()} />
    </>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  shadow: PropTypes.bool,
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
};

export default Input;
