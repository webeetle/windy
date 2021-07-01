import React from "react";
import Button from "./Button";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";

const theme = { button: {} };

export const Contained = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Button>Default Button</Button>
      </WindyProvider>
    </div>
  );
};

export const Bordered = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Button layout="bordered">Default Button</Button>
      </WindyProvider>
    </div>
  );
};
export const Text = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Button layout="text">Default Button</Button>
      </WindyProvider>
    </div>
  );
};

export const Sizing = () => {
  return (
    <div className="space-y-10">
      <WindyProvider theme={theme}>
        <div className="flex items-center space-x-5">
          <Button size="xs">XS Button</Button>
          <Button size="sm">SM Button</Button>
          <Button>Normal Button</Button>
          <Button size="lg">LG Button</Button>
          <Button size="xl">XL Button</Button>
        </div>
        <div className="flex items-center space-x-5">
          <Button size="xs" layout="bordered">
            XS Button
          </Button>
          <Button size="sm" layout="bordered">
            SM Button
          </Button>
          <Button layout="bordered">Normal Button</Button>
          <Button size="lg" layout="bordered">
            LG Button
          </Button>
          <Button size="xl" layout="bordered">
            XL Button
          </Button>
        </div>
        <div className="flex items-center space-x-14">
          <Button size="xs" layout="text">
            XS Button
          </Button>
          <Button size="sm" layout="text">
            SM Button
          </Button>
          <Button layout="text">Normal Button</Button>
          <Button size="lg" layout="text">
            LG Button
          </Button>
          <Button size="xl" layout="text">
            XL Button
          </Button>
        </div>
      </WindyProvider>
    </div>
  );
};
