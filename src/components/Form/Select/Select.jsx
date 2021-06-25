import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import PropTypes from "prop-types";

import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";

const Select = ({
  color = "white",
  rounded = "md",
  shadow = "md",
  options = [],
  onSelect = () => null,
}) => {
  const [selected, setSelected] = useState(options[0]);

  const decorateShadowSelect = () => {
    switch (shadow) {
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
          "bg-white text-black": color === "white",
        };
      case "gray":
        return {
          "bg-gray-500 text-white": color === "gray",
        };
      case "red":
        return {
          "bg-red-500 text-white": color === "red",
        };
      case "yellow":
        return {
          "bg-yellow-500 text-white": color === "yellow",
        };

      case "green":
        return {
          "bg-green-500 text-white": color === "green",
        };
      case "blue":
        return {
          "bg-blue-500 text-white": color === "blue",
        };
      case "indigo":
        return {
          "bg-indigo-500 text-white": color === "indigo",
        };
      case "purple":
        return {
          "bg-purple-500 text-white": color === "purple",
        };
      case "pink":
        return {
          "bg-pink-500 text-white": color === "pink",
        };
    }
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button
          className={overrideTailwindClasses(
            classnames(
              decorateRoundedSelect(),
              decorateShadowSelect(),
              decorateBgSelect(),
              "relative w-full py-2 pl-3 pr-10 text-left cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
            )
          )}
        >
          <span className="block truncate">{selected.name}</span>
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
                  className={({ active }) =>
                    `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={opt}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {opt.name}
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
