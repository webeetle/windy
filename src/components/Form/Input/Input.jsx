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
      "w-full flex-1 px-3 py-2 focus:outline-none",

      { "pointer-events-none": rest.disabled }
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
        {
          "ring-gray-300": color === "gray",
          "ring-red-300": color === "red",
          "ring-yellow-300": color === "yellow",
          "ring-green-300": color === "green",
          "ring-blue-300": color === "blue",
          "ring-indigo-300": color === "indigo",
          "ring-purple-300": color === "purple",
          "ring-pink-300": color === "pink",
        },
        { "opacity-50 pointer-events-none": rest.disabled },
        roundedHandler(),
        "flex min-w-0 overflow-hidden ring-1",
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
      <div className={clss()}>
        {prefix && (
          <span className="inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-500 sm:text-sm">
            {prefix}
          </span>
        )}
        <input className={inptclss()} {...rest} />
        {suffix && (
          <span className="inline-flex items-center px-3 rounded-l-md bg-gray-50 text-gray-500 sm:text-sm">
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
