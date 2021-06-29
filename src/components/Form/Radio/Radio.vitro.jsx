import React from "react";
import Radio from "./Radio";
import "tailwindcss/dist/tailwind.css";

export const Size = () => {
  return (
    <div GclassName="space-y-5">
      <p>Gradient:</p>
      <div className="flex space-x-5">
        <Radio color="gray" name="radio1" label="gray" />
        <Radio disabled color="red" name="radio1" label="red" />
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
        <Radio gradient={false} name="radio2" color="red" label="red" />
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
