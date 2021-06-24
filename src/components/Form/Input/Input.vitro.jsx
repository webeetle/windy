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
          id="ok"
          label="A Long Label"
          type="text"
          color="indigo"
          name="peppe"
          placeholder="indigo"
          Long
        />
      </div>
      <div className="w-1/2">
        <Input
          fullWidth
          type="text"
          color="red"
          name="peppe"
          placeholder="red"
        />
      </div>
    </div>
  );
};
