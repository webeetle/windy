import React from "react";
import Avatar from "./Avatar";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";

const theme = {
  avatar: { rounded: "full", size: "md", color: "indigo", stroke: "md" },
};

export const Basic = () => {
  return (
    <div className="flex items-center space-x-3">
      <WindyProvider theme={theme}>
        <div className="flex items-center">
          <Avatar />
        </div>
      </WindyProvider>
    </div>
  );
};

export const Rounded = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <div className="flex flex-col items-center">
          <Avatar rounded="none" color="blue" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="lg" color="red" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="yellow" />
        </div>
      </WindyProvider>
    </div>
  );
};

export const Stroke = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="blue" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="red" stroke="md" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="red" stroke="lg" />
        </div>
      </WindyProvider>
    </div>
  );
};

export const Size = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="blue" stroke="none" size="xs" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="red" stroke="md" size="sm" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="red" stroke="lg" size="md" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="red" stroke="lg" size="lg" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" color="red" stroke="lg" size="xl" />
        </div>
      </WindyProvider>
    </div>
  );
};

export const Shadow = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" shadow="none" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" shadow="sm" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" shadow="md" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" shadow="lg" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar rounded="full" shadow="xl" stroke="none" />
        </div>
      </WindyProvider>
    </div>
  );
};
