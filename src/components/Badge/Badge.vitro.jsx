import React from "react";
import Badge from "./Badge";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";

const theme = { badge: {} };

export const Basic = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Badge text="Hello" />
        <Badge text="Disabled" disabled />
      </WindyProvider>
    </div>
  );
};

export const Size = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Badge text="Hello" size="xs" />
        <Badge text="Hello" color="red" shadow="sm" size="sm" />
        <Badge text="Hello" color="yellow" shadow="md" size="md" />
        <Badge text="Hello" color="green" shadow="lg" size="lg" />
        <Badge text="Hello" color="purple" shadow="xl" size="xl" />
      </WindyProvider>
    </div>
  );
};
