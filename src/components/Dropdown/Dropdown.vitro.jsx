import React from "react";
import Dropdown from "./Dropdown";
import "tailwindcss/dist/tailwind.css";

export const Contained = () => {
  return (
    <div className="flex items-center space-x-5">
      <Dropdown
        color="gray"
        layout="contained"
        caret={false}
        buttonText="No Icon"
        options={[
          {
            label: "Text With Icon",
            icon: <EditIcon />,
            className: "hover:bg-indigo-100",
            handler: () => alert("Clicked"),
          },
          {
            label: "Text",
            icon: null,
            handler: () => console.log("Clicked"),
          },
        ]}
      />
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
      <Dropdown
        color="gray"
        layout="bordered"
        caret={false}
        buttonText="No Icon"
        options={[
          {
            label: "Text With Icon",
            icon: <EditIcon />,
            className: "hover:bg-indigo-100",
            handler: () => alert("Clicked"),
          },
          {
            label: "Text",
            icon: null,
            handler: () => console.log("Clicked"),
          },
        ]}
      />
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
      <Dropdown
        color="gray"
        layout="text"
        caret={false}
        buttonText="No Icon"
        options={[
          {
            label: "Text With Icon",
            icon: <EditIcon />,
            className: "hover:bg-indigo-100",
            handler: () => alert("Clicked"),
          },
          {
            label: "Text",
            icon: null,
            handler: () => console.log("Clicked"),
          },
        ]}
      />
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

const EditIcon = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
    </svg>
  );
};
