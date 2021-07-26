import classnames from "classnames";
import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";
import { generateDisabled } from "../../../Utils/Utils";
import { useWindyTheme } from "../../../context.jsx";

const Checkbox = (checkboxProps, ref) => {
  const {
    state: { checkbox = {} },
  } = useWindyTheme();
  const {
    color = checkbox.color,
    className,
    shadow = checkbox.shadow,
    rounded = checkbox.rounded,
    label = null,
    gradient = checkbox.gradient,
    checked = false,
    onChange,
    ...rest
  } = checkboxProps;
  const [isChecked, setisChecked] = useState(checked);

  const inptclss = () =>
    overrideTailwindClasses(
      classnames(
        "appearance-none h-4 w-4 bg-white border cursor-pointer ring-white ring-2 ring-inset",
        { "shadow hover:shadow-sm": shadow },
        { "rounded-sm": rounded },
        { "border-transparent": isChecked },
        {
          "bg-gray-500": !gradient && isChecked && color === "gray",
          "bg-red-500": !gradient && isChecked && color === "red",
          "bg-yellow-500": !gradient && isChecked && color === "yellow",
          "bg-green-500": !gradient && isChecked && color === "green",
          "bg-blue-500": !gradient && isChecked && color === "blue",
          "bg-indigo-500": !gradient && isChecked && color === "indigo",
          "bg-purple-500": !gradient && isChecked && color === "purple",
          "bg-pink-500": !gradient && isChecked && color === "pink",
        },
        {
          "bg-gradient-to-l from-gray-500 to-gray-600":
            gradient && isChecked && color === "gray",
          "bg-gradient-to-l from-red-500 to-red-600":
            gradient && isChecked && color === "red",
          "bg-gradient-to-l from-yellow-500 to-yellow-600":
            gradient && isChecked && color === "yellow",
          "bg-gradient-to-l from-green-500 to-green-600":
            gradient && isChecked && color === "green",
          "bg-gradient-to-l from-blue-500 to-blue-600":
            gradient && isChecked && color === "blue",
          "bg-gradient-to-l from-indigo-500 to-indigo-600":
            gradient && isChecked && color === "indigo",
          "bg-gradient-to-l from-purple-500 to-purple-600":
            gradient && isChecked && color === "purple",
          "bg-gradient-to-l from-pink-500 to-pink-600":
            gradient && isChecked && color === "pink",
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
        `${className ?? ""}`
      )
    );

  return (
    <label
      className={classnames(
        "flex justify-start items-center space-x-2 cursor-pointer",
        generateDisabled(rest.disabled)
      )}
    >
      <input
        ref={ref}
        data-testid="CheckBox-1"
        checked={isChecked}
        onChange={(e) => {
          setisChecked(e.target.checked);
          if (typeof onChange === "function") onChange(e);
        }}
        {...rest}
        type="checkbox"
        className={inptclss()}
      />
      {label && <div className="select-none">{label}</div>}
    </label>
  );
};
Checkbox.propTypes = {
  className: PropTypes.string,
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
  gradient: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
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

export default forwardRef(Checkbox);
