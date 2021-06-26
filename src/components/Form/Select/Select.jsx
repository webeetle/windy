import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import PropTypes from "prop-types";

import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";

const Select = ({
  color = "gray",
  rounded = "md",
  shadow = "md",
  options = [],
  disabled = false,
  onSelect = () => null,
  ...rest
}) => {
  const [selected, setSelected] = useState(
    rest.selected ? options.find((x) => x.value === rest.selected) : options[0]
  );

  const decorateShadowSelect = () => {
    switch (shadow) {
      case "none":
        return {
          "shadow-none": shadow === "none",
        };

      case "sm":
        return {
          "shadow-sm": shadow === "sm",
        };

      case "md":
        return {
          "shadow-md": shadow === "md",
        };

      case "lg":
        return {
          "shadow-lg": shadow === "lg",
        };

      case "xl":
        return {
          "shadow-xl": shadow === "xl",
        };

      default:
        break;
    }
  };

  const decorateRoundedSelect = () => {
    switch (rounded) {
      case "none":
        return {
          "rounded-none": rounded === "none",
        };

      case "md":
        return {
          "rounded-md": rounded === "md",
        };

      case "lg":
        return {
          "rounded-lg": rounded === "lg",
        };

      case "xl":
        return {
          "rounded-xl": rounded === "xl",
        };

      case "full":
        return {
          "rounded-full": rounded === "full",
        };

      default:
        break;
    }
  };

  const decorateBgSelect = () => {
    switch (color) {
      case "white":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 ring-0 ring-black border-black text-black hover:bg-gray-50":
            color === "white",
        };
      case "gray":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-gray-500 ring-gray-300 text-black hover:bg-gray-50":
            color === "gray",
        };
      case "red":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-red-500 ring-red-500 text-black hover:bg-red-50":
            color === "red",
        };
      case "yellow":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-yellow-500 ring-yellow-500 text-black hover:bg-yellow-50":
            color === "yellow",
        };

      case "green":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-green-500 ring-green-500 text-black hover:bg-green-50":
            color === "green",
        };
      case "blue":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-blue-500 ring-blue-500 text-black hover:bg-blue-50":
            color === "blue",
        };
      case "indigo":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-indigo-500 ring-indigo-500 text-black hover:bg-indigo-50":
            color === "indigo",
        };
      case "purple":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-purple-500 ring-purple-500 text-black hover:bg-purple-50":
            color === "purple",
        };
      case "pink":
        return {
          "opacity-50 pointer-events-none px-4 py-2": disabled,
          "bg-transparent focus:ring-2 focus:ring-pink-500 ring-pink-500 text-black hover:bg-pink-50":
            color === "pink",
        };
    }
  };

  return (
    <Listbox
      disabled={disabled}
      value={selected}
      onChange={(opt) => {
        setSelected(opt);
        onSelect(opt);
      }}
    >
      <div className="relative mt-1">
        <Listbox.Button
          className={overrideTailwindClasses(
            classnames(
              "w-full flex-1 px-3 py-2 text-left focus:outline-none ring-1",
              decorateBgSelect(),
              decorateRoundedSelect(),
              decorateShadowSelect()
            )
          )}
        >
          <span className="block truncate">{selected.label}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options &&
              options.map((opt, optIdx) => (
                <Listbox.Option
                  key={optIdx}
                  className={({ active, selected }) =>
                    `${
                      active
                        ? `text-amber-900 bg-${
                            color === "white" ? "gray" : color
                          }-100`
                        : selected
                        ? `text-amber-900 bg-${
                            color === "white" ? "gray" : color
                          }-100`
                        : "text-gray-900"
                    }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                  }
                  value={opt}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? `font-medium` : "font-normal"
                        } block truncate`}
                      >
                        {opt.label}
                      </span>
                      {selected ? (
                        <span
                          className={`${
                            active ? "text-amber-600" : "text-amber-600"
                          }
                          absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

Select.propTypes = {
  color: PropTypes.string,
  rounded: PropTypes.string,
  shadow: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default Select;

const SelectorIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      />
    </svg>
  );
};

const CheckIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};
