import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";

//Utils
import { generateShadow } from "../../../Utils/Utils";

const Input = ({
  fullWidth,
  color = "gray",
  className,
  shadow = "md",
  rounded = "md",
  size = "md",
  label = null,
  prefix = null,
  suffix = null,
  ...rest
}) => {
  const roundedInptHandler = () => {
    switch (rounded) {
      case "none":
        return {
          "rounded-none": rounded === "none",
        };
      case "sm":
        return {
          "rounded-sm": !suffix && !prefix && rounded === "sm",
          "rounded-l-sm": suffix && rounded === "sm",
          "rounded-r-sm": prefix && rounded === "sm",
        };
      case "md":
        return {
          "rounded-md": !suffix && !prefix && rounded === "md",
          "rounded-l-md": suffix && rounded === "md",
          "rounded-r-md": prefix && rounded === "md",
        };
      case "lg":
        return {
          "rounded-lg": !suffix && !prefix && rounded === "lg",
          "rounded-l-lg": suffix && rounded === "lg",
          "rounded-r-lg": prefix && rounded === "lg",
        };
      case "full":
        return {
          "rounded-full": !suffix && !prefix && rounded === "full",
          "rounded-l-full": suffix && rounded === "full",
          "rounded-r-full": prefix && rounded === "full",
        };
      default:
        return {
          "rounded-md": !suffix && !prefix && rounded === "md",
          "rounded-l-md": suffix && rounded === "md",
          "rounded-r-md": prefix && rounded === "md",
        };
    }
  };

  const inptclss = () =>
    overrideTailwindClasses(
      classnames(
        "w-full flex-1 px-3 py-2 focus:outline-none ring-1",
        {
          "focus:ring-gray-500 focus:ring-2 ring-gray-300": color === "gray",
          "focus:ring-red-500 focus:ring-2 ring-red-300": color === "red",
          "focus:ring-yellow-500 focus:ring-2 ring-yellow-300":
            color === "yellow",
          "focus:ring-green-500 focus:ring-2 ring-green-300": color === "green",
          "focus:ring-blue-500 focus:ring-2 ring-blue-300": color === "blue",
          "focus:ring-indigo-500 focus:ring-2 ring-indigo-300":
            color === "indigo",
          "focus:ring-purple-500 focus:ring-2 ring-purple-300":
            color === "purple",
          "focus:ring-pink-500 focus:ring-2 ring-pink-300": color === "pink",
        },
        roundedInptHandler(),
        generateShadow(shadow),
        {
          "z-10": suffix || prefix,
        },
        { "pointer-events-none bg-gray-50": rest.disabled },
        `${className ?? ""}`
      )
    );
  const clssSuffixPrefix = (def) =>
    overrideTailwindClasses(
      classnames(
        def,
        generateShadow(shadow),
        {
          "bg-gray-50 text-gray-500": color === "gray",
          "bg-red-50 text-red-500": color === "red",
          "bg-yellow-50 text-yellow-500": color === "yellow",
          "bg-green-50 text-green-500": color === "green",
          "bg-blue-50 text-blue-500": color === "blue",
          "bg-indigo-50 text-indigo-500": color === "indigo",
          "bg-purple-50 text-purple-500": color === "purple",
          "bg-pink-50 text-pink-500": color === "pink",
        },
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
        }
      )
    );

  const clss = () =>
    overrideTailwindClasses(
      classnames(
        { "w-full": fullWidth },
        {
          "text-base font-medium ": !size || size === "md",
          "text-sm font-medium ": size === "sm",
          "text-xs font-medium ": size === "xs",
          "text-xl font-medium ": size === "lg",
          "text-2xl font-medium ": size === "xl",
        },

        { "opacity-50 pointer-events-none": rest.disabled },
        "flex min-w-0"
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
          <span
            className={clssSuffixPrefix(
              "inline-flex items-center px-3 sm:text-sm ring-1"
            )}
          >
            {prefix}
          </span>
        )}
        <input data-testid="input-1" className={inptclss()} {...rest} />
        {suffix && (
          <span
            className={clssSuffixPrefix(
              "inline-flex items-center px-3 sm:text-sm ring-1"
            )}
          >
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
  shadow: PropTypes.string,
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
