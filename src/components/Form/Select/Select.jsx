import React, { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useWindyTheme } from "../../../index";

import PropTypes from "prop-types";

import { overrideTailwindClasses } from "tailwind-override";
import classnames from "classnames";

//Utils
import {
  generateShadow,
  generateRounded,
  generateDisabled,
} from "../../../Utils/Utils";

const Select = React.forwardRef((selectProps, ref) => {
  const {
    state: { select = {} },
  } = useWindyTheme();

  const {
    color = select.color,
    rounded = select.rounded,
    shadow = select.shadow,
    options = [],
    disabled = false,
    onSelect = () => null,
    ...rest
  } = selectProps;

  const [selected, setSelected] = useState(
    rest.selected ? options.find((x) => x.value === rest.selected) : options[0]
  );

  const decorateBgSelect = () => {
    switch (color) {
      case "white":
        return {
          "bg-transparent focus:ring-2 ring-0 ring-black border-black text-black hover:bg-gray-50":
            color === "white",
        };
      case "gray":
        return {
          "bg-transparent focus:ring-2 focus:ring-gray-500 ring-gray-300 text-black hover:bg-gray-50":
            color === "gray",
        };
      case "red":
        return {
          "bg-transparent focus:ring-2 focus:ring-red-500 ring-red-500 text-black hover:bg-red-50":
            color === "red",
        };
      case "yellow":
        return {
          "bg-transparent focus:ring-2 focus:ring-yellow-500 ring-yellow-500 text-black hover:bg-yellow-50":
            color === "yellow",
        };

      case "green":
        return {
          "bg-transparent focus:ring-2 focus:ring-green-500 ring-green-500 text-black hover:bg-green-50":
            color === "green",
        };
      case "blue":
        return {
          "bg-transparent focus:ring-2 focus:ring-blue-500 ring-blue-500 text-black hover:bg-blue-50":
            color === "blue",
        };
      case "indigo":
        return {
          "bg-transparent focus:ring-2 focus:ring-indigo-500 ring-indigo-500 text-black hover:bg-indigo-50":
            color === "indigo",
        };
      case "purple":
        return {
          "bg-transparent focus:ring-2 focus:ring-purple-500 ring-purple-500 text-black hover:bg-purple-50":
            color === "purple",
        };
      case "pink":
        return {
          "bg-transparent focus:ring-2 focus:ring-pink-500 ring-pink-500 text-black hover:bg-pink-50":
            color === "pink",
        };
    }
  };

  return (
    <Listbox
      data-testid="select-1"
      disabled={disabled}
      ref={ref}
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
              generateRounded(rounded),
              generateShadow(shadow),
              generateDisabled(disabled)
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
          <Listbox.Options
            data-testid="container-options"
            className="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {options &&
              options.map((opt, optIdx) => (
                <Listbox.Option
                  key={optIdx}
                  data-testid="options"
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
});

Select.propTypes = {
  color: PropTypes.string,
  rounded: PropTypes.string,
  shadow: PropTypes.string,
  options: PropTypes.array.isRequired,
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
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};
