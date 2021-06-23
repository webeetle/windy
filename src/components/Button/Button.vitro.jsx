import React from "react";
import Button from "./Button";
import "tailwindcss/dist/tailwind.css";

export const Contained = () => {
  return (
    <div className="flex items-center space-x-5">
      <Button color="gray">Button</Button>
      <Button color="red">Button</Button>
      <Button color="yellow">Button</Button>
      <Button color="green">Button</Button>
      <Button color="blue">Button</Button>
      <Button color="indigo">Button</Button>
      <Button color="purple">Button</Button>
      <Button color="pink">Button</Button>
      <Button color="purple" disabled>
        Disabled
      </Button>
      <Button color="pink" disabled>
        Disabled
      </Button>
    </div>
  );
};

export const Bordered = () => {
  return (
    <div className="flex items-center space-x-5">
      <Button disabled={true} color="gray" layout="bordered">
        Button
      </Button>
      <Button color="red" layout="bordered">
        Button
      </Button>
      <Button color="yellow" layout="bordered">
        Button
      </Button>
      <Button color="green" layout="bordered">
        Button
      </Button>
      <Button color="blue" layout="bordered">
        Button
      </Button>
      <Button color="indigo" layout="bordered">
        Button
      </Button>
      <Button color="purple" layout="bordered">
        Button
      </Button>
      <Button color="pink" layout="bordered">
        Button
      </Button>
      <Button color="purple" layout="bordered" disabled>
        Disabled
      </Button>
      <Button color="pink" layout="bordered" disabled>
        Disabled
      </Button>
    </div>
  );
};
export const Text = () => {
  return (
    <div className="flex items-center space-x-5">
      <Button color="gray" layout="text">
        Button
      </Button>
      <Button color="red" layout="text">
        Button
      </Button>
      <Button color="yellow" layout="text">
        Button
      </Button>
      <Button color="green" layout="text">
        Button
      </Button>
      <Button color="blue" layout="text">
        Button
      </Button>
      <Button color="indigo" layout="text">
        Button
      </Button>
      <Button color="purple" layout="text">
        Button
      </Button>
      <Button color="pink" layout="text">
        Button
      </Button>
      <Button layout="text" disabled>
        Disabled
      </Button>
    </div>
  );
};

export const Sizing = () => {
  return (
    <div className="space-y-10">
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
    </div>
  );
};
