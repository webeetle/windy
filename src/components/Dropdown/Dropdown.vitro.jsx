import React from "react";
import Dropdown from "./Dropdown";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider } from "../../index.js";

const theme = { dropdown: {} };

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
const options = [
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
];

export const Contained = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Dropdown
          buttonText="Text Button"
          layout="contained"
          options={options}
        />

        <Dropdown
          color="gray"
          layout="contained"
          caret={false}
          buttonText="No Caret"
          options={options}
        />

        <Dropdown
          color="yellow"
          buttonText={<EditIcon />}
          layout="contained"
          caret={false}
          options={options}
        />
      </WindyProvider>
    </div>
  );
};

export const Bordered = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Dropdown
          buttonText="Text Button"
          layout="bordered"
          options={options}
        />

        <Dropdown
          color="gray"
          layout="bordered"
          caret={false}
          buttonText="No Caret"
          options={options}
        />

        <Dropdown
          color="yellow"
          buttonText={<EditIcon />}
          layout="bordered"
          caret={false}
          options={options}
        />
      </WindyProvider>
    </div>
  );
};

export const Text = () => {
  return (
    <div className="flex items-center space-x-5">
      <WindyProvider theme={theme}>
        <Dropdown buttonText="Text Button" layout="text" options={options} />

        <Dropdown
          color="gray"
          layout="text"
          caret={false}
          buttonText="No Caret"
          options={options}
        />

        <Dropdown
          color="yellow"
          buttonText={<EditIcon />}
          layout="text"
          caret={false}
          options={options}
        />
      </WindyProvider>
    </div>
  );
};

export const Sizing = () => {
  return (
    <div className="space-y-10">
      <WindyProvider theme={theme}>
        <div className="flex items-center space-x-5">
          <Dropdown size="xs" buttonText="Dropdown XS" options={options} />
          <Dropdown size="sm" buttonText="Dropdown SM" options={options} />
          <Dropdown size="md" buttonText="Dropdown MD" options={options} />
          <Dropdown size="lg" buttonText="Dropdown LG" options={options} />
          <Dropdown size="xl" buttonText="Dropdown XL" options={options} />
        </div>
        <div className="flex items-center space-x-5">
          <Dropdown
            size="xs"
            buttonText="Dropdown XS"
            layout="bordered"
            options={options}
          />
          <Dropdown
            size="sm"
            buttonText="Dropdown SM"
            layout="bordered"
            options={options}
          />
          <Dropdown
            size="md"
            buttonText="Dropdown MD"
            layout="bordered"
            options={options}
          />
          <Dropdown
            size="lg"
            buttonText="Dropdown LG"
            layout="bordered"
            options={options}
          />
          <Dropdown
            size="xl"
            buttonText="Dropdown XL"
            layout="bordered"
            options={options}
          />
        </div>
        <div className="flex items-center space-x-14">
          <Dropdown
            size="xs"
            buttonText="Dropdown XS"
            layout="text"
            options={options}
          />
          <Dropdown
            size="sm"
            buttonText="Dropdown SM"
            layout="text"
            options={options}
          />
          <Dropdown
            size="md"
            buttonText="Dropdown MD"
            layout="text"
            options={options}
          />
          <Dropdown
            size="lg"
            buttonText="Dropdown LG"
            layout="text"
            options={options}
          />
          <Dropdown
            size="xl"
            buttonText="Dropdown XL"
            layout="text"
            options={options}
          />
        </div>
      </WindyProvider>
    </div>
  );
};
