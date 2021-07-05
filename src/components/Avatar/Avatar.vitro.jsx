import React from "react";
import Avatar from "./Avatar";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";

const theme = {
  avatar: { rounded: "full", size: "md", stroke: "md" },
};

const src =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

export const Basic = () => {
  return (
    <div className="flex items-center space-x-3">
      <WindyProvider theme={theme}>
        <div className="flex items-center">
          <Avatar src={src} />
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
          <Avatar src={src} rounded="none" color="blue" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="lg" color="red" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" color="yellow" />
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
          <Avatar src={src} rounded="full" color="blue" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" color="red" stroke="md" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" color="red" stroke="lg" />
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
          <Avatar
            src={src}
            rounded="full"
            color="blue"
            stroke="none"
            size="xs"
          />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" color="red" stroke="md" size="sm" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" color="red" stroke="lg" size="md" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" color="red" stroke="lg" size="lg" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" color="red" stroke="lg" size="xl" />
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
          <Avatar src={src} rounded="full" shadow="none" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" shadow="sm" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" shadow="md" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" shadow="lg" stroke="none" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar src={src} rounded="full" shadow="xl" stroke="none" />
        </div>
      </WindyProvider>
    </div>
  );
};

export const Text = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <div className="flex flex-col items-center">
          <Avatar layout="text" text="RT" size="xs" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar layout="text" text="RT" size="sm" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar layout="text" text="RT" size="md" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar layout="text" text="RT" size="lg" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar layout="text" text="RT" size="xl" />
        </div>
      </WindyProvider>
    </div>
  );
};
