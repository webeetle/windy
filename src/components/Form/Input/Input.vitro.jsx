import React from "react";
import Input from "./Input";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../../index.js";

const theme = { input: {} };

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

export const Size = () => {
  return (
    <div className="space-y-5 py-5">
      <WindyProvider theme={theme}>
        <Input disabled size="xs" type="text" placeholder="disabled input xs" />
        <Input size="sm" type="text" placeholder="input sm" />
        <Input type="text" placeholder="input md" />
        <Input size="lg" type="text" placeholder="input lg" />
        <Input size="xl" type="text" placeholder="input xl" />
        <Input
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
          <Input
            fullWidth
            label={"A small label"}
            id="ok"
            color="indigo"
            type="text"
            placeholder="indigo"
          />
        </div>
        <div className="w-1/2">
          <Input
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
          <Input fullWidth label={"A date type"} type="date" />
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
            <Input
              fullWidth
              prefix="prefix.com/"
              type="text"
              placeholder="Prefix"
            />
          </div>
          <div className="w-1/2">
            <Input
              fullWidth
              type="text"
              suffix="suffix.com"
              placeholder="Suffix"
            />
          </div>
        </div>
        <div className="flex space-x-5 items-end">
          <div className="w-1/2">
            <Input
              fullWidth
              disabled
              prefix="prefix.com/"
              type="text"
              placeholder="disabled"
            />
          </div>
          <div className="w-1/2">
            <Input
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
            <Input
              fullWidth
              prefix={<EditIcon />}
              type="text"
              placeholder="with icon"
            />
          </div>
          <div className="w-1/2">
            <Input
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
