import React from "react";
import Radio from "./Radio";
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
    <div GclassName="space-y-5">
      <p>Gradient:</p>
      <div className="flex space-x-5">
        <Radio color="gray" name="radio1" label="gray" />
        <Radio color="blue" name="radio1" label="red" />
        <Radio color="yellow" name="radio1" label="yellow" />
        <Radio color="green" name="radio1" label="green" />
        <Radio color="blue" name="radio1" label="blue" />
        <Radio color="indigo" name="radio1" label="indigo" />
        <Radio color="purple" name="radio1" label="purple" />
        <Radio color="pink" name="radio1" label="pink" />
      </div>
      <p className="mt-5">No gradient:</p>
      <div className="flex space-x-5">
        <Radio gradient={false} name="radio2" color="gray" label="gray" />
        <Radio gradient={false} name="radio2" color="blue" label="red" />
        <Radio gradient={false} name="radio2" color="yellow" label="yellow" />
        <Radio gradient={false} name="radio2" color="green" label="green" />
        <Radio gradient={false} name="radio2" color="blue" label="blue" />
        <Radio gradient={false} name="radio2" color="indigo" label="indigo" />
        <Radio gradient={false} name="radio2" color="purple" label="purple" />
        <Radio gradient={false} name="radio2" color="pink" label="pink" />
      </div>
    </div>
  );
};
