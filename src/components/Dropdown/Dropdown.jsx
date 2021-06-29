import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import PropTypes from "prop-types";

//Utils
import {
  generateDisabled,
  generateRounded,
  generateShadow,
  generateSize,
} from "../../Utils/Utils";

const Dropdown = ({
  size = "md",
  color = "indigo",
  layout = "contained",
  shadow = "md",
  light = true,
  dark = false,
  rounded = "md",
  disabled = false,
  buttonText = "",
  caret = true,
  gradient = true,
  options = [],
  ...props
}) => {
  const decorateDropdown = () => {
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
          //Dark Mode
          // "text-white": light && !dark,
          "text-black": dark,
        };
      }
      case "contained":
        return {
          // "opacity-50 pointer-events-none": disabled,
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

          //Dark Mode
          "text-white": light && !dark,
          "text-black": dark,
        };

      case "bordered":
        return {
          // "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent border-2 text-blue-500 border-blue-300 hover:bg-blue-50 hover:text-blue-600 px-4 py-2":
            color === "blue",
          "bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50 active:bg-gray-200 px-4 py-2":
            color === "gray",
          "bg-transparent border-2 border-red-300 text-red-700 hover:bg-red-50 active:bg-red-200 px-4 py-2":
            color === "red",
          "bg-transparent border-2 border-yellow-300 text-yellow-700 hover:bg-yellow-50 active:bg-yellow-200 px-4 py-2":
            color === "yellow",
          "bg-transparent border-2 border-green-300 text-green-700 hover:bg-green-50 active:bg-green-200 px-4 py-2":
            color === "green",
          "bg-transparent border-2 border-blue-300 text-blue-700 hover:bg-blue-50 active:bg-blue-200 px-4 py-2":
            color === "blue",
          "bg-transparent border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 active:bg-indigo-200 px-4 py-2":
            color === "indigo",
          "bg-transparent border-2 border-purple-300 text-purple-700 hover:bg-purple-50 active:bg-purple-200 px-4 py-2":
            color === "purple",
          "bg-transparent border-2 border-pink-300 text-pink-700 hover:bg-pink-50 active:bg-pink-200 px-4 py-2":
            color === "pink",

          //Dark Mode
          // "text-white": light && !dark,
          "text-black": dark,
        };

      default:
        break;
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={overrideTailwindClasses(
            classnames(
              decorateDropdown(),
              layout !== "text" && generateShadow(shadow),
              layout !== "text" && generateSize(size),
              generateRounded(rounded),
              generateDisabled(disabled),
              `inline-flex items-center justify-center w-full hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75${
                props.className ?? ""
              }`
            )
          )}
        >
          {buttonText}
          {caret && <ArrowDown />}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-20 right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            {options.length > 0 &&
              options.map((opt) => (
                <Menu.Item>
                  <div
                    onClick={
                      opt.handler && typeof opt.handler === "function"
                        ? opt.handler
                        : null
                    }
                    className="text-gray-900 group flex rounded-md items-center w-full text-sm outline-none focus:outline-none cursor-pointer"
                  >
                    {opt.icon ? (
                      <div
                        className={overrideTailwindClasses(
                          classnames(
                            `w-full flex space-x-3 hover:bg-gray-100 py-2 px-3 rounded ${opt.className}`
                          )
                        )}
                      >
                        <div>{opt.icon}</div>
                        <div>{opt.label}</div>
                      </div>
                    ) : (
                      <div
                        className={overrideTailwindClasses(
                          classnames(
                            `w-full hover:bg-gray-100 py-2 px-3 rounded ${opt.className}`
                          )
                        )}
                      >
                        {opt.label}
                      </div>
                    )}
                  </div>
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

Dropdown.propTypes = {
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
  options: PropTypes.array,
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  disabled: PropTypes.bool,
  gradient: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  shadow: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.any,
  buttonText: PropTypes.string,
  caret: PropTypes.bool,
};

export default Dropdown;

const ArrowDown = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
};
