import React from "react";
import "tailwindcss/dist/tailwind.css";

import { WindyProvider, Checkbox } from "../../../index.js";

const theme = { checkbox: {} };

export const Size = () => {
  return (
    <div className="space-y-5">
      <p>Gradient:</p>
      <WindyProvider theme={theme}>
        <div className="flex space-x-5">
          <Checkbox label="default" />
          <Checkbox label="gray" color="gray" />
          <Checkbox disabled color="red" label="red" checked={true} />
          <Checkbox color="yellow" label="yellow" />
          <Checkbox color="green" label="green" />
          <Checkbox color="blue" label="blue" />
          <Checkbox color="indigo" label="indigo" />
          <Checkbox color="purple" label="purple" />
          <Checkbox color="pink" label="pink" />
        </div>
        <p className="mt-5">No gradient:</p>
        <div className="flex space-x-5">
          <Checkbox gradient={false} label="default" />
          <Checkbox gradient={false} label="gray" color="gray" />
          <Checkbox disabled gradient={false} color="red" label="red" />
          <Checkbox gradient={false} color="yellow" label="yellow" />
          <Checkbox gradient={false} color="green" label="green" />
          <Checkbox gradient={false} color="blue" label="blue" />
          <Checkbox gradient={false} color="indigo" label="indigo" />
          <Checkbox gradient={false} color="purple" label="purple" />
          <Checkbox gradient={false} color="pink" label="pink" />
        </div>
      </WindyProvider>
    </div>
  );
};
