import React from "react";
import Checkbox from "./Checkbox";
import "tailwindcss/dist/tailwind.css";

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

export const Size = () => {
  return (
    <div className="flex space-x-5">
      <Checkbox color="gray" label="gray" />
      <Checkbox color="blue" label="red" />
      <Checkbox color="yellow" label="yellow" />
      <Checkbox color="green" label="green" />
      <Checkbox color="blue" label="blue" />
      <Checkbox color="indigo" label="indigo" />
      <Checkbox color="purple" label="purple" />
      <Checkbox color="pink" label="pink" />
    </div>
  );
};
