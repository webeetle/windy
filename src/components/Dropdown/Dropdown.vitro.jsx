import React from "react";
import Dropdown from "./Dropdown";
import "tailwindcss/dist/tailwind.css";

export const Contained = () => {
  return (
    <div className="flex items-center space-x-5">
      <Dropdown color="gray" layout="contained" />
      <Dropdown color="red" layout="contained" />
      <Dropdown color="yellow" layout="contained" />
      <Dropdown color="green" layout="contained" />
      <Dropdown color="blue" layout="contained" />
      <Dropdown color="indigo" layout="contained" />
      <Dropdown color="purple" layout="contained" />
      <Dropdown color="pink" layout="contained" />
    </div>
  );
};

export const Bordered = () => {
  return (
    <div className="flex items-center space-x-5">
      <Dropdown color="gray" layout="bordered" />
      <Dropdown color="red" layout="bordered" />
      <Dropdown color="yellow" layout="bordered" />
      <Dropdown color="green" layout="bordered" />
      <Dropdown color="blue" layout="bordered" />
      <Dropdown color="indigo" layout="bordered" />
      <Dropdown color="purple" layout="bordered" />
      <Dropdown color="pink" layout="bordered" />
    </div>
  );
};

export const Text = () => {
  return (
    <div className="flex items-center space-x-5">
      <Dropdown color="gray" layout="text" />
      <Dropdown color="red" layout="text" />
      <Dropdown color="yellow" layout="text" />
      <Dropdown color="green" layout="text" />
      <Dropdown color="blue" layout="text" />
      <Dropdown color="indigo" layout="text" />
      <Dropdown color="purple" layout="text" />
      <Dropdown color="pink" layout="text" />
    </div>
  );
};

export const Sizing = () => {
  return (
    <div className="space-y-10">
      <div className="flex items-center space-x-5">
        <Dropdown size="xs" buttonText="Dropdown XS" />
        <Dropdown size="sm" buttonText="Dropdown SM" />
        <Dropdown size="md" buttonText="Dropdown MD" />
        <Dropdown size="lg" buttonText="Dropdown LG" />
        <Dropdown size="xl" buttonText="Dropdown XL" />
      </div>
      <div className="flex items-center space-x-5">
        <Dropdown size="xs" buttonText="Dropdown XS" layout="bordered" />
        <Dropdown size="sm" buttonText="Dropdown SM" layout="bordered" />
        <Dropdown size="md" buttonText="Dropdown MD" layout="bordered" />
        <Dropdown size="lg" buttonText="Dropdown LG" layout="bordered" />
        <Dropdown size="xl" buttonText="Dropdown XL" layout="bordered" />
      </div>
      <div className="flex items-center space-x-14">
        <Dropdown size="xs" buttonText="Dropdown XS" layout="text" />
        <Dropdown size="sm" buttonText="Dropdown SM" layout="text" />
        <Dropdown size="md" buttonText="Dropdown MD" layout="text" />
        <Dropdown size="lg" buttonText="Dropdown LG" layout="text" />
        <Dropdown size="xl" buttonText="Dropdown XL" layout="text" />
      </div>
    </div>
  );
};
