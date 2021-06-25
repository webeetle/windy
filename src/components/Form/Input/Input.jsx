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
  prefix = null,
  suffix = null,
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

  const inptclss = () =>
    classnames(
      "w-full flex-1 px-3 py-2 z-10 focus:outline-none ring-1",
      {
        "focus:ring-gray-700 focus:ring-2 ring-gray-300": color === "gray",
        "focus:ring-red-700 focus:ring-2 ring-red-300": color === "red",
        "focus:ring-yellow-700 focus:ring-2 ring-yellow-300":
          color === "yellow",
        "focus:ring-green-700 focus:ring-2 ring-green-300": color === "green",
        "focus:ring-blue-700 focus:ring-2 ring-blue-300": color === "blue",
        "focus:ring-indigo-700 focus:ring-2 ring-indigo-300":
          color === "indigo",
        "focus:ring-purple-700 focus:ring-2 ring-purple-300":
          color === "purple",
        "focus:ring-pink-700 focus:ring-2 ring-pink-300": color === "pink",
      },
      { "pointer-events-none bg-gray-50": rest.disabled },
      `${className ?? ""}`
    );
  const clss = () =>
    overrideTailwindClasses(
      classnames(
        { "w-full": fullWidth },
        { "shadow hover:shadow-sm": shadow },
        {
          "text-base font-medium ": !size || size === "md",
          "text-sm font-medium ": size === "sm",
          "text-xs font-medium ": size === "xs",
          "text-lg font-medium ": size === "lg",
          "text-xl font-medium ": size === "xl",
        },

        { "opacity-50 pointer-events-none": rest.disabled },
        roundedHandler(),
        "flex min-w-0 overfow-hidden"
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
      <div className={clss()}>
        {prefix && (
          <span className="inline-flex items-center px-3 bg-gray-50 text-gray-500 sm:text-sm">
            {prefix}
          </span>
        )}
        <input className={inptclss()} {...rest} />
        {suffix && (
          <span className="inline-flex items-center px-3 bg-gray-50 text-gray-500 sm:text-sm">
            {suffix}
          </span>
        )}
      </div>
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
