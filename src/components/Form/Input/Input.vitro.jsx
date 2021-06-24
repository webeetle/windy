import React from "react";
import Input from "./Input";
import "tailwindcss/dist/tailwind.css";

export const Size = () => {
  return (
    <div className="space-y-5">
      <Input size="xs" type="text" name="peppe" placeholder="input xs" />
      <Input size="sm" type="text" name="peppe" placeholder="input sm" />
      <Input type="text" name="peppe" placeholder="input md" />
      <Input size="lg" type="text" name="peppe" placeholder="input lg" />
      <Input size="xl" type="text" name="peppe" placeholder="input xl" />
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
          fullWidth
          type="text"
          suffix="suffix.com"
          placeholder="Lorem ipsum"
        />
      </div>
    </div>
  );
};
