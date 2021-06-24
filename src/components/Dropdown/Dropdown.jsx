import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";
import PropTypes from "prop-types";

const Dropdown = ({
  size = false,
  color = "blue",
  layout = "contained",
  shadow = false,
  light = true,
  dark = false,
  rounded = "md",
  disabled = false,
  buttonText = "",
  caret = true,
  options = [],
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
  const decorateDropdown = () => {
    switch (layout) {
      case "text": {
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "hover:text-gray-500 px-4 py-2": color === "gray",
          "hover:text-red-500 px-4 py-2": color === "red",
          "hover:text-yellow-500 px-4 py-2": color === "yellow",
          "hover:text-green-500 px-4 py-2": color === "green",
          "hover:text-blue-500 px-4 py-2": color === "blue",
          "hover:text-indigo-500 px-4 py-2": color === "indigo",
          "hover:text-purple-500 px-4 py-2": color === "purple",
          "hover:text-pink-500 px-4 py-2": color === "pink",
          //Dark Mode
          // "text-white": light && !dark,
          "text-black": dark,
          //Size
          "text-sm font-medium px-4 py-2": !size || size === "md",
          "text-xs font-medium px-3 py-2": size === "sm",
          "text-xs font-medium px-2.5 py-1.5": size === "xs",
          "text-base font-medium px-4 py-2": size === "lg",
          "text-base font-medium px-6 py-3": size === "xl",
        };
      }
      case "contained":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-blue-500 text-white px-4 py-2": color === "blue",
          "bg-gray-500 hover:bg-gray-600 px-4 py-2": color === "gray",
          "bg-red-500 hover:bg-red-600 px-4 py-2": color === "red",
          "bg-yellow-500 hover:bg-yellow-600 px-4 py-2": color === "yellow",
          "bg-green-500 hover:bg-green-600 px-4 py-2": color === "green",
          "bg-blue-500 hover:bg-blue-600 px-4 py-2": color === "blue",
          "bg-indigo-500 hover:bg-indigo-600 px-4 py-2": color === "indigo",
          "bg-purple-500 hover:bg-purple-600 px-4 py-2": color === "purple",
          "bg-pink-500 hover:bg-pink-600 px-4 py-2": color === "pink",

          //Dark Mode
          "text-white": light && !dark,
          "text-black": dark,
          //Size
          "text-sm font-medium px-4 py-2": !size || size === "md",
          "text-xs font-medium px-3 py-2": size === "sm",
          "text-xs font-medium px-2.5 py-1.5": size === "xs",
          "text-base font-medium px-4 py-2": size === "lg",
          "text-base font-medium px-6 py-3": size === "xl",
        };

      case "bordered":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
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
          //Size
          "text-sm font-medium px-4 py-2": !size || size === "md",
          "text-xs font-medium px-3 py-2": size === "sm",
          "text-xs font-medium px-2.5 py-1.5": size === "xs",
          "text-base font-medium px-4 py-2": size === "lg",
          "text-base font-medium px-6 py-3": size === "xl",
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
              roundedHandler(),
              decorateDropdown(),
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
  color: PropTypes.string,
  layout: PropTypes.oneOf(["text", "bordered", "contained"]),
  className: PropTypes.string,
  options: PropTypes.array,
  rounded: PropTypes.oneOf(["sm", "md", "lg", "full", "none"]),
  disabled: PropTypes.bool,
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
