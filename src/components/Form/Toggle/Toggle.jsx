import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { overrideTailwindClasses } from "tailwind-override";

import { useWindyTheme } from "../../../context.jsx";
import { Switch } from "@headlessui/react";
import { generateDisabled } from "../../../Utils/Utils.js";

const Toggle = (toggleProps) => {
  const {
    state: { toggle = {} },
  } = useWindyTheme();

  const {
    color = toggle.color,
    checked = false,
    onChange,
    disabled,
    className,
    render,
    ...rest
  } = toggleProps;

  const decorateBgToggle = (color) => {
    switch (color) {
      case "white":
        return {
          "bg-white": color === "white",
        };
      case "gray":
        return {
          "bg-gray-500": color === "gray",
        };
      case "red":
        return {
          "bg-red-500": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-500": color === "yellow",
        };

      case "green":
        return {
          "bg-green-500": color === "green",
        };
      case "blue":
        return {
          "bg-blue-500": color === "blue",
        };
      case "indigo":
        return {
          "bg-indigo-500": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-500": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-500": color === "pink",
        };
    }
  };

  const toggleBgHandler = (checked) => {
    if (checked) {
      return decorateBgToggle(color);
    } else {
      return "bg-gray-200";
    }
  };

  const renderCustomTranslator = () => {
    if (render && typeof render === "function") {
      return render();
    }

    return (
      <span
        className={`${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-all duration-100`}
      />
    );
  };

  return (
    <Switch
      data-testid="toggle-1"
      checked={checked}
      onChange={onChange}
      className={overrideTailwindClasses(
        classnames(
          toggleBgHandler(checked),
          generateDisabled(disabled),
          `relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-100`,
          `${className ? className : ""}`
        )
      )}
      {...rest}
    >
      {renderCustomTranslator()}
    </Switch>
  );
};

Toggle.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Toggle;
