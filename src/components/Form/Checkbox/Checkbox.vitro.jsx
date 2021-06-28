import React from "react";
import Checkbox from "./Checkbox";
import "tailwindcss/dist/tailwind.css";

export const Size = () => {
  return (
    <div GclassName="space-y-5">
      <p>Gradient:</p>
      <div className="flex space-x-5">
        <Checkbox color="gray" label="gray" />
        <Checkbox color="red" label="red" checked={true} />
        <Checkbox color="yellow" label="yellow" />
        <Checkbox color="green" label="green" />
        <Checkbox color="blue" label="blue" />
        <Checkbox color="indigo" label="indigo" />
        <Checkbox color="purple" label="purple" />
        <Checkbox color="pink" label="pink" />
      </div>
      <p className="mt-5">No gradient:</p>
      <div className="flex space-x-5">
        <Checkbox gradient={false} color="gray" label="gray" />
        <Checkbox gradient={false} color="red" label="red" />
        <Checkbox gradient={false} color="yellow" label="yellow" />
        <Checkbox gradient={false} color="green" label="green" />
        <Checkbox gradient={false} color="blue" label="blue" />
        <Checkbox gradient={false} color="indigo" label="indigo" />
        <Checkbox gradient={false} color="purple" label="purple" />
        <Checkbox gradient={false} color="pink" label="pink" />
      </div>
    </div>
  );
};
