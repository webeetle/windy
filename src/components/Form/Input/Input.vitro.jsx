import React from "react";
import Input from "./Input";
import "tailwindcss/dist/tailwind.css";

export const Size = () => {
  return (
    <div className="space-y-5">
      <Input disabled size="xs" type="text" placeholder="disabled input xs" />
      <Input size="sm" type="text" placeholder="input sm" />
      <Input type="text" placeholder="input md" />
      <Input size="lg" type="text" placeholder="input lg" />
      <Input size="xl" type="text" placeholder="input xl" />
    </div>
  );
};

export const ColorAndLabel = () => {
  return (
    <div className="flex space-x-5 items-end">
      <div className="w-1/2">
        <Input
          fullWidth
          label={"A small label"}
          id="ok"
          color="indigo"
          type="text"
          placeholder="indigo"
        />
      </div>
      <div className="w-1/2">
        <Input
          label={"A very very long label"}
          fullWidth
          type="text"
          color="red"
          placeholder="red"
        />
      </div>
    </div>
  );
};

export const PrefixAndSuffix = () => {
  return (
    <div className="flex space-x-5 items-end">
      <div className="w-1/2">
        <Input
          fullWidth
          id="ok"
          prefix="prefix.com/"
          type="text"
          placeholder="Lorem ipsum"
        />
      </div>
      <div className="w-1/2">
        <Input
          disabled
          fullWidth
          type="text"
          suffix="suffix.com"
          placeholder="disabled"
        />
      </div>
    </div>
  );
};
