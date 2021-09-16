import React from "react";
import SelectNative from "./SelectNative";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../../index.js";

const theme = { SelectNative: {} };

const EditIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  );
};

const options = [
  { label: "One", value: "one" },
  { label: "Two", value: "two" },
  { label: "Three", value: "three" }
];

export const Size = () => {
  return (
    <div className="space-y-5 py-5">
      <WindyProvider theme={theme}>
        <SelectNative
          options={options}
          disabled
          size="xs"
          type="text"
          placeholder="disabled SelectNative xs"
        />
        <SelectNative
          options={options}
          size="sm"
          type="text"
          placeholder="SelectNative sm"
        />
        <SelectNative
          options={options}
          type="text"
          placeholder="SelectNative md"
        />
        <SelectNative
          options={options}
          size="lg"
          type="text"
          placeholder="SelectNative lg"
        />
        <SelectNative
          options={options}
          size="xl"
          type="text"
          placeholder="SelectNative xl"
        />
        <SelectNative
          options={options}
          size="sm"
          type="text"
          placeholder="class override"
          className="focus:ring-red-500 ring-red-500 rounded-full"
        />
      </WindyProvider>
    </div>
  );
};

export const ColorAndLabel = () => {
  return (
    <div className="flex space-x-5 items-end">
      <WindyProvider theme={theme}>
        <div className="w-1/2">
          <SelectNative
            options={options}
            fullWidth
            label={"A small label"}
            id="ok"
            color="indigo"
            type="text"
            placeholder="indigo"
          />
        </div>
        <div className="w-1/2">
          <SelectNative
            options={options}
            label={"A very very long label"}
            fullWidth
            type="text"
            color="red"
            placeholder="red"
          />
        </div>
      </WindyProvider>
    </div>
  );
};

export const TypeHTML5 = () => {
  return (
    <div className="flex space-x-5 items-end">
      <div className="w-full">
        <WindyProvider theme={theme}>
          <SelectNative
            options={options}
            fullWidth
            label={"A date type"}
            type="date"
          />
        </WindyProvider>
      </div>
    </div>
  );
};

export const PrefixAndSuffix = () => {
  return (
    <div className="space-y-5">
      <WindyProvider theme={theme}>
        <div className="flex space-x-5 items-end">
          <div className="w-1/2">
            <SelectNative
              options={options}
              fullWidth
              prefix="prefix.com/"
              type="text"
              placeholder="Prefix"
            />
          </div>
          <div className="w-1/2">
            <SelectNative
              options={options}
              fullWidth
              type="text"
              suffix="suffix.com"
              placeholder="Suffix"
            />
          </div>
        </div>
        <div className="flex space-x-5 items-end">
          <div className="w-1/2">
            <SelectNative
              options={options}
              fullWidth
              disabled
              prefix="prefix.com/"
              type="text"
              placeholder="disabled"
            />
          </div>
          <div className="w-1/2">
            <SelectNative
              options={options}
              disabled
              fullWidth
              type="text"
              suffix="suffix.com"
              placeholder="disabled"
            />
          </div>
        </div>
        <div className="flex space-x-5 items-end">
          <div className="w-1/2">
            <SelectNative
              options={options}
              fullWidth
              prefix={<EditIcon />}
              type="text"
              placeholder="with icon"
            />
          </div>
          <div className="w-1/2">
            <SelectNative
              options={options}
              fullWidth
              type="text"
              color="red"
              suffix={<EditIcon />}
              placeholder="with icon colored"
            />
          </div>
        </div>
      </WindyProvider>
    </div>
  );
};
