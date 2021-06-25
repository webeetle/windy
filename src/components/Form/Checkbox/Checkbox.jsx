import classnames from "classnames";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";

const Checkbox = ({
  color = "gray",
  className,
  shadow = true,
  rounded = true,
  label = null,
  size = "md",
  gradient = true,
  checked,
  onClick,
  ...rest
}) => {
  const [innerCheck, setInnerCheck] = useState(checked);

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd"
      />
    </svg>
  );
  const inptclss = () => {
    return overrideTailwindClasses(
      classnames(
        "bg-white border cursor-pointer w-4 h-4 flex flex-shrink-0 justify-center items-center focus:outline-none transition duration-150 ease-in-out",
        { "shadow-md hover:shadow-sm": shadow },
        { "rounded-sm": rounded },
        {
          "bg-gray-500": !gradient && innerCheck && color === "gray",
          "bg-red-500": !gradient && innerCheck && color === "red",
          "bg-yellow-500": !gradient && innerCheck && color === "yellow",
          "bg-green-500": !gradient && innerCheck && color === "green",
          "bg-blue-500": !gradient && innerCheck && color === "blue",
          "bg-indigo-500": !gradient && innerCheck && color === "indigo",
          "bg-purple-500": !gradient && innerCheck && color === "purple",
          "bg-pink-500": !gradient && innerCheck && color === "pink",
        },
        {
          "bg-gradient-to-l from-gray-500 to-gray-600":
            gradient && innerCheck && color === "gray",
          "bg-gradient-to-l from-red-500 to-red-600":
            gradient && innerCheck && color === "red",
          "bg-gradient-to-l from-yellow-500 to-yellow-600":
            gradient && innerCheck && color === "yellow",
          "bg-gradient-to-l from-green-500 to-green-600":
            gradient && innerCheck && color === "green",
          "bg-gradient-to-l from-blue-500 to-blue-600":
            gradient && innerCheck && color === "blue",
          "bg-gradient-to-l from-indigo-500 to-indigo-600":
            gradient && innerCheck && color === "indigo",
          "bg-gradient-to-l from-purple-500 to-purple-600":
            gradient && innerCheck && color === "purple",
          "bg-gradient-to-l from-pink-500 to-pink-600":
            gradient && innerCheck && color === "pink",
        },
        {
          "border-gray-500": color === "gray",
          "border-red-500": color === "red",
          "border-yellow-500": color === "yellow",
          "border-green-500": color === "green",
          "border-blue-500": color === "blue",
          "border-indigo-500": color === "indigo",
          "border-purple-500": color === "purple",
          "border-pink-500": color === "pink",
        },
        { "pointer-events-none bg-gray-50": rest.disabled },
        `${className ?? ""}`
      )
    );
  };
  return (
    <label className="flex justify-start items-center space-x-2 cursor-pointer">
      <div className={inptclss()}>
        {innerCheck && <CheckIcon />}
        <input
          onClick={(e) => {
            setInnerCheck(e.target.checked);
            if (typeof onClick === "function") return onClick(e);
          }}
          {...rest}
          type="checkbox"
          className="opacity-0 absolute cursor-pointer"
        />
      </div>
      {label && <div class="select-none">{label}</div>}
    </label>
  );
};
Checkbox.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
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

export default Checkbox;
